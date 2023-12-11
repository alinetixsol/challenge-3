
const randomNumber = async (req, res) => {
    try {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        res.json({ sucess: true, number: randomNum });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}

module.exports = {
    randomNumber
}