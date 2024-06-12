import {
  Html,
  Head,
  Font,
  Preview,
  Row,
  Section,
  Text,
  Button,
  Heading,
} from "@react-email/components";

interface VerificaitonEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificaitonEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css?family=Roboto",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>

      <Section>
        <Row>
          <Heading as="h2">Hello {username}</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. PLease use the following code to verify
            your account.
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>

        <Row>
          <Text>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
