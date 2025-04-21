import axios from "axios";
import { Response, Request } from "express";

export const sendOtp = async (req: Request, res: Response) => {
  const { phoneno } = req.body;
  console.log("Phone Number: ", phoneno);
  const url = `${process.env.OTP_API_URL}/SMS/${encodeURIComponent(
    phoneno
  )}/AUTOGEN3/OTP1`;
  console.log("URL: ", url);
  try {
    const response = await axios.get(url);
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error: any) {
    const errorMsg = error.response?.data || error.message;
    res.status(500).json({
      success: false,
      message: "Failed to send OTP",
      error: errorMsg,
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { phoneno, otp } = req.body;

  if (!phoneno || !otp) {
    res.status(400).json({
      success: false,
      message: "Phone number and OTP are required",
    });
    return;
  }

  const url = `${process.env.OTP_API_URL}/SMS/VERIFY3/${encodeURIComponent(
    phoneno
  )}/${encodeURIComponent(otp)}`;

  try {
    const response = await axios.get(url);
    if (response.data.Status === "Success") {
      res.status(200).json({
        success: true,
        message: response.data.Details,
      });
      return;
    }
    res.status(200).json({
      success: false,
      message: response.data.Details,
    });
  } catch (error: any) {
    const errorMsg = error.response?.data || error.message;
    res.status(500).json({
      success: false,
      message: "Failed to verify OTP",
      error: errorMsg,
    });
  }
};
