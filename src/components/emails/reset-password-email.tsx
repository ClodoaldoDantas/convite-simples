import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

type ResetPasswordEmail = {
  userEmail: string
  resetLink: string
}

export const ResetPasswordEmail = ({
  userEmail,
  resetLink,
}: ResetPasswordEmail) => {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Redefina sua senha para continuar</Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            <Section className="text-center mb-[32px]">
              <Heading className="text-[32px] font-bold text-gray-900 m-0">
                Redefinição de Senha
              </Heading>
            </Section>

            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Olá,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Recebemos uma solicitação para redefinir a senha da sua conta
                associada a <strong>{userEmail}</strong>.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Clique no botão abaixo para criar uma nova senha. Este link
                expirará em breve por motivos de segurança.
              </Text>
            </Section>

            <Section className="text-center mb-[32px]">
              <Button
                href={resetLink}
                className="bg-blue-600 text-white px-[24px] py-[12px] rounded-[6px] text-[16px] font-medium no-underline box-border"
              >
                Redefina sua senha
              </Button>
            </Section>

            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px]">
                Se o botão não funcionar, você pode copiar e colar este link no
                seu navegador:
              </Text>
              <Text className="text-[14px] text-blue-600 leading-[20px] break-all">
                {resetLink}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
