import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Clock3, Footprints, Heart,
  MessageCircle, Star, Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicPhone, clinicWhatsapp } from "@/lib/clinic-contact";
import logoAsset from "@/assets/aline-logo.png.asset.json";
import whatsappAsset from "@/assets/aline-whatsapp.png.asset.json";
import shareAsset from "@/assets/aline-compartilhar.jpg.asset.json";

const instagram = "https://www.instagram.com/aline_podologa32/";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Aline Podóloga | Cuidado e saúde para os seus pés" },
      { name: "description", content: "Atendimento em podologia para unhas encravadas e inflamadas, calos, calosidades, cravos, verruga plantar, queratose e onicomicose. Agende com Aline Podóloga." },
      { property: "og:title", content: "Aline Podóloga | Cuidado aos seus pés" },
      { property: "og:description", content: "Podologia com atenção, cuidado e atendimento humanizado. Agende seu horário." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://alinepodologa.lovable.app${shareAsset.url}` },
      { name: "twitter:image", content: `https://alinepodologa.lovable.app${shareAsset.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:locale", content: "pt_BR" },
      { name: "theme-color", content: "#16a6b5" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Unha encravada", text: "Cuidado especializado para unhas que crescem em direção à pele, com avaliação e manejo cuidadoso.", image: "/Tratamento%20Profissional%20de%20Unha%20Encravada.png" },
  { title: "Unha inflamada", text: "Avaliação da região avermelhada, inchada ou sensível para orientar o cuidado adequado.", image: "/Tratamento%20Profissional%20da%20Unha%20do%20P%C3%A9.png" },
  { title: "Cravo", text: "Atenção ao ponto de pressão doloroso, com cuidado podológico individualizado.", image: "/Tratamento%20de%20Calo%20em%20Cl%C3%ADnica%20Podol%C3%B3gica.png" },
  { title: "Calo normal", text: "Cuidado com o espessamento da pele causado principalmente por atrito e pressão.", image: "/Tratamento%20de%20Calo%20em%20Cl%C3%ADnica%20Podol%C3%B3gica.png" },
  { title: "Calo com núcleo", text: "Avaliação e cuidado da área endurecida que pode causar desconforto ao caminhar.", image: "/Tratamento%20de%20Calo%20em%20Cl%C3%ADnica%20Podol%C3%B3gica.png" },
  { title: "Verruga plantar", text: "Avaliação de lesões na sola dos pés e orientação sobre os cuidados indicados.", image: "/__l5e/assets-v1/podologia-verruga-plantar.png" },
  { title: "Queratose", text: "Cuidado com o aumento da espessura da pele, respeitando as características de cada pé.", image: "/Pedicure%20Cl%C3%ADnico%20com%20Tratamento%20do%20Calcanhar.png" },
  { title: "Onicomicose", text: "Avaliação de alterações nas unhas que podem estar relacionadas a infecções fúngicas.", image: "/Tratamento%20Profissional%20da%20Unha%20do%20P%C3%A9.png" },
];

const reviews = [
  { name: "Atenção em cada detalhe", text: "Um atendimento acolhedor começa ouvindo você, entendendo o desconforto e explicando cada etapa do cuidado." },
  { name: "Cuidado individualizado", text: "Cada pessoa e cada pé têm necessidades diferentes. A avaliação orienta o atendimento mais adequado para cada caso." },
  { name: "Mais conforto no dia a dia", text: "A orientação profissional e os cuidados podológicos ajudam você a manter uma rotina de atenção com a saúde dos pés." },
];

const faqs = [
  ["Como faço para agendar?", "É simples: toque em um dos botões de WhatsApp do site e envie uma mensagem para consultar horários disponíveis."],
  ["Quais problemas são atendidos?", "O atendimento contempla unha encravada, unha inflamada, cravo, calo normal, calo com núcleo, verruga plantar, queratose e onicomicose."],
  ["A podologia também atende bebês e crianças?", "Sim. O atendimento pode contemplar o público infantil, sempre com avaliação e cuidados adequados à idade e à necessidade apresentada."],
  ["Existe atendimento domiciliar?", "Há divulgação de atendimento home care. Consulte pelo WhatsApp a disponibilidade, a região atendida e as condições para o seu caso."],
  ["O que devo informar ao agendar?", "Conte brevemente o que está acontecendo, há quanto tempo percebeu a alteração e se existe dor, vermelhidão ou inchaço. A avaliação presencial orientará os próximos passos."],
];

function book(message = "Olá, Aline! Gostaria de agendar um atendimento de podologia. Pode me informar os horários disponíveis?") {
  window.open(`${clinicWhatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function Index() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  return (
    <main className="aline-site">
      <header className="aline-header">
        <a className="aline-brand" href="#inicio" aria-label="Aline Podóloga - início">
          <img className="aline-brand-logo" src={logoAsset.url} alt="Logomarca Aline Podóloga" width={48} height={64}/>
          <span><strong>Aline Podóloga</strong><small>cuidado aos seus pés</small></span>
        </a>
        <nav><a href="#sobre">Sobre</a><a href="#servicos">Procedimentos</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a></nav>
        <Button className="aline-header-cta" onClick={() => book()}>Agendar horário <ArrowRight size={17}/></Button>
      </header>

      <section className="aline-hero" id="inicio">
        <div className="aline-hero-shape"/>
        <div className="aline-container aline-hero-grid">
          <div className="aline-hero-copy">
            <img className="aline-hero-logo" src={logoAsset.url} alt="Logomarca Aline Podóloga" width={100} height={136}/>
            <span className="aline-eyebrow"><Footprints size={17}/> PODOLOGIA • CUIDADO E BEM-ESTAR</span>
            <h1>Seus pés merecem <em>cuidado especial.</em></h1>
            <p>Saúde, conforto e atenção em cada atendimento. A podologia cuida dos seus pés com avaliação individual e procedimentos adequados às suas necessidades.</p>
            <div className="aline-hero-actions">
              <Button onClick={() => book()}>Agende seu atendimento <ArrowRight size={18}/></Button>
              <a href="#servicos">Conheça os procedimentos</a>
            </div>
            <div className="aline-hero-points"><span><Check/> Atendimento com atenção</span><span><Check/> Cuidado individualizado</span></div>
          </div>
          <div className="aline-hero-visual">
            <img src="/Tratamento%20Profissional%20de%20Unha%20Encravada.png" alt="Atendimento profissional de podologia"/>
            <div className="aline-floating-note"><span><Heart size={19}/></span><div><strong>Cuide dos seus pés</strong><small>Seu bem-estar começa por eles</small></div></div>
          </div>
        </div>
      </section>

      <section className="aline-marquee"><div className="aline-marquee-track">
        {Array.from({length:2}).map((_,i)=><div className="aline-marquee-group" key={i}><span>Saúde dos pés</span><i>✦</i><span>Podologia com cuidado</span><i>✦</i><span>Atendimento humanizado</span><i>✦</i><span>Agende seu horário</span><i>✦</i></div>)}
      </div></section>

      <section className="aline-section aline-about" id="sobre">
        <div className="aline-container aline-about-grid">
          <div className="aline-about-visual"><div className="aline-about-icon"><Footprints size={76}/></div><span>ALINE PODÓLOGA</span><small>Cuidado aos seus pés</small></div>
          <div className="aline-about-copy"><span className="aline-eyebrow">PRAZER, SOU ALINE</span><h2>Um cuidado que começa <em>pela atenção a você.</em></h2>
            <p>A podologia é um cuidado dedicado à saúde dos pés. Meu trabalho é receber cada pessoa com atenção, observar suas necessidades e oferecer um atendimento cuidadoso e individualizado.</p>
            <p>Seja para cuidar de uma unha encravada, de calosidades ou de outras alterações nos pés, o primeiro passo é entender o que você está sentindo e avaliar a melhor forma de cuidar.</p>
            <div className="aline-benefits"><span><Check/> Atenção individual</span><span><Check/> Orientação durante o atendimento</span><span><Check/> Cuidado com conforto e segurança</span></div>
            <Button onClick={() => book()}>Converse com a Aline <ArrowRight size={17}/></Button>
          </div>
        </div>
      </section>

      <section className="aline-section aline-services" id="servicos">
        <div className="aline-container">
          <div className="aline-section-heading"><span className="aline-eyebrow">CUIDADOS E PROCEDIMENTOS</span><h2>Conheça os cuidados <em>para a saúde dos seus pés.</em></h2><p>Atendimento voltado às principais alterações podológicas. Deslize para conhecer os procedimentos.</p></div>
        </div>
        <div className="aline-service-window"><div className="aline-service-track">
          {[...services,...services].map((service,i)=><article className="aline-service-card" key={service.title+"-"+i}>
            <div className="aline-service-image"><img src={service.image} alt={service.title} loading="lazy" onError={e=>{e.currentTarget.style.display="none"}}/></div>
            <div className="aline-service-copy"><span>0{(i%services.length)+1}</span><h3>{service.title}</h3><p>{service.text}</p></div>
          </article>)}
        </div></div>
        <div className="aline-service-cta"><Button onClick={() => book("Olá, Aline! Gostaria de saber mais sobre os procedimentos de podologia e agendar um horário.")}>Quero agendar <ArrowRight size={17}/></Button></div>
      </section>

      <section className="aline-homecare">
        <div className="aline-container aline-homecare-inner"><div className="aline-homecare-icon"><Heart size={38}/></div><div><span className="aline-eyebrow">CUIDADO ONDE VOCÊ ESTÁ</span><h2>Atendimento <em>home care.</em></h2><p>Também há atendimento domiciliar para quem precisa receber cuidados no conforto de casa. Consulte a disponibilidade e as regiões atendidas.</p></div><Button onClick={() => book("Olá, Aline! Gostaria de consultar a disponibilidade de atendimento domiciliar (home care).")}>Consultar disponibilidade <ArrowRight size={17}/></Button></div>
      </section>

      <section className="aline-section aline-reviews" id="avaliacoes">
        <div className="aline-container"><div className="aline-section-heading"><span className="aline-eyebrow">ATENDIMENTO COM CARINHO</span><h2>Cuidar bem faz <em>toda a diferença.</em></h2><p>Uma experiência de atendimento baseada em atenção, escuta e cuidado individual.</p></div></div>
        <div className="aline-review-window"><div className="aline-review-track">{[...reviews,...reviews].map((review,i)=><article className="aline-review-card" key={review.name+"-"+i}><div className="aline-stars">{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor" size={17}/>)}</div><h3>{review.name}</h3><p>{review.text}</p><span className="aline-review-mark"><Footprints size={19}/> Aline Podóloga</span></article>)}</div></div>
      </section>

      <section className="aline-section aline-faq" id="duvidas"><div className="aline-container aline-faq-grid">
        <div className="aline-faq-intro"><span className="aline-eyebrow">DÚVIDAS FREQUENTES</span><h2>Vamos conversar sobre <em>seus pés?</em></h2><p>Confira algumas informações sobre os atendimentos. Se ainda tiver dúvidas, fale diretamente comigo.</p><Button onClick={() => book("Olá, Aline! Tenho uma dúvida sobre os atendimentos de podologia.")}>Tirar dúvidas no WhatsApp <MessageCircle size={17}/></Button></div>
        <div className="aline-faq-list">{faqs.map(([q,a],i)=><article className={faqOpen===i?"aline-faq-item is-open":"aline-faq-item"} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} aria-expanded={faqOpen===i}><span>{q}</span><ChevronDown size={19}/></button>{faqOpen===i&&<p>{a}</p>}</article>)}</div>
      </div></section>

      <section className="aline-contact" id="contato"><div className="aline-container aline-contact-grid">
        <div><span className="aline-eyebrow">VAMOS AGENDAR?</span><h2>Seus pés em boas mãos começam <em>com uma mensagem.</em></h2><p>Entre em contato para tirar dúvidas e consultar os horários disponíveis. Atendimento somente por agendamento.</p><div className="aline-contact-details"><a href={clinicWhatsapp} target="_blank" rel="noreferrer"><MessageCircle/><span><small>WHATSAPP</small><strong>{clinicPhone}</strong></span><ArrowRight/></a><a href={instagram} target="_blank" rel="noreferrer"><Instagram/><span><small>INSTAGRAM</small><strong>@aline_podologa32</strong></span><ArrowRight/></a></div></div>
        <div className="aline-contact-card"><span className="aline-contact-card-icon"><Footprints size={42}/></span><h3>Agende seu horário</h3><p>Fale diretamente pelo WhatsApp e consulte a disponibilidade de atendimento.</p><Button onClick={() => book()}>Chamar no WhatsApp <ArrowRight size={18}/></Button><small><Clock3 size={15}/> Atendimento somente por agendamento</small></div>
      </div></section>

      <footer className="aline-footer"><div className="aline-container aline-footer-inner"><a className="aline-brand" href="#inicio"><img className="aline-brand-logo" src={logoAsset.url} alt="Logomarca Aline Podóloga" width={48} height={64}/><span><strong>Aline Podóloga</strong><small>cuidado aos seus pés</small></span></a><p>Podologia com atenção, cuidado e acolhimento.</p><div><a href="#sobre">Sobre</a><a href="#servicos">Procedimentos</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a></div><span className="aline-copyright">© {new Date().getFullYear()} Aline Podóloga. Todos os direitos reservados.</span></div></footer>
      <Button variant="ghost" size="icon" className="aline-whatsapp-float" onClick={() => book()} aria-label="Agendar atendimento pelo WhatsApp" title="Agendar pelo WhatsApp"><img src={whatsappAsset.url} alt="" width={60} height={60}/></Button>
    </main>
  );
}
