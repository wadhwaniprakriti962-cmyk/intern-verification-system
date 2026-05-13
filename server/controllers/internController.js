const Intern = require("../models/Intern");

const generateVerificationCode=async (req,res)=>{
    try{
        const { name, designation, duration } = req.body;
        const char="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        const code =
  Date.now().toString(36) +
  Math.random().toString(36).substring(2, 10).toUpperCase();
        const intern = new Intern({
    name,
    designation,
    duration,
    verificationCode: code
});
await intern.save()
res.status(201).json({
    success: true,
    verificationCode: code
})
    }
    catch(error){
    res.status(500).json({
        success:false,
        message:error.message
    })
}
}

const verifyCode = async (req, res) => {
  try {
    const code = req.params.code.trim();

    const intern = await Intern.findOne({ verificationCode: code });

    if (!intern) {
      return res.json({
        success: false,
        message: "Not Found"
      });
    }

    return res.json({
      success: true,
      intern: {
        name: intern.name,
        designation: intern.designation,
        duration: intern.duration
      }
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
const getAllInterns=async (req,res)=>{
    try{
        const interns=await Intern.find();
        
        const totalCount=interns.length

        res.status(200).json({
            success:true,
            totalInterns:totalCount,
            interns
        })
    }
        catch (error) {
  console.log("🔥 FULL ERROR:", error);

    }}

module.exports = {
    generateVerificationCode,
    verifyCode,getAllInterns
}