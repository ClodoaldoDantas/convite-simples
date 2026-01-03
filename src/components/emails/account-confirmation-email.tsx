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

type AccountConfirmationEmailProps = {
  userEmail: string
  confirmationUrl: string
}

export const AccountConfirmationEmail = ({
  userEmail,
  confirmationUrl,
}: AccountConfirmationEmailProps) => {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Confirme sua conta para começar</Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            <Section className="text-center mb-[32px]">
              <Heading className="text-[32px] font-bold text-gray-900 m-0">
                Convite Simples
              </Heading>
            </Section>

            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Olá,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Obrigado por se inscrever! Por favor, confirme sua conta
                clicando no botão abaixo para começar a usar nossos serviços.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Seu email: <strong>{userEmail}</strong>
              </Text>
            </Section>

            <Section className="text-center mb-[32px]">
              <Button
                href={confirmationUrl}
                className="bg-blue-600 text-white px-[24px] py-[12px] rounded-[6px] text-[16px] font-medium no-underline box-border"
              >
                Confirme sua conta
              </Button>
            </Section>

            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px]">
                Se o botão acima não funcionar, copie e cole o seguinte link na
                barra de endereços do seu navegador:
              </Text>
              <Text className="text-[14px] text-blue-600 leading-[20px] break-all">
                {confirmationUrl}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
