import { useEffect } from "react";

export function App() {
  useEffect(() => {
    document.documentElement.lang = "id";
    document.title = "Spider-Dev | Portfolio Febriano Doweng - Teknik Informatika Universitas Nusa Putra";

    const style = document.createElement("style");
    style.textContent = `
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
      :root{
        --r1:#0d0000;--r2:#1a0000;--r3:#2d0000;
        --r4:#7f1d1d;--r5:#991b1b;--r6:#cc0000;
        --r7:#ef4444;--r8:#fca5a5;
        --g3:#d1d5db;--g4:#9ca3af;--g5:#6b7280;--g6:#4b5563;--g7:#374151;
      }
      html{scroll-behavior:smooth}
      body{background:#0d0000;color:#fff;font-family:'Segoe UI',system-ui,sans-serif;overflow-x:hidden;cursor:none}
      @media(max-width:768px){body{cursor:auto}}
      ::-webkit-scrollbar{width:6px}
      ::-webkit-scrollbar-track{background:#0d0000}
      ::-webkit-scrollbar-thumb{background:#cc0000;border-radius:3px}
      ::-webkit-scrollbar-thumb:hover{background:#ef4444}
      ::selection{background:rgba(204,0,0,.4);color:#fff}

      @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
      @keyframes webSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
      @keyframes pulseRed{0%,100%{box-shadow:0 0 10px rgba(204,0,0,.4)}50%{box-shadow:0 0 30px rgba(204,0,0,.8)}}
      @keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
      @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
      @keyframes modalIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}

      #sp-cursor{position:fixed;width:20px;height:20px;border:2px solid #ef4444;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:all .07s ease;display:none}
      @media(min-width:769px){#sp-cursor{display:block}}
      .sp-trail{position:fixed;border-radius:50%;background:#cc0000;pointer-events:none;z-index:9998;transform:translate(-50%,-50%)}

      #sp-nav{position:fixed;top:0;left:0;width:100%;z-index:1000;transition:all .4s;padding:16px 24px;display:flex;align-items:center;justify-content:space-between}
      #sp-nav.sc{background:rgba(26,0,0,.96);backdrop-filter:blur(12px);box-shadow:0 4px 30px rgba(139,0,0,.3)}
      .sp-logo{display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none}
      .sp-logo-t{font-size:20px;font-weight:900;letter-spacing:.15em;color:#fff}
      .sp-logo-t em{color:#cc0000;font-style:normal}
      .sp-nav-ul{display:flex;gap:32px;list-style:none}
      .sp-nav-ul a{color:#d1d5db;font-weight:600;font-size:13px;text-decoration:none;letter-spacing:.1em;text-transform:uppercase;position:relative;transition:color .3s;cursor:pointer}
      .sp-nav-ul a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:#cc0000;transition:width .3s}
      .sp-nav-ul a:hover{color:#ef4444}
      .sp-nav-ul a:hover::after{width:100%}
      .sp-ham{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
      .sp-ham span{display:block;width:24px;height:2px;background:#fff;transition:all .3s}
      .sp-ham.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
      .sp-ham.open span:nth-child(2){opacity:0}
      .sp-ham.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
      #sp-mob{display:none;position:absolute;top:100%;left:0;width:100%;background:rgba(26,0,0,.98);backdrop-filter:blur(12px);border-top:1px solid rgba(139,0,0,.3);padding:24px}
      #sp-mob.open{display:block}
      #sp-mob ul{list-style:none;display:flex;flex-direction:column;align-items:center;gap:16px}
      #sp-mob a{color:#d1d5db;font-weight:600;font-size:14px;text-decoration:none;text-transform:uppercase;letter-spacing:.1em;cursor:pointer}
      @media(max-width:768px){.sp-nav-ul{display:none}.sp-ham{display:flex}#sp-nav{flex-wrap:wrap}}

      section{padding:96px 24px}
      .sp-con{max-width:1200px;margin:0 auto}
      .sp-lbl{display:inline-block;color:#cc0000;font-weight:700;font-size:13px;letter-spacing:.3em;text-transform:uppercase;margin-bottom:8px}
      .sp-h2{font-size:clamp(2rem,5vw,3.5rem);font-weight:900;color:#fff;line-height:1.1}
      .sp-h2 span{color:#cc0000}
      .sp-div{width:96px;height:4px;margin:16px auto 0;background:linear-gradient(to right,transparent,#cc0000,transparent)}
      .sp-sub{color:#6b7280;margin-top:16px;max-width:500px;margin-left:auto;margin-right:auto;line-height:1.6;font-size:15px}
      .sp-tit{text-align:center;margin-bottom:64px}

      #sp-home{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(to bottom,#0d0000,#1a0000,#0d0000);overflow:hidden;padding:0 24px}
      #sp-canvas{position:absolute;inset:0;width:100%;height:100%}
      .sp-orb1{position:absolute;top:25%;left:25%;width:384px;height:384px;background:rgba(127,29,29,.1);border-radius:50%;filter:blur(60px);animation:pulse 3s ease-in-out infinite}
      .sp-orb2{position:absolute;bottom:25%;right:25%;width:384px;height:384px;background:rgba(153,27,27,.1);border-radius:50%;filter:blur(60px);animation:pulse 3s ease-in-out infinite 1s}
      .sp-hc{position:relative;z-index:10;text-align:center;max-width:900px;width:100%;animation:fadeInUp 1s ease forwards}
      .sp-bdg{display:inline-block;background:rgba(204,0,0,.2);border:1px solid rgba(204,0,0,.4);color:#ef4444;font-size:12px;font-weight:700;letter-spacing:.3em;padding:8px 16px;border-radius:999px;text-transform:uppercase;margin-bottom:24px}
      .sp-ico{display:flex;justify-content:center;margin-bottom:32px;animation:float 4s ease-in-out infinite}
      .sp-h1{font-size:clamp(2.5rem,8vw,5.5rem);font-weight:900;color:#fff;margin-bottom:16px;line-height:1.1}
      .sp-h1 span{color:#cc0000}
      .sp-st{font-size:clamp(1rem,2.5vw,1.25rem);color:#9ca3af;margin-bottom:16px}
      .sp-st em{color:#ef4444;font-style:normal;font-weight:700}
      .sp-dsc{font-size:15px;color:#6b7280;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.7}
      .sp-dsc span{color:#ef4444;font-weight:600}
      .sp-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
      .sp-bp{background:#cc0000;color:#fff;font-weight:700;padding:16px 32px;border-radius:999px;border:none;cursor:pointer;font-size:15px;transition:all .3s;box-shadow:0 10px 30px rgba(139,0,0,.5);text-decoration:none;display:inline-block}
      .sp-bp:hover{background:#ef4444;transform:scale(1.05)}
      .sp-bo{border:2px solid #cc0000;color:#ef4444;font-weight:700;padding:14px 32px;border-radius:999px;background:transparent;cursor:pointer;font-size:15px;transition:all .3s;text-decoration:none;display:inline-block}
      .sp-bo:hover{background:rgba(204,0,0,.2);transform:scale(1.05);color:#fff}
      .sp-scr{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;animation:bounce 1.5s ease-in-out infinite}
      .sp-scr span{color:#4b5563;font-size:11px;letter-spacing:.2em;text-transform:uppercase}
      .sp-scrl{width:1px;height:32px;background:linear-gradient(to bottom,#cc0000,transparent)}

      #sp-about{background:linear-gradient(to bottom,#0d0000,#110000);position:relative;overflow:hidden}
      .sp-abg{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
      @media(max-width:768px){.sp-abg{grid-template-columns:1fr}}
      .sp-pw{display:flex;justify-content:center}
      .sp-pc{position:relative}
      .sp-pg{position:absolute;inset:-10px;border-radius:50%;background:rgba(204,0,0,.2);filter:blur(30px);animation:pulse 2s ease-in-out infinite}
      .sp-wr{position:absolute;inset:-20px;display:flex;align-items:center;justify-content:center}
      .sp-pf{position:relative;width:280px;height:280px;border-radius:50%;border:4px solid rgba(204,0,0,.7);box-shadow:0 0 40px rgba(139,0,0,.6);overflow:hidden;background:linear-gradient(135deg,#2d0000,#1a0000);animation:pulseRed 2s ease-in-out infinite}
      .sp-pf img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;border-radius:50%}
      .sp-po{position:absolute;inset:0;background:rgba(139,0,0,.05);pointer-events:none}
      .sp-ab{position:absolute;font-size:11px;font-weight:700;padding:6px 12px;border-radius:999px;white-space:nowrap}
      .sp-ab-b{bottom:-16px;right:-16px;background:#cc0000;color:#fff;border:2px solid #ef4444;animation:float 3s ease-in-out infinite}
      .sp-ab-t{top:-16px;left:-16px;background:#1a0000;border:1px solid rgba(204,0,0,.5);color:#ef4444}
      .sp-ab-s{top:50%;right:-24px;transform:translateY(-50%);background:#1a0000;border:1px solid rgba(204,0,0,.5);color:#ef4444}
      .sp-an{font-size:2rem;font-weight:900;color:#fff;margin-bottom:4px}
      .sp-an span{color:#cc0000}
      .sp-ar{color:#ef4444;font-weight:600;margin-bottom:24px;letter-spacing:.05em}
      .sp-ad{color:#9ca3af;line-height:1.8;margin-bottom:16px;font-size:15px}
      .sp-ad span{color:#cc0000;font-weight:600}
      .sp-ig{display:grid;grid-template-columns:1fr 1fr;gap:12px}
      .sp-ic{background:rgba(153,27,27,.15);border:1px solid rgba(127,29,29,.3);border-radius:12px;padding:12px 16px;transition:border-color .3s}
      .sp-ic:hover{border-color:rgba(204,0,0,.5)}
      .sp-il{color:#cc0000;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px}
      .sp-iv{color:#fff;font-weight:600;font-size:13px}
      .sp-wc{position:absolute;opacity:.2}
      .sp-wc-tl{top:0;left:0}
      .sp-wc-br{bottom:0;right:0;transform:rotate(180deg)}

      #sp-skills{background:linear-gradient(to bottom,#110000,#0d0000);position:relative}
      .sp-fbs{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-bottom:40px}
      .sp-fb{padding:8px 20px;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:.05em;border:1px solid rgba(127,29,29,.4);background:rgba(153,27,27,.15);color:#9ca3af;cursor:pointer;transition:all .3s}
      .sp-fb:hover{border-color:rgba(204,0,0,.6);color:#ef4444}
      .sp-fb.on{background:#cc0000;color:#fff;border-color:#cc0000;box-shadow:0 4px 20px rgba(139,0,0,.5)}
      .sp-skg{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin-bottom:64px}
      .sp-skc{background:linear-gradient(135deg,rgba(153,27,27,.15),#1a0000);border:1px solid rgba(127,29,29,.4);border-radius:16px;padding:20px;transition:all .4s}
      .sp-skc:hover{border-color:rgba(204,0,0,.6);box-shadow:0 8px 30px rgba(139,0,0,.3);transform:translateY(-2px)}
      .sp-skh{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
      .sp-ski{display:flex;align-items:center;gap:12px}
      .sp-ik{font-size:24px;transition:transform .3s}
      .sp-skc:hover .sp-ik{transform:scale(1.25)}
      .sp-sn{color:#fff;font-weight:700;font-size:14px}
      .sp-sc{color:rgba(204,0,0,.7);font-size:11px;font-weight:600}
      .sp-sp{color:#ef4444;font-weight:900;font-size:18px}
      .sp-bb{height:8px;background:rgba(153,27,27,.3);border-radius:999px;overflow:hidden}
      .sp-bar{height:100%;border-radius:999px;background:linear-gradient(to right,#7f1d1d,#cc0000);width:0;transition:width 1.2s ease;position:relative;overflow:hidden}
      .sp-bar::after{content:'';position:absolute;inset:0;background:rgba(255,255,255,.15);animation:pulse 2s ease-in-out infinite}
      .sp-dots{display:flex;justify-content:space-between;margin-top:4px;padding:0 2px}
      .sp-dot{width:6px;height:6px;border-radius:50%}
      .sp-dot.f{background:#cc0000}
      .sp-dot.e{background:rgba(153,27,27,.3)}
      .sp-stg{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
      @media(max-width:640px){.sp-stg{grid-template-columns:repeat(2,1fr)}.sp-skg{grid-template-columns:1fr}}
      .sp-stc{background:linear-gradient(135deg,rgba(153,27,27,.3),#1a0000);border:1px solid rgba(127,29,29,.4);border-radius:16px;padding:24px;text-align:center;transition:all .3s}
      .sp-stc:hover{border-color:rgba(204,0,0,.6);box-shadow:0 8px 30px rgba(139,0,0,.3)}
      .sp-si{font-size:32px;margin-bottom:8px}
      .sp-sv{font-size:2rem;font-weight:900;color:#cc0000;margin-bottom:4px}
      .sp-sl{color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em}

      #sp-projects{background:linear-gradient(to bottom,#0d0000,#110000);position:relative}
      .sp-pg2{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:24px}
      @media(max-width:768px){.sp-pg2{grid-template-columns:1fr}}
      .sp-pjc{position:relative;border-radius:20px;padding:24px;border:1px solid rgba(127,29,29,.4);cursor:pointer;transition:all .4s;overflow:hidden}
      .sp-pjc.g1{background:linear-gradient(135deg,#2d0000,#1a0000)}
      .sp-pjc.g2{background:linear-gradient(135deg,#3d0000,#1a0000)}
      .sp-pjc.g3{background:linear-gradient(135deg,#1a0000,#0d0000);border:1px dashed rgba(127,29,29,.3);opacity:.5;pointer-events:none}
      .sp-pjc:hover{border-color:rgba(204,0,0,.6);box-shadow:0 20px 50px rgba(139,0,0,.4);transform:translateY(-8px)}
      .sp-cd{position:absolute;top:0;right:0;opacity:.1;transition:opacity .3s;pointer-events:none}
      .sp-pjc:hover .sp-cd{opacity:.25}
      .sp-ch{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}
      .sp-ci{font-size:36px;transition:transform .3s}
      .sp-pjc:hover .sp-ci{transform:scale(1.2)}
      .sp-cbs{display:flex;flex-direction:column;align-items:flex-end;gap:4px}
      .sp-bs{font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px;border:1px solid;background:rgba(204,0,0,.15);color:#ef4444;border-color:rgba(204,0,0,.4)}
      .sp-ct{font-size:11px;font-weight:600;background:rgba(0,0,0,.3);color:#6b7280;padding:4px 8px;border-radius:999px}
      .sp-tt{color:#fff;font-weight:900;font-size:17px;margin-bottom:12px;line-height:1.3;transition:color .3s}
      .sp-pjc:hover .sp-tt{color:#ef4444}
      .sp-td{color:#9ca3af;font-size:13px;line-height:1.6;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
      .sp-tp{display:flex;align-items:center;gap:8px;color:#6b7280;font-size:12px;font-weight:600;margin-bottom:16px}
      .sp-tch{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px}
      .sp-tg{background:rgba(0,0,0,.3);border:1px solid rgba(127,29,29,.4);color:#fca5a5;font-size:11px;padding:4px 10px;border-radius:999px;font-weight:600}
      .sp-cta{display:flex;align-items:center;gap:8px;color:#ef4444;font-size:13px;font-weight:700;opacity:.6;transition:opacity .3s}
      .sp-pjc:hover .sp-cta{opacity:1}
      .sp-cgl{position:absolute;inset:0;background:rgba(204,0,0,0);transition:background .3s;border-radius:20px;pointer-events:none}
      .sp-pjc:hover .sp-cgl{background:rgba(204,0,0,.04)}
      .sp-cs{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:250px;text-align:center}
      .sp-ghc{text-align:center;margin-top:48px}
      .sp-ghb{display:inline-flex;align-items:center;gap:8px;border:2px solid rgba(204,0,0,.5);color:#9ca3af;font-weight:700;padding:12px 32px;border-radius:999px;font-size:14px;background:transparent;cursor:pointer;transition:all .3s;text-decoration:none}
      .sp-ghb:hover{border-color:#cc0000;color:#fff;background:rgba(204,0,0,.1);box-shadow:0 8px 30px rgba(139,0,0,.3)}

      #sp-contact{background:linear-gradient(to bottom,#110000,#1a0000,#0d0000);position:relative;overflow:hidden}
      .sp-csin{max-width:700px;margin:0 auto}
      .sp-cbx{background:linear-gradient(135deg,rgba(153,27,27,.15),#1a0000);border:1px solid rgba(127,29,29,.4);border-radius:24px;padding:32px}
      .sp-ctl{color:#fff;font-weight:900;font-size:20px;margin-bottom:24px;display:flex;align-items:center;gap:8px}
      .sp-fg{margin-bottom:20px}
      .sp-fl{display:block;color:#ef4444;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
      .sp-inp,.sp-txt{width:100%;background:rgba(0,0,0,.3);border:1px solid rgba(127,29,29,.4);color:#fff;padding:12px 16px;border-radius:12px;font-size:14px;outline:none;transition:border-color .3s;font-family:inherit}
      .sp-inp::placeholder,.sp-txt::placeholder{color:rgba(107,114,128,.8)}
      .sp-inp:focus,.sp-txt:focus{border-color:#cc0000}
      .sp-txt{resize:none;min-height:120px}
      .sp-sbtn{width:100%;background:linear-gradient(to right,#7f1d1d,#cc0000);color:#fff;font-weight:900;padding:16px;border-radius:12px;border:none;cursor:pointer;font-size:15px;letter-spacing:.1em;transition:all .3s;box-shadow:0 8px 30px rgba(139,0,0,.5)}
      .sp-sbtn:hover{background:linear-gradient(to right,#cc0000,#ef4444);transform:scale(1.02)}
      .sp-ok{background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.4);color:#4ade80;border-radius:12px;padding:16px;font-size:14px;font-weight:600;margin-bottom:20px;display:none}
      .sp-ok.show{display:block}
      .sp-qb{background:linear-gradient(135deg,rgba(204,0,0,.15),rgba(153,27,27,.2));border:1px solid rgba(204,0,0,.3);border-radius:24px;padding:24px;text-align:center;margin-top:24px}
      .sp-qb blockquote{color:#9ca3af;font-style:italic;font-size:14px;line-height:1.6}
      .sp-qb cite{color:#cc0000;font-weight:700;font-size:12px;letter-spacing:.1em;font-style:normal}

      #sp-footer{background:#080000;border-top:1px solid rgba(127,29,29,.3);padding:40px 24px;text-align:center;position:relative;overflow:hidden}
      .sp-fl2{color:#fff;font-weight:900;font-size:18px;letter-spacing:.15em;margin-bottom:4px}
      .sp-fl2 span{color:#cc0000}
      .sp-fsub{color:#4b5563;font-size:12px;margin-bottom:16px;letter-spacing:.05em}
      .sp-fsocs{display:flex;justify-content:center;gap:12px;margin-bottom:20px}
      .sp-fsoc{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(127,29,29,.4);background:rgba(153,27,27,.1);transition:all .3s;text-decoration:none}
      .sp-fsoc:hover{border-color:#cc0000;background:rgba(204,0,0,.2);transform:translateY(-3px);box-shadow:0 8px 20px rgba(139,0,0,.4)}
      .sp-fls{display:flex;justify-content:center;gap:24px;margin-bottom:24px;flex-wrap:wrap}
      .sp-fls a{color:#4b5563;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;text-decoration:none;cursor:pointer;transition:color .3s}
      .sp-fls a:hover{color:#ef4444}
      .sp-fdiv{width:96px;height:1px;background:linear-gradient(to right,transparent,rgba(127,29,29,.8),transparent);margin:0 auto 16px}
      .sp-fcp{color:#374151;font-size:12px}
      .sp-fcp span{color:#cc0000}
      .sp-fbt{color:rgba(55,65,81,.6);font-size:11px;margin-top:4px}

      .sp-mov{position:fixed;inset:0;z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.85);backdrop-filter:blur(8px);opacity:0;visibility:hidden;transition:all .3s}
      .sp-mov.open{opacity:1;visibility:visible}
      .sp-mb{position:relative;width:100%;max-width:750px;max-height:90vh;overflow-y:auto;background:linear-gradient(135deg,#1a0000,#0d0000);border:1px solid rgba(204,0,0,.5);border-radius:24px;box-shadow:0 30px 80px rgba(139,0,0,.5);transform:scale(.9);transition:transform .3s}
      .sp-mov.open .sp-mb{transform:scale(1)}
      .sp-mh{background:linear-gradient(to right,rgba(153,27,27,.5),rgba(127,29,29,.4));border-bottom:1px solid rgba(139,0,0,.4);border-radius:24px 24px 0 0;padding:24px;position:relative;overflow:hidden}
      .sp-mht{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
      .sp-mi{font-size:48px;flex-shrink:0}
      .sp-mta{flex:1}
      .sp-mbd{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px}
      .sp-mtl{color:#fff;font-weight:900;font-size:clamp(1.1rem,3vw,1.5rem);line-height:1.2}
      .sp-xcl{width:40px;height:40px;border-radius:50%;flex-shrink:0;background:rgba(153,27,27,.4);border:1px solid rgba(204,0,0,.5);color:#9ca3af;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
      .sp-xcl:hover{background:rgba(204,0,0,.6);color:#fff}
      .sp-mby{padding:24px}
      .sp-mmt{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px}
      @media(max-width:480px){.sp-mmt{grid-template-columns:1fr}}
      .sp-mc{background:rgba(153,27,27,.2);border:1px solid rgba(127,29,29,.3);border-radius:12px;padding:12px;text-align:center}
      .sp-ml{color:#cc0000;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px}
      .sp-mv{color:#fff;font-weight:700;font-size:13px}
      .sp-ms{margin-bottom:24px}
      .sp-mst{color:#ef4444;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.2em;margin-bottom:12px;display:flex;align-items:center;gap:8px}
      .sp-mtb{background:rgba(0,0,0,.2);border:1px solid rgba(127,29,29,.2);border-radius:12px;padding:16px}
      .sp-mtx{color:#d1d5db;font-size:14px;line-height:1.7}
      .sp-mhl{list-style:none}
      .sp-mhl li{display:flex;align-items:flex-start;gap:12px;padding:6px 0;color:#d1d5db;font-size:13px;line-height:1.5}
      .sp-mhl li::before{content:'🕷️';flex-shrink:0;margin-top:2px}
      .sp-tgs{display:flex;flex-wrap:wrap;gap:8px}
      .sp-tgm{background:linear-gradient(to right,rgba(127,29,29,.4),rgba(153,27,27,.3));border:1px solid rgba(204,0,0,.5);color:#fca5a5;font-size:13px;padding:8px 16px;border-radius:999px;font-weight:700}
      .sp-ob{background:linear-gradient(to right,rgba(127,29,29,.2),rgba(153,27,27,.15));border:1px solid rgba(204,0,0,.3);border-radius:12px;padding:16px}
      .sp-mac{display:flex;gap:12px;margin-top:8px;flex-wrap:wrap}
      .sp-ma1{flex:1;min-width:140px;display:flex;align-items:center;justify-content:center;gap:8px;background:linear-gradient(to right,#7f1d1d,#cc0000);color:#fff;font-weight:900;padding:12px 24px;border-radius:12px;border:none;cursor:pointer;font-size:14px;transition:all .3s;text-decoration:none}
      .sp-ma1:hover{background:linear-gradient(to right,#cc0000,#ef4444);transform:scale(1.02)}
      .sp-ma2{flex:1;min-width:140px;display:flex;align-items:center;justify-content:center;gap:8px;border:2px solid rgba(127,29,29,.5);color:#9ca3af;font-weight:700;padding:12px 24px;border-radius:12px;background:transparent;cursor:pointer;font-size:14px;transition:all .3s}
      .sp-ma2:hover{border-color:#cc0000;color:#fff;background:rgba(153,27,27,.2)}
      @media(max-width:640px){section{padding:64px 16px}.sp-mby{padding:16px}.sp-mac{flex-direction:column}}
    `;
    document.head.appendChild(style);

    const root = document.getElementById("root")!;
    root.innerHTML = `
<div id="sp-cursor"></div>

<nav id="sp-nav">
  <div class="sp-logo" onclick="spGo('sp-home')">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#CC0000" stroke="#8B0000" stroke-width="3"/>
      <line x1="50" y1="2" x2="50" y2="98" stroke="#8B0000" stroke-width="1.5" opacity="0.6"/>
      <line x1="2" y1="50" x2="98" y2="50" stroke="#8B0000" stroke-width="1.5" opacity="0.6"/>
      <line x1="15" y1="15" x2="85" y2="85" stroke="#8B0000" stroke-width="1.5" opacity="0.6"/>
      <line x1="85" y1="15" x2="15" y2="85" stroke="#8B0000" stroke-width="1.5" opacity="0.6"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="#8B0000" stroke-width="1.5" opacity="0.6"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#8B0000" stroke-width="1.5" opacity="0.6"/>
      <ellipse cx="50" cy="45" rx="8" ry="10" fill="black"/>
      <ellipse cx="50" cy="58" rx="11" ry="12" fill="black"/>
      <ellipse cx="46" cy="42" rx="4" ry="5" fill="white" transform="rotate(-15 46 42)"/>
      <ellipse cx="54" cy="42" rx="4" ry="5" fill="white" transform="rotate(15 54 42)"/>
    </svg>
    <span class="sp-logo-t">SPIDER<em>-DEV</em></span>
  </div>
  <ul class="sp-nav-ul">
    <li><a onclick="spGo('sp-home')">Home</a></li>
    <li><a onclick="spGo('sp-about')">About</a></li>
    <li><a onclick="spGo('sp-skills')">Skills</a></li>
    <li><a onclick="spGo('sp-projects')">Projects</a></li>
    <li><a onclick="spGo('sp-contact')">Contact</a></li>
  </ul>
  <button class="sp-ham" id="sp-ham" onclick="spToggle()">
    <span></span><span></span><span></span>
  </button>
  <div id="sp-mob">
    <ul>
      <li><a onclick="spGo('sp-home');spClose()">Home</a></li>
      <li><a onclick="spGo('sp-about');spClose()">About</a></li>
      <li><a onclick="spGo('sp-skills');spClose()">Skills</a></li>
      <li><a onclick="spGo('sp-projects');spClose()">Projects</a></li>
      <li><a onclick="spGo('sp-contact');spClose()">Contact</a></li>
    </ul>
  </div>
</nav>

<section id="sp-home">
  <canvas id="sp-canvas"></canvas>
  <div class="sp-orb1"></div>
  <div class="sp-orb2"></div>
  <div class="sp-hc">
    <div class="sp-ico">
      <svg width="120" height="120" viewBox="0 0 200 200" style="filter:drop-shadow(0 0 30px rgba(220,0,0,.6))">
        <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(200,0,0,.3)" stroke-width="2"/>
        <circle cx="100" cy="100" r="75" fill="#CC0000"/>
        <line x1="100" y1="100" x2="100" y2="25" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <line x1="100" y1="100" x2="165" y2="137" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <line x1="100" y1="100" x2="35" y2="137" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <line x1="100" y1="100" x2="165" y2="63" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <line x1="100" y1="100" x2="35" y2="63" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <line x1="100" y1="100" x2="100" y2="175" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <circle cx="100" cy="100" r="20" fill="none" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <circle cx="100" cy="100" r="40" fill="none" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#8B0000" stroke-width="1.5" opacity="0.8"/>
        <ellipse cx="100" cy="95" rx="32" ry="38" fill="#1a0000"/>
        <ellipse cx="88" cy="88" rx="12" ry="14" fill="white" transform="rotate(-20 88 88)"/>
        <ellipse cx="112" cy="88" rx="12" ry="14" fill="white" transform="rotate(20 112 88)"/>
        <ellipse cx="88" cy="88" rx="8" ry="10" fill="#CC0000" transform="rotate(-20 88 88)"/>
        <ellipse cx="112" cy="88" rx="8" ry="10" fill="#CC0000" transform="rotate(20 112 88)"/>
        <line x1="68" y1="110" x2="20" y2="160" stroke="#CC0000" stroke-width="2"/>
        <line x1="132" y1="110" x2="180" y2="160" stroke="#CC0000" stroke-width="2"/>
      </svg>
    </div>
    <div class="sp-bdg">🕷️ Mahasiswa Teknik Informatika • Semester 8</div>
    <h1 class="sp-h1">Halo, Saya<br><span>Febriano Doweng</span></h1>
    <p class="sp-st">alias <em>"Si Manusia Laba-laba" yang jago ngoding 🕸️</em></p>
    <p class="sp-dsc">Mahasiswa Teknik Informatika semester 8 di <span>Universitas Nusa Putra, Sukabumi</span> — merajut web digital selayaknya jaring laba-laba: kuat, indah, dan penuh kode.</p>
    <div class="sp-btns">
      <a class="sp-bp" onclick="spGo('sp-projects')">🕸️ Lihat Proyek Saya</a>
      <a class="sp-bo" onclick="spGo('sp-contact')">📡 Hubungi Saya</a>
    </div>
  </div>
  <div class="sp-scr"><span>Scroll</span><div class="sp-scrl"></div></div>
</section>

<section id="sp-about">
  <svg class="sp-wc sp-wc-tl" width="200" height="200" viewBox="0 0 200 200">
    <line x1="0" y1="0" x2="200" y2="200" stroke="#CC0000" stroke-width="1"/>
    <line x1="0" y1="0" x2="200" y2="100" stroke="#CC0000" stroke-width=".8"/>
    <line x1="0" y1="0" x2="100" y2="200" stroke="#CC0000" stroke-width=".8"/>
    <circle cx="0" cy="0" r="40" fill="none" stroke="#CC0000" stroke-width=".6"/>
    <circle cx="0" cy="0" r="80" fill="none" stroke="#CC0000" stroke-width=".6"/>
    <circle cx="0" cy="0" r="120" fill="none" stroke="#CC0000" stroke-width=".6"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#CC0000" stroke-width=".6"/>
  </svg>
  <svg class="sp-wc sp-wc-br" width="200" height="200" viewBox="0 0 200 200">
    <line x1="0" y1="0" x2="200" y2="200" stroke="#CC0000" stroke-width="1"/>
    <line x1="0" y1="0" x2="200" y2="100" stroke="#CC0000" stroke-width=".8"/>
    <line x1="0" y1="0" x2="100" y2="200" stroke="#CC0000" stroke-width=".8"/>
    <circle cx="0" cy="0" r="40" fill="none" stroke="#CC0000" stroke-width=".6"/>
    <circle cx="0" cy="0" r="80" fill="none" stroke="#CC0000" stroke-width=".6"/>
    <circle cx="0" cy="0" r="120" fill="none" stroke="#CC0000" stroke-width=".6"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#CC0000" stroke-width=".6"/>
  </svg>
  <div class="sp-con">
    <div class="sp-tit">
      <div class="sp-lbl">🕷️ Tentang Saya</div>
      <h2 class="sp-h2">The <span>Amazing</span> Developer</h2>
      <div class="sp-div"></div>
    </div>
    <div class="sp-abg">
      <div class="sp-pw">
        <div class="sp-pc">
          <div class="sp-pg"></div>
          <div class="sp-wr">
            <svg style="width:320px;height:320px;opacity:.2;animation:webSpin 20s linear infinite" viewBox="0 0 300 300">
              <line x1="150" y1="150" x2="150" y2="0" stroke="#CC0000" stroke-width="1"/>
              <line x1="150" y1="150" x2="280" y2="75" stroke="#CC0000" stroke-width="1"/>
              <line x1="150" y1="150" x2="280" y2="225" stroke="#CC0000" stroke-width="1"/>
              <line x1="150" y1="150" x2="150" y2="300" stroke="#CC0000" stroke-width="1"/>
              <line x1="150" y1="150" x2="20" y2="225" stroke="#CC0000" stroke-width="1"/>
              <line x1="150" y1="150" x2="20" y2="75" stroke="#CC0000" stroke-width="1"/>
              <circle cx="150" cy="150" r="30" fill="none" stroke="#CC0000" stroke-width=".8"/>
              <circle cx="150" cy="150" r="60" fill="none" stroke="#CC0000" stroke-width=".8"/>
              <circle cx="150" cy="150" r="90" fill="none" stroke="#CC0000" stroke-width=".8"/>
              <circle cx="150" cy="150" r="120" fill="none" stroke="#CC0000" stroke-width=".8"/>
              <circle cx="150" cy="150" r="150" fill="none" stroke="#CC0000" stroke-width=".8"/>
            </svg>
          </div>
          <div class="sp-pf">
            <img
              src="https://drive.google.com/uc?export=view&id=1Nlr68qWNhufEfpmYfywl9n8EmmXR55f7"
              alt="Febriano Doweng"
              onerror="this.onerror=null;this.src='https://raw.githubusercontent.com/Febriano-Doweng/Portofolio/main/Black%20White.png'"
            />
            <div class="sp-po"></div>
          </div>
          <div class="sp-ab sp-ab-b">🎓 Semester 8</div>
          <div class="sp-ab sp-ab-t">🕸️ Web Dev</div>
          <div class="sp-ab sp-ab-s">💻 Dev</div>
        </div>
      </div>
      <div>
        <h3 class="sp-an">Febriano <span>Doweng</span></h3>
        <p class="sp-ar">Teknik Informatika '22 · Universitas Nusa Putra</p>
        <p class="sp-ad">"Dengan kekuatan besar, datanglah tanggung jawab besar." — Itulah prinsip yang saya pegang dalam setiap baris kode yang saya tulis. Saya adalah mahasiswa Teknik Informatika semester 8 yang bersemangat membangun solusi digital inovatif dan berdampak nyata.</p>
        <p class="sp-ad">Seperti jaring laba-laba yang merajut kuat dari berbagai arah, saya menghubungkan ide, teknologi, dan kreativitas untuk menciptakan aplikasi yang tidak hanya fungsional, tetapi juga elegan dan efisien.</p>
        <div class="sp-ig">
          <div class="sp-ic"><div class="sp-il">Nama</div><div class="sp-iv">Febriano Doweng</div></div>
          <div class="sp-ic"><div class="sp-il">Universitas</div><div class="sp-iv">Nusa Putra</div></div>
          <div class="sp-ic"><div class="sp-il">Program Studi</div><div class="sp-iv">Teknik Informatika</div></div>
          <div class="sp-ic"><div class="sp-il">Lokasi</div><div class="sp-iv">Sukabumi, Jawa Barat</div></div>
          <div class="sp-ic"><div class="sp-il">Semester</div><div class="sp-iv">8 (Akhir)</div></div>
          <div class="sp-ic"><div class="sp-il">Status</div><div class="sp-iv">Aktif Kuliah</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="sp-skills">
  <div class="sp-con">
    <div class="sp-tit">
      <div class="sp-lbl">🕸️ Kemampuan</div>
      <h2 class="sp-h2">Kekuatan <span>Super</span> Saya</h2>
      <div class="sp-div"></div>
      <p class="sp-sub">Setiap teknologi adalah benang jaring yang memperkuat kemampuan saya sebagai developer.</p>
    </div>
    <div class="sp-fbs">
      <button class="sp-fb on" onclick="spFilt('All',this)">All</button>
      <button class="sp-fb" onclick="spFilt('Frontend',this)">Frontend</button>
      <button class="sp-fb" onclick="spFilt('Backend',this)">Backend</button>
      <button class="sp-fb" onclick="spFilt('Tools',this)">Tools</button>
    </div>
    <div class="sp-skg" id="sp-skg"></div>
    <div class="sp-stg">
      <div class="sp-stc"><div class="sp-si">🚀</div><div class="sp-sv">10+</div><div class="sp-sl">Proyek Selesai</div></div>
      <div class="sp-stc"><div class="sp-si">⚡</div><div class="sp-sv">15+</div><div class="sp-sl">Teknologi Dikuasai</div></div>
      <div class="sp-stc"><div class="sp-si">🎓</div><div class="sp-sv">8</div><div class="sp-sl">Semester Aktif</div></div>
      <div class="sp-stc"><div class="sp-si">☕</div><div class="sp-sv">∞</div><div class="sp-sl">Kopi Per Hari</div></div>
    </div>
  </div>
</section>

<section id="sp-projects">
  <div class="sp-con">
    <div class="sp-tit">
      <div class="sp-lbl">🚀 Portofolio</div>
      <h2 class="sp-h2">Misi <span>Heroik</span> Saya</h2>
      <div class="sp-div"></div>
      <p class="sp-sub">Setiap proyek adalah misi penyelamatan — dari chaos menjadi solusi digital yang powerful.</p>
    </div>
    <div class="sp-pg2" id="sp-pg2"></div>
    <div class="sp-ghc">
      <a href="https://github.com/Febriano-Doweng" target="_blank" rel="noopener noreferrer" class="sp-ghb">🐙 Lihat Semua Proyek di GitHub →</a>
    </div>
  </div>
</section>

<section id="sp-contact">
  <div class="sp-con">
    <div class="sp-tit">
      <div class="sp-lbl">📡 Kontak</div>
      <h2 class="sp-h2">Kirim <span>Sinyal</span> Kepada Saya</h2>
      <div class="sp-div"></div>
      <p class="sp-sub">Layaknya jaring laba-laba, saya selalu terhubung. Kirim pesan dan saya akan merespons secepat mungkin!</p>
    </div>
    <div class="sp-csin">
      <div class="sp-cbx">
        <div class="sp-ctl">🕷️ Kirim Pesan</div>
        <div class="sp-ok" id="sp-ok">✅ Pesan berhasil dikirim! Saya akan segera membalas.</div>
        <form id="sp-form" onsubmit="spSend(event)">
          <div class="sp-fg"><label class="sp-fl">Nama Lengkap</label><input type="text" class="sp-inp" placeholder="Nama Anda" required id="sp-fn"/></div>
          <div class="sp-fg"><label class="sp-fl">Email</label><input type="email" class="sp-inp" placeholder="email@contoh.com" required id="sp-fe"/></div>
          <div class="sp-fg"><label class="sp-fl">Pesan</label><textarea class="sp-txt" placeholder="Hei! Saya ingin berkolaborasi..." required id="sp-fm" rows="5"></textarea></div>
          <button type="submit" class="sp-sbtn">🕸️ TEMBAKKAN JARING!</button>
        </form>
      </div>
      <div class="sp-qb">
        <p style="font-size:48px;margin-bottom:12px">🕷️</p>
        <blockquote>"With great power comes great responsibility."</blockquote><br>
        <cite>— Uncle Ben</cite>
        <div style="width:64px;height:2px;background:rgba(204,0,0,.5);margin:12px auto"></div>
        <p style="color:#4b5563;font-size:12px;margin-top:8px">Siap berkolaborasi? Mari wujudkan ide menjadi kenyataan bersama!</p>
      </div>
    </div>
  </div>
</section>

<footer id="sp-footer">
  <div style="display:flex;justify-content:center;margin-bottom:16px">
    <svg width="40" height="40" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="#CC0000"/>
      <line x1="50" y1="50" x2="50" y2="5" stroke="#8B0000" stroke-width="1.5" opacity=".8"/>
      <line x1="50" y1="50" x2="89" y2="72" stroke="#8B0000" stroke-width="1.5" opacity=".8"/>
      <line x1="50" y1="50" x2="11" y2="72" stroke="#8B0000" stroke-width="1.5" opacity=".8"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="#8B0000" stroke-width="1.5" opacity=".8"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#8B0000" stroke-width="1.5" opacity=".8"/>
      <ellipse cx="50" cy="47" rx="12" ry="15" fill="#1a0000"/>
      <ellipse cx="44" cy="43" rx="5" ry="6" fill="white" transform="rotate(-15 44 43)"/>
      <ellipse cx="56" cy="43" rx="5" ry="6" fill="white" transform="rotate(15 56 43)"/>
    </svg>
  </div>
  <div class="sp-fl2">SPIDER<span>-DEV</span></div>
  <div class="sp-fsub">Teknik Informatika · Universitas Nusa Putra · Sukabumi</div>
  <div class="sp-fsocs">
    <a href="https://github.com/Febriano-Doweng" target="_blank" rel="noopener noreferrer" class="sp-fsoc" title="GitHub">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,.85)"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/brynd-tuakora-8a8a28293/" target="_blank" rel="noopener noreferrer" class="sp-fsoc" title="LinkedIn">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <a href="https://www.instagram.com/bryant_tuakora/" target="_blank" rel="noopener noreferrer" class="sp-fsoc" title="Instagram">
      <svg width="22" height="22" viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#f09433"/><stop offset="50%" style="stop-color:#dc2743"/><stop offset="100%" style="stop-color:#bc1888"/></linearGradient></defs><path fill="url(#ig)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>
    <a href="mailto:febriano.doweng_ti22@nusaputra.ac.id" class="sp-fsoc" title="Email">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#ef4444"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    </a>
  </div>
  <div class="sp-fls">
    <a onclick="spGo('sp-home')">Home</a>
    <a onclick="spGo('sp-about')">About</a>
    <a onclick="spGo('sp-skills')">Skills</a>
    <a onclick="spGo('sp-projects')">Projects</a>
    <a onclick="spGo('sp-contact')">Contact</a>
  </div>
  <div class="sp-fdiv"></div>
  <div class="sp-fcp">© 2025 Febriano Doweng · Dibuat dengan <span>❤️</span> dan banyak ☕ · <span>🕷️ Universitas Nusa Putra, Sukabumi</span></div>
  <div class="sp-fbt">Built with HTML · CSS · JavaScript</div>
</footer>

<div class="sp-mov" id="sp-mov" onclick="spMClose(event)">
  <div class="sp-mb">
    <div class="sp-mh">
      <div style="position:absolute;top:0;right:0;opacity:.1">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <line x1="150" y1="0" x2="30" y2="150" stroke="#CC0000" stroke-width="1"/>
          <line x1="150" y1="0" x2="90" y2="150" stroke="#CC0000" stroke-width="1"/>
          <line x1="150" y1="0" x2="150" y2="150" stroke="#CC0000" stroke-width="1"/>
          <circle cx="150" cy="0" r="50" fill="none" stroke="#CC0000" stroke-width=".8"/>
          <circle cx="150" cy="0" r="100" fill="none" stroke="#CC0000" stroke-width=".8"/>
        </svg>
      </div>
      <div class="sp-mht">
        <div style="display:flex;align-items:flex-start;gap:16px;flex:1">
          <div class="sp-mi" id="sp-mi"></div>
          <div class="sp-mta">
            <div class="sp-mbd" id="sp-mbd"></div>
            <div class="sp-mtl" id="sp-mtl"></div>
          </div>
        </div>
        <button class="sp-xcl" onclick="spMDirect()">✕</button>
      </div>
    </div>
    <div class="sp-mby">
      <div class="sp-mmt" id="sp-mmt"></div>
      <div class="sp-ms"><div class="sp-mst">📄 Deskripsi Proyek</div><div class="sp-mtb"><p class="sp-mtx" id="sp-mdsc"></p></div></div>
      <div class="sp-ms"><div class="sp-mst">⚡ Fitur & Highlight</div><div class="sp-mtb"><ul class="sp-mhl" id="sp-mhl"></ul></div></div>
      <div class="sp-ms"><div class="sp-mst">🛠️ Teknologi yang Digunakan</div><div class="sp-tgs" id="sp-mtch"></div></div>
      <div class="sp-ms"><div class="sp-mst">🎯 Tantangan & Solusi</div><div class="sp-mtb"><p class="sp-mtx" id="sp-mchl"></p></div></div>
      <div class="sp-ms"><div class="sp-mst">🏆 Hasil & Dampak</div><div class="sp-ob"><p class="sp-mtx" id="sp-mout"></p></div></div>
      <div class="sp-mac">
        <a id="sp-mgh" href="#" target="_blank" rel="noopener noreferrer" class="sp-ma1">🐙 Lihat di GitHub</a>
        <button class="sp-ma2" onclick="spMDirect()">✕ Tutup</button>
      </div>
    </div>
  </div>
</div>
    `;

    const script = document.createElement("script");
    script.textContent = `
// DATA SKILLS
var spSkills = [
  {name:"HTML & CSS",lv:90,icon:"🌐",cat:"Frontend"},
  {name:"JavaScript",lv:85,icon:"⚡",cat:"Frontend"},
  {name:"Tailwind CSS",lv:88,icon:"🎨",cat:"Frontend"},
  {name:"Bootstrap",lv:80,icon:"🅱️",cat:"Frontend"},
  {name:"Node.js",lv:70,icon:"🟢",cat:"Backend"},
  {name:"PHP / Laravel",lv:72,icon:"🐘",cat:"Backend"},
  {name:"MySQL",lv:78,icon:"🗄️",cat:"Backend"},
  {name:"Python",lv:75,icon:"🐍",cat:"Backend"},
  {name:"Machine Learning",lv:68,icon:"🤖",cat:"Backend"},
  {name:"Git & GitHub",lv:85,icon:"🐙",cat:"Tools"},
  {name:"Vercel / Deploy",lv:80,icon:"🚀",cat:"Tools"},
  {name:"Figma",lv:65,icon:"🖌️",cat:"Tools"}
];

// DATA PROYEK
var spProjects = [
  {
    title:"Spam Detection — Machine Learning",
    short:"Aplikasi deteksi spam berbasis Machine Learning menggunakan Python untuk mengklasifikasikan pesan sebagai spam atau bukan spam (ham) secara otomatis.",
    full:"Proyek Spam Detection ini merupakan implementasi Machine Learning untuk mengklasifikasikan pesan teks secara otomatis sebagai spam atau bukan spam (ham). Menggunakan Python sebagai bahasa utama, proyek ini menerapkan teknik Natural Language Processing (NLP) untuk memproses dan menganalisis teks, kemudian melatih model klasifikasi yang mampu mendeteksi pola-pola umum dalam pesan spam. Proyek ini dibangun sebagai bagian dari eksplorasi bidang Artificial Intelligence dan Machine Learning dalam kurikulum Teknik Informatika.",
    hl:[
      "Implementasi algoritma klasifikasi teks untuk deteksi spam (Naive Bayes / Logistic Regression)",
      "Preprocessing teks: tokenisasi, stopword removal, stemming/lemmatization",
      "Feature extraction menggunakan TF-IDF (Term Frequency-Inverse Document Frequency)",
      "Training dan evaluasi model dengan dataset pesan spam nyata",
      "Pengukuran akurasi, precision, recall, dan F1-score model",
      "Visualisasi hasil klasifikasi dan distribusi data spam vs ham",
      "Analisis confusion matrix untuk evaluasi performa model secara mendetail",
      "Implementasi pipeline Machine Learning yang terstruktur dan modular"
    ],
    tech:["Python","Scikit-learn","Pandas","NumPy","NLP","Machine Learning","Jupyter Notebook"],
    icon:"🤖",grad:"g1",status:"Selesai",type:"Machine Learning",
    github:"https://github.com/Febriano-Doweng/SpamDetection",
    period:"2024 – 2025",role:"Machine Learning Engineer",
    challenges:"Tantangan utama adalah menangani ketidakseimbangan dataset antara kelas spam dan ham, serta memilih teknik preprocessing teks yang tepat agar model dapat mengenali pola spam dengan akurat. Selain itu, melakukan feature engineering yang efektif untuk merepresentasikan teks ke dalam format numerik yang optimal bagi algoritma ML juga menjadi fokus penting dalam proyek ini.",
    outcome:"Model berhasil dilatih dan mampu mengklasifikasikan pesan spam dengan akurasi yang baik. Proyek ini memperdalam pemahaman tentang Natural Language Processing, pipeline Machine Learning, dan evaluasi model klasifikasi — skill yang sangat relevan di era AI dan data science saat ini."
  },
  {
    title:"Website Company Profile PT. Lambu Raya Utama",
    short:"Website company profile responsif yang menampilkan profil, layanan, proyek, dan kontak perusahaan dengan desain modern dan performa optimal.",
    full:"Mengembangkan website company profile responsif untuk PT. Lambu Raya Utama menggunakan HTML, CSS, JavaScript, dan Tailwind CSS. Website ini dirancang untuk merepresentasikan identitas perusahaan secara profesional di dunia digital, menampilkan informasi lengkap mengenai profil perusahaan, layanan yang ditawarkan, portofolio proyek, serta saluran kontak yang mudah diakses. Desain modern dan performa optimal menjadi prioritas utama dalam pengembangan, memastikan pengalaman pengguna yang terbaik di berbagai perangkat dan ukuran layar.",
    hl:[
      "Desain responsif yang optimal di semua ukuran layar (mobile, tablet, desktop)",
      "Animasi CSS modern dengan transisi halus antar elemen dan scroll reveal",
      "Halaman Beranda dengan hero section menarik dan call-to-action yang efektif",
      "Halaman Tentang Kami menampilkan visi, misi, dan nilai-nilai perusahaan",
      "Halaman Layanan dengan deskripsi detail setiap jasa yang ditawarkan perusahaan",
      "Galeri proyek yang menampilkan portofolio pekerjaan perusahaan secara visual",
      "Formulir kontak interaktif untuk kemudahan komunikasi dengan calon klien",
      "Performa loading cepat dengan optimasi aset dan kode yang efisien",
      "Deployment otomatis via Vercel dengan integrasi GitHub CI/CD pipeline",
      "SEO-friendly structure untuk meningkatkan visibilitas di mesin pencari"
    ],
    tech:["HTML5","CSS3","JavaScript","Tailwind CSS","Vercel","GitHub"],
    icon:"🏢",grad:"g2",status:"Selesai",type:"Web Development",
    github:"https://github.com/Febriano-Doweng/PT.Lambu-Raya-Utama/",
    period:"November 2025 – Februari 2026",role:"Full-Stack Web Developer",
    challenges:"Tantangan utama dalam proyek ini adalah memastikan konsistensi desain di berbagai browser dan perangkat, serta mengoptimalkan performa halaman agar load time tetap cepat meski menampilkan banyak konten visual. Selain itu, menerjemahkan kebutuhan bisnis klien menjadi desain yang fungsional dan estetis juga menjadi fokus utama pengerjaan proyek.",
    outcome:"Website berhasil diluncurkan dan diakses secara publik melalui Vercel. Klien mendapatkan platform digital yang profesional untuk memperkenalkan perusahaan kepada calon mitra dan pelanggan. Website mendapat respons positif dengan tampilan yang bersih, navigasi yang intuitif, dan performa yang optimal di berbagai perangkat."
  }
];

// CURSOR
var spCur = document.getElementById('sp-cursor');
document.addEventListener('mousemove', function(e) {
  if(spCur){spCur.style.left=e.clientX+'px';spCur.style.top=e.clientY+'px';}
  var t=document.createElement('div');
  t.className='sp-trail';
  t.style.cssText='left:'+e.clientX+'px;top:'+e.clientY+'px;width:4px;height:4px;opacity:0.6;transition:opacity .4s';
  document.body.appendChild(t);
  setTimeout(function(){t.remove();},400);
});

// NAVBAR SCROLL
window.addEventListener('scroll',function(){
  var n=document.getElementById('sp-nav');
  if(window.scrollY>50)n.classList.add('sc');else n.classList.remove('sc');
});

function spGo(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function spToggle(){document.getElementById('sp-ham').classList.toggle('open');document.getElementById('sp-mob').classList.toggle('open');}
function spClose(){document.getElementById('sp-ham').classList.remove('open');document.getElementById('sp-mob').classList.remove('open');}

// CANVAS WEB
var spCanvas=document.getElementById('sp-canvas');
var spCtx=spCanvas.getContext('2d');
function spResize(){spCanvas.width=window.innerWidth;spCanvas.height=window.innerHeight;spDrawWeb();}
function spDrawWeb(){
  spCtx.clearRect(0,0,spCanvas.width,spCanvas.height);
  var cx=spCanvas.width/2,cy=spCanvas.height/2;
  [[0,0],[spCanvas.width,0],[spCanvas.width,spCanvas.height],[0,spCanvas.height]].forEach(function(c){
    var maxR=Math.hypot(cx-c[0],cy-c[1]),ang=Math.atan2(c[1]-cy,c[0]-cx),sp2=Math.PI/6;
    spCtx.strokeStyle='rgba(200,0,0,.15)';spCtx.lineWidth=0.8;
    for(var i=-3;i<=3;i++){var a=ang+(i*sp2)/3;spCtx.beginPath();spCtx.moveTo(cx,cy);spCtx.lineTo(cx+Math.cos(a)*maxR,cy+Math.sin(a)*maxR);spCtx.stroke();}
  });
  for(var r=60;r<Math.max(spCanvas.width,spCanvas.height);r+=90){
    spCtx.beginPath();spCtx.arc(cx,cy,r,0,Math.PI*2);
    spCtx.strokeStyle='rgba(200,0,0,'+Math.max(0,0.12-r/8000)+')';spCtx.stroke();
  }
}
window.addEventListener('resize',spResize);spResize();

// SKILLS
var spSkVis=false;
function spRenderSk(filter){
  var grid=document.getElementById('sp-skg');
  var lst=filter==='All'?spSkills:spSkills.filter(function(s){return s.cat===filter;});
  grid.innerHTML=lst.map(function(s){
    return '<div class="sp-skc"><div class="sp-skh"><div class="sp-ski"><span class="sp-ik">'+s.icon+'</span><div><div class="sp-sn">'+s.name+'</div><div class="sp-sc">'+s.cat+'</div></div></div><span class="sp-sp">'+s.lv+'%</span></div><div class="sp-bb"><div class="sp-bar" data-lv="'+s.lv+'" style="width:'+(spSkVis?s.lv+'%':'0')+'"></div></div><div class="sp-dots">'+[0,25,50,75,100].map(function(m){return '<div class="sp-dot '+(s.lv>=m?'f':'e')+'"></div>';}).join('')+'</div></div>';
  }).join('');
  if(spSkVis)spAnimBars();
}
function spAnimBars(){document.querySelectorAll('.sp-bar').forEach(function(b){b.style.width=b.dataset.lv+'%';});}
function spFilt(cat,btn){document.querySelectorAll('.sp-fb').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');spRenderSk(cat);}
new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting&&!spSkVis){spSkVis=true;spAnimBars();}});},{threshold:0.2}).observe(document.getElementById('sp-skills'));
spRenderSk('All');

// PROJECTS
function spRenderProj(){
  var grid=document.getElementById('sp-pg2');
  var html=spProjects.map(function(p,i){
    return '<div class="sp-pjc '+p.grad+'" onclick="spMOpen('+i+')"><div class="sp-cd"><svg width="80" height="80" viewBox="0 0 100 100"><line x1="100" y1="0" x2="0" y2="100" stroke="#CC0000" stroke-width="1"/><line x1="100" y1="0" x2="20" y2="100" stroke="#CC0000" stroke-width=".8"/><circle cx="100" cy="0" r="30" fill="none" stroke="#CC0000" stroke-width=".6"/><circle cx="100" cy="0" r="60" fill="none" stroke="#CC0000" stroke-width=".6"/><circle cx="100" cy="0" r="90" fill="none" stroke="#CC0000" stroke-width=".6"/></svg></div><div class="sp-ch"><span class="sp-ci">'+p.icon+'</span><div class="sp-cbs"><span class="sp-bs">'+p.status+'</span><span class="sp-ct">'+p.type+'</span></div></div><div class="sp-tt">'+p.title+'</div><p class="sp-td">'+p.short+'</p><div class="sp-tp">📅 '+p.period+'</div><div class="sp-tch">'+p.tech.map(function(t){return '<span class="sp-tg">'+t+'</span>';}).join('')+'</div><div class="sp-cta">🔍 Lihat Detail Lengkap →</div><div class="sp-cgl"></div></div>';
  }).join('');
  html+='<div class="sp-pjc g3"><div class="sp-cs"><div style="font-size:48px;margin-bottom:16px">🕸️</div><p style="color:#4b5563;font-weight:700;font-size:14px">Proyek Berikutnya</p><p style="color:#374151;font-size:12px;margin-top:4px">Sedang dalam proses pengerjaan...</p></div></div>';
  grid.innerHTML=html;
}
spRenderProj();

// MODAL
function spMOpen(i){
  var p=spProjects[i];
  document.getElementById('sp-mi').textContent=p.icon;
  document.getElementById('sp-mtl').textContent=p.title;
  document.getElementById('sp-mbd').innerHTML='<span class="sp-bs">● '+p.status+'</span><span style="font-size:11px;font-weight:600;background:rgba(0,0,0,.3);color:#9ca3af;padding:4px 12px;border-radius:999px;border:1px solid rgba(127,29,29,.3)">'+p.type+'</span>';
  document.getElementById('sp-mmt').innerHTML='<div class="sp-mc"><div class="sp-ml">📅 Periode</div><div class="sp-mv">'+p.period+'</div></div><div class="sp-mc"><div class="sp-ml">👤 Peran</div><div class="sp-mv">'+p.role+'</div></div><div class="sp-mc"><div class="sp-ml">📊 Status</div><div class="sp-mv">'+p.status+'</div></div>';
  document.getElementById('sp-mdsc').textContent=p.full;
  document.getElementById('sp-mhl').innerHTML=p.hl.map(function(h){return '<li>'+h+'</li>';}).join('');
  document.getElementById('sp-mtch').innerHTML=p.tech.map(function(t){return '<span class="sp-tgm">'+t+'</span>';}).join('');
  document.getElementById('sp-mchl').textContent=p.challenges;
  document.getElementById('sp-mout').textContent=p.outcome;
  document.getElementById('sp-mgh').href=p.github;
  document.getElementById('sp-mov').classList.add('open');
  document.body.style.overflow='hidden';
}
function spMClose(e){if(e.target===document.getElementById('sp-mov'))spMDirect();}
function spMDirect(){document.getElementById('sp-mov').classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',function(e){if(e.key==='Escape')spMDirect();});

// CONTACT FORM
function spSend(e){
  e.preventDefault();
  var ok=document.getElementById('sp-ok');ok.classList.add('show');
  document.getElementById('sp-fn').value='';
  document.getElementById('sp-fe').value='';
  document.getElementById('sp-fm').value='';
  setTimeout(function(){ok.classList.remove('show');},4000);
}

// SCROLL ANIMATION
var spObs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';}
  });
},{threshold:0.1});
document.querySelectorAll('.sp-pjc,.sp-cbx,.sp-stc,.sp-ic').forEach(function(el){
  el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .6s ease,transform .6s ease';
  spObs.observe(el);
});
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
