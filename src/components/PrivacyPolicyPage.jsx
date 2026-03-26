import React from 'react';

const sections = [
  {
    title: '1. Compromisso com a privacidade',
    content: [
      'A YRM Strategy Lab respeita a sua privacidade e está comprometida com a proteção dos dados pessoais de visitantes, leads, clientes e parceiros.',
      'Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).',
      'Ao utilizar este site, seus formulários e canais de contato, você concorda com as práticas descritas neste documento.',
    ],
  },
  {
    title: '2. Coleta de dados',
    content: [
      'Coletamos apenas os dados necessários para cumprir finalidades legítimas, de forma ética, transparente e proporcional.',
      'Nesta landing page, coletamos diretamente os seguintes dados quando você solicita entrar na lista de espera da mentoria: nome, e-mail e WhatsApp.',
      'Também podemos coletar automaticamente dados de navegação, como endereço IP, tipo de navegador, dispositivo utilizado, páginas acessadas, tempo de permanência e cookies.',
    ],
  },
  {
    title: '3. Finalidade do uso dos dados',
    content: [
      'Os dados pessoais coletados podem ser utilizados para entrar em contato com você, avisar sobre abertura de turma, enviar comunicações relacionadas à mentoria, organizar a gestão de leads e melhorar a experiência no site.',
      'A YRM Strategy Lab não utiliza seus dados para finalidades incompatíveis com aquelas informadas ao titular.',
    ],
  },
  {
    title: '4. Compartilhamento de dados',
    content: [
      'A YRM Strategy Lab não vende, aluga ou comercializa dados pessoais.',
      'Os dados poderão ser compartilhados apenas com fornecedores e parceiros operacionais essenciais, como CRM, automação, ferramentas de e-mail, analytics e infraestrutura, sempre com medidas de confidencialidade, segurança e conformidade com a LGPD.',
      'Os dados também poderão ser compartilhados quando houver obrigação legal ou determinação de autoridade competente.',
    ],
  },
  {
    title: '5. Armazenamento e segurança',
    content: [
      'Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acesso não autorizado, perda, destruição, alteração indevida, vazamento ou divulgação indevida.',
      'Os dados são armazenados em ambientes compatíveis com boas práticas de mercado e mantidos apenas pelo tempo necessário para cumprir suas finalidades, salvo obrigações legais que exijam retenção por período superior.',
    ],
  },
  {
    title: '6. Direitos dos titulares',
    content: [
      'Nos termos da LGPD, você pode solicitar confirmação da existência de tratamento, acesso aos seus dados, correção de informações incompletas ou desatualizadas, anonimização, bloqueio, eliminação, portabilidade e revogação de consentimento, quando aplicável.',
      'Para exercer seus direitos, entre em contato pelo e-mail: contato@yrmstrategylab.com.br.',
    ],
  },
  {
    title: '7. Uso de cookies',
    content: [
      'Utilizamos cookies e tecnologias semelhantes para melhorar navegação, desempenho, segurança e experiência do usuário.',
      'Você pode configurar seu navegador para bloquear ou alertar sobre o uso de cookies, ciente de que algumas funcionalidades do site podem ser impactadas.',
    ],
  },
  {
    title: '8. Alterações nesta política',
    content: [
      'Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir melhorias operacionais, mudanças legais ou regulatórias.',
      'Recomendamos revisão periódica deste documento.',
      'Data da última atualização: 15/12/2025.',
    ],
  },
  {
    title: '9. Contato',
    content: [
      'YRM Strategy Lab',
      'E-mail: contato@yrmstrategylab.com.br',
      'Site: www.yrmstrategylab.com.br',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#05070e] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[8%] w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[6%] right-[10%] w-80 h-80 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:56px_56px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-8 py-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-white transition-colors mb-10"
        >
          Voltar para a página inicial
        </a>

        <header className="max-w-3xl mb-16">
          <p className="text-primary font-label uppercase tracking-[0.22em] text-xs font-bold mb-4">
            Política de Privacidade
          </p>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold leading-[1.02] tracking-tight mb-6">
            Como tratamos seus dados neste site.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
            Este documento explica de forma clara como a YRM Strategy Lab coleta, utiliza, armazena e protege dados pessoais no contexto desta landing page e da comunicação sobre a mentoria.
          </p>
        </header>

        <section className="space-y-8">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10"
            >
              <h2 className="font-headline text-2xl md:text-3xl font-bold mb-5 text-white">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, index) => (
                  <p key={index} className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
