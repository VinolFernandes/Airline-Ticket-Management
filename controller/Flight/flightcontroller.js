const pool = require("../../utils/database.config");

module.exports.fetch = async (req, res) => {
    try {
        if (req.query.fid) {
            const flight = await pool.query("select * from flight_details where fid=$1", [req.query.fid]);
            return flight.rows;
        }
        const flight = await pool.query("select * from flight");
        return flight.rows;

    } catch (e) {
        console.log(e);
        res.status(500).json();
    }
}

module.exports.fetchflight = async (req, res) => {
    try {
        if (req.query.fid) {
            const flight = await pool.query("select fd.fid,fd.depdate,fd.arrdate,f.airlinename from flight_details fd,flight f where fd.fid=$1 and depdate>=$2 and f.fid=fd.fid", [req.query.fid,new Date()]);
            return flight.rows;
        }
        

    } catch (e) {
        console.log(e);
        res.status(500).json();
    }
}