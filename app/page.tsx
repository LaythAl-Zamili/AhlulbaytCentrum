'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, ChevronDown, Clock, Facebook, Globe2, HeartHandshake, MapPin, Menu, Moon, PlayCircle, Plus, Radio, Sparkles, Star, Users, X } from 'lucide-react';

type Lang = 'en' | 'ar' | 'cs' | 'de';
type Announcement = { title: string; body: string; date: string };
type GalleryItem = { title: string; url: string };

const phone = '+420 000 000 000';
const facebookUrl = 'https://www.facebook.com/ahlulbaytbrno/';
const whatsappUrl = 'https://wa.me/420000000000';
const mapUrl = 'https://www.google.com/maps/place/Ahlulbyat+Centrum+(%D9%85%D8%B1%D9%83%D8%B2+%D8%A3%D9%87%D9%84+%D8%A7%D9%84%D8%A8%D9%8A%D8%AA)%E2%80%AD/@49.227113,16.5913571,17z/data=!4m6!3m5!1s0x471295b1c42763cf:0x677376b213511ecd!8m2!3d49.227113!4d16.593932!16s%2Fg%2F11r99m7ctw';

const text = {
  en: {
    nav: ['Home','About','Events','Announcements','Gallery','Contact','Admin'],
    heroTag: 'A spiritual and community center',
    heroTitle: 'Ahlulbayt Centrum',
    heroText: 'A modern community space for prayer, Islamic education, family programs, announcements and events in Brno.',
    prayer: 'Prayer Times', visit: 'Visit Us', next: 'Next prayer', hijri: 'Hijri date', today: "Today’s Prayer Times", brnoOnly: 'Shown for Brno only, based on the center location.',
    aboutTitle: 'Serving faith, family and community', aboutBody: 'Ahlulbayt Centrum welcomes families, youth and visitors to gather for worship, education, remembrance and service.',
    weekly: 'Weekly Constant Program', weeklyBody: 'Every Thursday: Dua Kumail, Ziyarat Imam Hussain, prayer and community dinner.',
    muharram: 'Muharram Program', muharramBody: 'The first 10 days of Muharram are held every year. Exact program, date and time will be announced yearly.',
    ramadan: 'Ramadan Program', ramadanBody: 'Ramadan programs, iftar, lectures and special gatherings will be announced every year.',
    other: 'Other Programs', otherBody: 'Special lectures, family programs, youth activities and community events will be announced here.',
    announcements: 'Announcements', gallery: 'Gallery', live: 'Live Broadcasts', inspiration: 'Daily Inspiration', contact: 'Contact & Location', admin: 'Simple Admin Panel', adminHint: 'Local admin for quick edits. Changes are saved in this browser. Later we can connect a real database.',
    add: 'Add', title: 'Title', message: 'Message', date: 'Date', imageUrl: 'Image URL', save: 'Save', clear: 'Clear local data', built: 'Built by Layth Al‑Zamili', quran: 'Indeed, in the remembrance of Allah do hearts find rest.', hadith: 'The best of people are those who are most beneficial to people.',
  },
  ar: {
    nav: ['الرئيسية','من نحن','الفعاليات','الإعلانات','المعرض','التواصل','الإدارة'],
    heroTag: 'مركز روحي واجتماعي', heroTitle: 'مركز أهل البيت', heroText: 'مساحة مجتمعية حديثة للصلاة والتعليم الإسلامي والبرامج العائلية والإعلانات والفعاليات في برنو.',
    prayer: 'أوقات الصلاة', visit: 'زورونا', next: 'الصلاة القادمة', hijri: 'التاريخ الهجري', today: 'أوقات الصلاة اليوم', brnoOnly: 'الأوقات معروضة لمدينة برنو فقط حسب موقع المركز.',
    aboutTitle: 'خدمة الإيمان والعائلة والمجتمع', aboutBody: 'يرحب مركز أهل البيت بالعائلات والشباب والزوار للاجتماع للعبادة والتعليم والذكر وخدمة المجتمع.',
    weekly: 'البرنامج الأسبوعي الثابت', weeklyBody: 'كل يوم خميس: دعاء كميل، زيارة الإمام الحسين، صلاة وعشاء جماعي.',
    muharram: 'برنامج محرم', muharramBody: 'تقام أول عشرة أيام من شهر محرم كل عام، وسيتم إعلان البرنامج والتاريخ والوقت سنوياً.',
    ramadan: 'برنامج رمضان', ramadanBody: 'سيتم إعلان برامج رمضان والإفطار والمحاضرات والمجالس الخاصة كل عام.',
    other: 'برامج أخرى', otherBody: 'سيتم إعلان المحاضرات الخاصة والبرامج العائلية وأنشطة الشباب والفعاليات المجتمعية هنا.',
    announcements: 'الإعلانات', gallery: 'المعرض', live: 'البث المباشر', inspiration: 'إلهام يومي', contact: 'التواصل والموقع', admin: 'لوحة إدارة بسيطة', adminHint: 'إدارة محلية للتعديلات السريعة. التغييرات تحفظ في هذا المتصفح، ويمكن لاحقاً ربطها بقاعدة بيانات.',
    add: 'إضافة', title: 'العنوان', message: 'الرسالة', date: 'التاريخ', imageUrl: 'رابط الصورة', save: 'حفظ', clear: 'حذف البيانات المحلية', built: 'تم البناء بواسطة ليث الزميلي', quran: 'ألا بذكر الله تطمئن القلوب.', hadith: 'خير الناس أنفعهم للناس.',
  },
  cs: {
    nav: ['Domů','O nás','Akce','Oznámení','Galerie','Kontakt','Admin'],
    heroTag: 'Duchovní a komunitní centrum', heroTitle: 'Ahlulbayt Centrum', heroText: 'Moderní komunitní prostor pro modlitby, islámské vzdělávání, rodinné programy, oznámení a akce v Brně.',
    prayer: 'Časy modliteb', visit: 'Navštivte nás', next: 'Další modlitba', hijri: 'Hidžra datum', today: 'Dnešní časy modliteb', brnoOnly: 'Zobrazeno pouze pro Brno podle umístění centra.',
    aboutTitle: 'Služba víře, rodině a komunitě', aboutBody: 'Ahlulbayt Centrum vítá rodiny, mládež a návštěvníky ke společné modlitbě, vzdělávání, připomínání a službě.',
    weekly: 'Stálý týdenní program', weeklyBody: 'Každý čtvrtek: Dua Kumail, Ziyarat Imam Hussain, modlitba a společná večeře.',
    muharram: 'Program Muharram', muharramBody: 'Prvních 10 dní Muharramu se koná každý rok. Přesný program, datum a čas budou oznámeny každý rok.',
    ramadan: 'Ramadánský program', ramadanBody: 'Ramadánské programy, iftar, přednášky a speciální setkání budou oznámeny každý rok.',
    other: 'Další programy', otherBody: 'Speciální přednášky, rodinné programy, aktivity pro mládež a komunitní akce budou oznámeny zde.',
    announcements: 'Oznámení', gallery: 'Galerie', live: 'Živé vysílání', inspiration: 'Denní inspirace', contact: 'Kontakt a poloha', admin: 'Jednoduchý admin panel', adminHint: 'Lokální admin pro rychlé úpravy. Změny se uloží v tomto prohlížeči. Později můžeme připojit databázi.',
    add: 'Přidat', title: 'Název', message: 'Zpráva', date: 'Datum', imageUrl: 'URL obrázku', save: 'Uložit', clear: 'Vymazat lokální data', built: 'Vytvořil Layth Al‑Zamili', quran: 'V připomínání Alláha nacházejí srdce klid.', hadith: 'Nejlepší z lidí jsou ti, kteří jsou lidem nejvíce prospěšní.',
  },
  de: {
    nav: ['Start','Über uns','Veranstaltungen','Ankündigungen','Galerie','Kontakt','Admin'],
    heroTag: 'Ein spirituelles und gemeinschaftliches Zentrum', heroTitle: 'Ahlulbayt Centrum', heroText: 'Ein moderner Gemeinschaftsort für Gebet, islamische Bildung, Familienprogramme, Ankündigungen und Veranstaltungen in Brno.',
    prayer: 'Gebetszeiten', visit: 'Besuchen', next: 'Nächstes Gebet', hijri: 'Hijri-Datum', today: 'Heutige Gebetszeiten', brnoOnly: 'Angezeigt nur für Brno, basierend auf dem Standort des Zentrums.',
    aboutTitle: 'Im Dienst von Glaube, Familie und Gemeinschaft', aboutBody: 'Ahlulbayt Centrum heißt Familien, Jugendliche und Besucher willkommen, um gemeinsam zu beten, zu lernen, zu gedenken und zu dienen.',
    weekly: 'Wöchentliches festes Programm', weeklyBody: 'Jeden Donnerstag: Dua Kumail, Ziyarat Imam Hussain, Gebet und gemeinsames Abendessen.',
    muharram: 'Muharram-Programm', muharramBody: 'Die ersten 10 Tage von Muharram finden jedes Jahr statt. Genaues Programm, Datum und Uhrzeit werden jährlich bekannt gegeben.',
    ramadan: 'Ramadan-Programm', ramadanBody: 'Ramadan-Programme, Iftar, Vorträge und besondere Treffen werden jedes Jahr angekündigt.',
    other: 'Weitere Programme', otherBody: 'Spezielle Vorträge, Familienprogramme, Jugendaktivitäten und Gemeinschaftsveranstaltungen werden hier angekündigt.',
    announcements: 'Ankündigungen', gallery: 'Galerie', live: 'Live-Übertragung', inspiration: 'Tägliche Inspiration', contact: 'Kontakt & Standort', admin: 'Einfaches Admin-Panel', adminHint: 'Lokale Verwaltung für schnelle Änderungen. Änderungen werden in diesem Browser gespeichert. Später können wir eine echte Datenbank verbinden.',
    add: 'Hinzufügen', title: 'Titel', message: 'Nachricht', date: 'Datum', imageUrl: 'Bild-URL', save: 'Speichern', clear: 'Lokale Daten löschen', built: 'Erstellt von Layth Al‑Zamili', quran: 'Im Gedenken an Allah finden die Herzen Ruhe.', hadith: 'Die besten Menschen sind die, die den Menschen am nützlichsten sind.',
  }
};

const defaultAnnouncements: Announcement[] = [
  { title: 'Thursday Weekly Program', body: 'Dua Kumail, Ziyarat Imam Hussain, prayer and dinner every Thursday.', date: 'Every Thursday' },
  { title: 'Muharram Program', body: 'The first 10 days of Muharram are held every year. Dates and times will be announced yearly.', date: 'Announced yearly' },
  { title: 'Ramadan Program', body: 'Ramadan program, iftar and lectures will be announced every year.', date: 'Announced yearly' }
];
const defaultGallery: GalleryItem[] = [
  { title: 'Community Program', url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=80' },
  { title: 'Islamic Education', url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80' },
  { title: 'Family Gathering', url: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=900&q=80' }
];

function hijri(lang: Lang) {
  try { return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA-u-ca-islamic' : 'en-u-ca-islamic', { day:'numeric', month:'long', year:'numeric' }).format(new Date()); }
  catch { return 'Hijri date'; }
}
function pad(n:number){return String(n).padStart(2,'0')}
function timeFrom(date: Date, offsetMin: number){const d=new Date(date); d.setHours(0, offsetMin, 0,0); return `${pad(d.getHours())}:${pad(d.getMinutes())}`}
function brnoPrayerTimes(date = new Date()){
  // Lightweight yearly approximation for Brno. Replace later with a live API if desired.
  const start = new Date(date.getFullYear(),0,0); const day = Math.floor((+date-+start)/86400000);
  const seasonal = Math.sin((2*Math.PI*(day-80))/365);
  const fajr = Math.round(300 - seasonal*120);
  const sunrise = fajr + 130;
  const noon = Math.round(780 - Math.sin((2*Math.PI*(day-172))/365)*35);
  const sunset = Math.round(1080 + seasonal*150);
  const maghrib = sunset + 15;
  const midnight = Math.round((maghrib + 1440 + fajr)/2) % 1440;
  return [
    ['Imsaak', timeFrom(date, fajr-10)], ['Dawn', timeFrom(date, fajr)], ['Sunrise', timeFrom(date, sunrise)], ['Noon', timeFrom(date, noon)], ['Sunset', timeFrom(date, sunset)], ['Maghrib', timeFrom(date, maghrib)], ['Midnight', timeFrom(date, midnight)]
  ];
}
function nextPrayer(times: string[][]){
  const now = new Date(); const m = now.getHours()*60+now.getMinutes();
  for (const [name,t] of times){ const [h,mm]=t.split(':').map(Number); if(h*60+mm>m) return {name,time:t}; }
  return {name: times[1][0], time: times[1][1]};
}

export default function Page(){
  const [lang,setLang] = useState<Lang>('en');
  const [menu,setMenu] = useState(false);
  const [langOpen,setLangOpen] = useState(false);
  const [ann,setAnn] = useState<Announcement[]>(defaultAnnouncements);
  const [gallery,setGallery] = useState<GalleryItem[]>(defaultGallery);
  const [newAnn,setNewAnn] = useState<Announcement>({title:'',body:'',date:''});
  const [newImg,setNewImg] = useState<GalleryItem>({title:'',url:''});
  const t = text[lang]; const rtl = lang === 'ar';
  const times = useMemo(()=>brnoPrayerTimes(),[]); const next = nextPrayer(times);
  useEffect(()=>{ const a=localStorage.getItem('announcements'); const g=localStorage.getItem('gallery'); if(a) setAnn(JSON.parse(a)); if(g) setGallery(JSON.parse(g)); },[]);
  useEffect(()=>{ document.documentElement.dir = rtl ? 'rtl' : 'ltr'; document.documentElement.lang = lang; },[rtl,lang]);
  const saveAnn=()=>{ if(!newAnn.title) return; const x=[newAnn,...ann]; setAnn(x); localStorage.setItem('announcements',JSON.stringify(x)); setNewAnn({title:'',body:'',date:''}); };
  const saveImg=()=>{ if(!newImg.url) return; const x=[newImg,...gallery]; setGallery(x); localStorage.setItem('gallery',JSON.stringify(x)); setNewImg({title:'',url:''}); };
  const scroll=(id:string)=>{setMenu(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}

  return <main className="site" dir={rtl?'rtl':'ltr'}>
    <header className="header glass">
      <button className="hamb" onClick={()=>setMenu(!menu)} aria-label="menu">{menu?<X/>:<Menu/>}</button>
      <div className="brand" onClick={()=>scroll('home')}><Image src="/logo.jpg" alt="Ahlulbayt" width={95} height={95} className="logo"/><div><b>Ahlulbayt</b><span>Centrum</span></div></div>
      <nav className={menu?'open':''}>{['home','about','events','announcements','gallery','contact','admin'].map((id,i)=><button key={id} onClick={()=>scroll(id)}>{t.nav[i]}</button>)}</nav>
      <div className="lang"><button className="round" onClick={()=>setLangOpen(!langOpen)}><Globe2 size={18}/><span>{lang.toUpperCase()}</span><ChevronDown size={14}/></button>{langOpen&&<div className="langMenu">{(['en','ar','cs','de'] as Lang[]).map(l=><button key={l} onClick={()=>{setLang(l);setLangOpen(false)}}>{l==='en'?'English':l==='ar'?'العربية':l==='cs'?'Čeština':'Deutsch'}</button>)}</div>}</div>
    </header>

    <section id="home" className="hero pattern">
      <div className="heroText"><p className="eyebrow"><Moon size={16}/>{t.heroTag}</p><h1>{t.heroTitle}</h1><p>{t.heroText}</p><div className="actions"><button onClick={()=>scroll('prayer')} className="primary">{t.prayer}</button><button onClick={()=>scroll('contact')} className="secondary">{t.visit}</button></div></div>
      <div className="heroCard"><Sparkles/><h3>{t.next}</h3><strong>{next.name} · {next.time}</strong><p>{t.hijri}: {hijri(lang)}</p></div>
    </section>

    <section id="prayer" className="section prayer card">
      <Image src="/logo.jpg" alt="logo" width={120} height={120} className="centerLogo"/><h2>{t.today}</h2><p>{t.brnoOnly}</p><div className="dateLine">{new Date().toLocaleDateString(lang==='ar'?'ar':lang, {day:'2-digit',month:'long',year:'numeric'})} · {hijri(lang)}</div>
      <div className="times">{times.map(([n,v])=><div key={n}><span>{n}</span><b>{v}</b></div>)}</div>
    </section>

    <section id="about" className="section grid2"><div><p className="eyebrow"><Star size={16}/>{t.aboutTitle}</p><h2>{t.aboutTitle}</h2><p className="large">{t.aboutBody}</p></div><div className="stats"><div><b>4</b><span>Languages</span></div><div><b>Brno</b><span>Location</span></div><div><b>Weekly</b><span>Programs</span></div></div></section>

    <section id="events" className="section"><p className="eyebrow"><CalendarDays size={16}/>{t.nav[2]}</p><h2>{t.nav[2]}</h2><div className="cards">{[[t.weekly,t.weeklyBody,'Every Thursday'],[t.muharram,t.muharramBody,'10 days'],[t.ramadan,t.ramadanBody,'Yearly'],[t.other,t.otherBody,'Announced']].map((e,i)=><article className="event" key={e[0]}><span>{e[2]}</span><h3>{e[0]}</h3><p>{e[1]}</p></article>)}</div></section>

    <section id="announcements" className="section"><p className="eyebrow"><Radio size={16}/>{t.announcements}</p><h2>{t.announcements}</h2><div className="news">{ann.map((a,i)=><article key={i}><small>{a.date}</small><h3>{a.title}</h3><p>{a.body}</p></article>)}</div></section>

    <section id="gallery" className="section"><p className="eyebrow"><Users size={16}/>{t.gallery}</p><h2>{t.gallery}</h2><div className="gallery">{gallery.map((g,i)=><figure key={i}><img src={g.url} alt={g.title}/><figcaption>{g.title}</figcaption></figure>)}</div></section>

    <section className="section grid2"><div className="card"><p className="eyebrow"><PlayCircle size={16}/>{t.live}</p><h2>{t.live}</h2><p>Facebook / YouTube live lectures can be embedded here when available.</p><a className="primary link" href={facebookUrl} target="_blank">Open Facebook</a></div><div className="card"><p className="eyebrow"><HeartHandshake size={16}/>{t.inspiration}</p><h2>{t.inspiration}</h2><blockquote>{t.quran}</blockquote><p>{t.hadith}</p></div></section>

    <section id="contact" className="section contact card"><p className="eyebrow"><MapPin size={16}/>{t.contact}</p><h2>{t.contact}</h2><p>Metodějova 8, 612 00 Brno‑Královo Pole</p><div className="contactButtons"><a href={mapUrl} target="_blank">Google Maps</a><a href={facebookUrl} target="_blank"><Facebook size={18}/> Facebook</a><a href={whatsappUrl} target="_blank">WhatsApp</a></div><iframe title="Ahlulbayt Centrum map" src="https://www.google.com/maps?q=Metod%C4%9Bjova%208%2C%20612%2000%20Brno-Kr%C3%A1lovo%20Pole&output=embed" loading="lazy"/></section>

    <section id="admin" className="section admin"><p className="eyebrow"><Plus size={16}/>{t.admin}</p><h2>{t.admin}</h2><p>{t.adminHint}</p><div className="adminGrid"><div className="card"><h3>{t.add} {t.announcements}</h3><input placeholder={t.title} value={newAnn.title} onChange={e=>setNewAnn({...newAnn,title:e.target.value})}/><input placeholder={t.date} value={newAnn.date} onChange={e=>setNewAnn({...newAnn,date:e.target.value})}/><textarea placeholder={t.message} value={newAnn.body} onChange={e=>setNewAnn({...newAnn,body:e.target.value})}/><button className="primary" onClick={saveAnn}>{t.save}</button></div><div className="card"><h3>{t.add} {t.gallery}</h3><input placeholder={t.title} value={newImg.title} onChange={e=>setNewImg({...newImg,title:e.target.value})}/><input placeholder={t.imageUrl} value={newImg.url} onChange={e=>setNewImg({...newImg,url:e.target.value})}/><button className="primary" onClick={saveImg}>{t.save}</button><button className="secondary" onClick={()=>{localStorage.clear(); location.reload()}}>{t.clear}</button></div></div></section>

    <footer><div><Image src="/logo.jpg" alt="Ahlulbayt" width={70} height={70}/><b>Ahlulbayt Centrum</b><p>Metodějova 8, 612 00 Brno‑Královo Pole</p></div><div className="social"><a href={facebookUrl}>Facebook</a><a href={whatsappUrl}>WhatsApp</a><a href={mapUrl}>Map</a></div><small>{t.built}</small></footer>
  </main>
}
