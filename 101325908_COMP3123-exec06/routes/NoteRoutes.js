const express = require("express");
const router = express.Router();

const note_model = require('../models/NotesModel');

//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const new_note = await note_model.create({
        noteTitle: req.body.content.noteTitle,
        noteDescription: req.body.content.noteDescription
    });

    res.status(201).send({
        status: true,
        message: "Note has been successfully created",
        note: new_note
    });
});

//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const notes = await note_model.find();

    res.status(200).json({
        status: true,
        result: notes.length,
        notes
    });
});

//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const note = await note_model.findById(req.params.noteId);

    res.status(200).json({
        status: true,
        note
    });
});

//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    const updated_note = await note_model.findOneAndUpdate(
        { _id: req.params.noteId },
        req.body.content,
        {
            new: true,
            runValidators: true
        }
    );

    res.status(200).json({
        status: true,
        message: "Note has been successfully updated",
        updated_note
    })
});

//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    await note_model.findByIdAndDelete(req.params.noteId);

    res.status(204).json({
        status: true
    });
});

module.exports = router;