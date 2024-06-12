import { resend } from "../lib/resend";

import VerificationEmail from "../../emails/verificationEmail";

import { ApiResponse } from "@/types/ApiResponse";
import { Verification } from "next/dist/lib/metadata/types/metadata-types";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Feedbacker Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification email sent",
      messages: [],
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error sending verification email",
      messages: [],
    };
  }
}
