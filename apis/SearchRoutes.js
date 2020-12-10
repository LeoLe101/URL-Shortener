'use strict';

const SearchRoutes = require('express').Router();
const Constants = require('../utils/Constants');
const StringUtil = require('../utils/StringUtil');
const MockDB = require('../Mock/data.json'); // Get Data from JSON instead of DB

// Getting the Data from a local JSON file to simulate the actual hosted database.
// The reason for this is because of unknown data type.
// Assuming the data.json is the data coming back from a database
SearchRoutes.get('/data', async (req, res) => {
    console.log('--- DATA { GET } ---');
    try {
        const len = MockDB.length;
        const page = parseInt(req.query.page) * 10;
        const hasMoreData = len - page;

        // Pagination only return 10 datas for 1 page
        // This is the limitation for the user, but
        // easier for server to maintain
        let responseDB;
        if (page < len) {
            responseDB = MockDB.slice(page - 10, page);
        } else {
            responseDB = MockDB.slice(len - 10, len - 1);
        }

        return res.status(200).json({
            data: responseDB,
            message: 'Successfully searched for data!',
            hasMore: hasMoreData,
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Server Error! Unable to process search query.',
            success: false
        });
    }
});

// Post Request to generate URL Code
SearchRoutes.get('/search', async (req, res) => {
    console.log('--- SEARCH { GET } ---');
    if (!req.query) {
        res.status(401).json({
            message: 'Server Error! Please Try Again.',
            success: false
        });
        return;
    }

    try {
        const searchBy = req.query.searchBy;
        const searchQuery = req.query.searchQuery;

        let responseDB;
        const KEYWORD = StringUtil.GetNameWithoutSpace(searchQuery.trim()).toLowerCase();

        switch (searchBy) {
            case 'origin':
                responseDB = MockDB.filter(data => {
                    const origin = StringUtil.GetNameWithoutSpace(data.origin.trim()).toLowerCase();
                    return origin.includes(KEYWORD);
                });
                break;

            case 'variety':
                responseDB = MockDB.filter(data => {
                    const variety = StringUtil.GetNameWithoutSpace(data.variety.trim()).toLowerCase();
                    return variety.includes(KEYWORD);
                });
                break;

            case 'name':
            default:
                responseDB = MockDB.filter(data => {
                    const name = StringUtil.GetNameWithoutSpace(data.blend_name.trim()).toLowerCase();
                    return name.includes(KEYWORD);
                });
                break;
        }

        const hasMoreData = MockDB.length - responseDB.length;

        return res.status(201).json({
            data: responseDB,
            message: 'Successfully searched for data!',
            hasMore: hasMoreData,
            success: true,
        });

    } catch {
        return res.status(400).json({
            message: 'Invalid Search Query! Please Try Again.',
            success: false
        });
    }
});

module.exports = SearchRoutes;