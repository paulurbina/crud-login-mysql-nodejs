const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
//CONECCTION DATABASE
const pool = require('../database');


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  ADD LINK
 */
router.get('/add', isLoggedIn, (req, res) => {
    res.render('links/add');
});

router.post('/add', isLoggedIn, async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Link saved successfully!');
    res.redirect('/links');
});

/**
 * 
 * 
 * 
 * ALL LINKS
 */

router.get('/', isLoggedIn, async (req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.render('links/list', { links });
});


/**
 * 
 * 
 * 
 * DELETE LINKS
 */

router.get('/delete/:id', isLoggedIn,async (req, res) => {
    const { id }  = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    req.flash('success', 'Links removed Successfully!');
    res.redirect('/links');
});


/**
 * 
 * 
 * 
 * EDIT LINKS
 */
router.get('/edit/:id' , isLoggedIn,async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
    res.render('links/edit', { link: links[0] });
});

router.post('/edit/:id', isLoggedIn,async (req, res) => {
    const { id } = req.params;
    const { title, description, url } = req.body;
    const newLink = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links SET ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Link Updated Successfully');
    res.redirect('/links');
});


module.exports = router;