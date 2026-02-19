<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Caufero Workspace</title>
</head>
<body>
  <div class="page" data-theme="auto">
    <div class="bg" aria-hidden="true"></div>

    <header class="topbar" role="banner">
      <div class="topbar-inner">
        <div class="topbar-left">
          <a class="brand" href="https://caufero.github.io/projects/_Misc/_/_Stuff.md#">
            <img src="https://caufero.github.io/projects/Apps/CarePort/Screenshots/caufero_logo.png" alt="4KPAINT" style="width:37px;height:37px;object-fit:cover;margin-right:-3px;" />
            <div class="brand-text">
              <div class="brand-name">Caufero Workspace</div>
              <div class="brand-sub">Your control room for apps, prompts, chats, and modular blocks</div>
            </div>
          </a>
        </div>

        <div class="topbar-center">
          <div class="page-chip">
            <span class="page-chip-dot" aria-hidden="true"></span>
            <span class="page-chip-text">SimpleQ</span>
          </div>
        </div>

        <div class="topbar-right">
          <a class="icon-btn" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Beautify%20Markdown%20File.md#" title="Beautify Markdown Pages" aria-label="Beautify Markdown Pages">
            <svg viewBox="0 0 24 24" class="ico" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3l2.2 6.8H21l-5.6 4.1L17.6 21 12 16.9 6.4 21l2.2-7.1L3 9.8h6.8L12 3z"/>
            </svg>
            <span class="icon-btn-text">Beautify</span>
          </a>

          <a class="icon-btn brand" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/How%20To%20Go%20About%20Some%20Development%20Task.md#" title="How To Do Stuff In Caufero" aria-label="How To Do Stuff In Caufero">
            <svg viewBox="0 0 24 24" class="ico" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <path d="M14 2v6h6"/>
              <path d="M8 13h8"/>
              <path d="M8 17h8"/>
              <path d="M8 9h2"/>
            </svg>
            <span class="icon-btn-text">How To</span>
          </a>

          <button class="icon-btn ghost" id="btnTheme" type="button" title="Toggle theme" aria-label="Toggle theme">
            <svg viewBox="0 0 24 24" class="ico" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>
            </svg>
            <span class="icon-btn-text">Theme</span>
          </button>

          <button class="icon-btn ghost" id="btnMenu" type="button" title="Toggle menu" aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" class="ico" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 6h16"/>
              <path d="M4 12h16"/>
              <path d="M4 18h16"/>
            </svg>
            <span class="icon-btn-text">Menu</span>
          </button>
        </div>
      </div>
    </header>

    <div class="shell" id="shell">
      <aside class="rail rail-left" id="railLeft" aria-label="Side menu">
        <div class="rail-top">
          <div class="rail-title">Navigation</div>
          <div class="rail-sub">Search to jump fast</div>

          <div class="rail-search">
            <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
            <input id="navSearch" type="search" placeholder="Search links..." autocomplete="off" />
            <button class="xbtn" id="navClear" type="button" title="Clear" aria-label="Clear">
              <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="rail-hint" id="navHint">Tip: type "invoice", "kooltool", "xml", "careport"</div>
        </div>

        <nav class="rail-body" id="navTree">
          <a class="nav-item" href="https://caufero.github.io/projects/_Misc/_/_Stuff.md#" data-label="Home">
            <span class="nav-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 10.5L12 3l9 7.5"></path>
                <path d="M5 10v11h14V10"></path>
              </svg>
            </span>
            <span class="nav-text">Home</span>
          </a>

          <div class="nav-group" data-label="Apps">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 7h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 17h16"></path>
                </svg>
              </span>
              <span class="nav-text">Apps</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>
            <div class="nav-group-body">
              <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/4KPAINT/_NewAdditions.md" data-label="Apps 4KPAINT"><span class="dot" aria-hidden="true"></span><span class="nav-text">4KPAINT</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/CarePort/_NewAdditions.md" data-label="Apps CarePort"><span class="dot" aria-hidden="true"></span><span class="nav-text">CarePort</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/Elimes%20Outfit/_NewAdditions.md" data-label="Apps Elimes Outfit"><span class="dot" aria-hidden="true"></span><span class="nav-text">Elimes Outfit</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/Giftera/_NewAdditions.md" data-label="Apps Giftera"><span class="dot" aria-hidden="true"></span><span class="nav-text">Giftera</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/I2D/_NewAdditions.md" data-label="Apps I2D"><span class="dot" aria-hidden="true"></span><span class="nav-text">I2D</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/KoolTool/_NewAdditions.md" data-label="Apps KoolTool"><span class="dot" aria-hidden="true"></span><span class="nav-text">KoolTool</span></a>
            </div>
          </div>

          <div class="nav-group" data-label="Temp Text Files">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                </svg>
              </span>
              <span class="nav-text">Temp Text Files</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>
            <div class="nav-group-body">
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp1.md" data-label="Temp Text Files Temp 1"><span class="dot"></span><span class="nav-text">Temp 1</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp2.md" data-label="Temp Text Files Temp 2"><span class="dot"></span><span class="nav-text">Temp 2</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp3.md" data-label="Temp Text Files Temp 3"><span class="dot"></span><span class="nav-text">Temp 3</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp4.md" data-label="Temp Text Files Temp 4"><span class="dot"></span><span class="nav-text">Temp 4</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp5.md" data-label="Temp Text Files Temp 5"><span class="dot"></span><span class="nav-text">Temp 5</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp6.md" data-label="Temp Text Files Temp 6"><span class="dot"></span><span class="nav-text">Temp 6</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp7.md" data-label="Temp Text Files Temp 7"><span class="dot"></span><span class="nav-text">Temp 7</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp8.md" data-label="Temp Text Files Temp 8"><span class="dot"></span><span class="nav-text">Temp 8</span></a>
              <a class="nav-item sub" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp9.md" data-label="Temp Text Files Temp 9"><span class="dot"></span><span class="nav-text">Temp 9</span></a>
              <a class="nav-item sub danger" href="vscode://file/Users/cyril/Documents/Caufero%20Apps/Projects/_Misc/_/Temp10.md" data-label="Temp Text Files Temp 10"><span class="dot"></span><span class="nav-text">Temp 10</span></a>
            </div>
          </div>

          <div class="nav-group" data-label="AI Prompts">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2a4 4 0 0 0-4 4v1H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1v1a4 4 0 1 0 8 0v-1h1a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3h-1V6a4 4 0 0 0-4-4z"></path>
                  <path d="M9 12h6"></path>
                  <path d="M12 9v6"></path>
                </svg>
              </span>
              <span class="nav-text">AI Prompts</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>

            <div class="nav-group-body">
              <div class="nav-subgroup" data-label="AI Prompts CSS">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill">CSS</span>
                  <span class="nav-text">CSS</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Convert%20Current%20CSS%20To%20Tailwind%20CSS.md" data-label="AI Prompts CSS Convert Current CSS to Tailwind CSS"><span class="dot"></span><span class="nav-text">Convert Current CSS to Tailwind CSS</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/CSS_Theme_Mapper_Prompt.md" data-label="AI Prompts CSS Map CSS To Some Theme"><span class="dot"></span><span class="nav-text">Map CSS To Some Theme</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="AI Prompts Development">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill violet">DEV</span>
                  <span class="nav-text">Development</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/CauferoAppStarter/_Misc/Build%20Apps%20With%20CauferoAppStarter.md" data-label="AI Prompts Development Build App In CauferoAppStarter"><span class="dot"></span><span class="nav-text">Build App In CauferoAppStarter</span></a>
                  
                  <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/CauferoAppStarter/_Misc/_Entity%20Filter%20Page.md" data-label="AI Prompts Development Build List Filter Page"><span class="dot"></span><span class="nav-text">Build List Filter Page</span></a>

                  <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/CauferoAppStarter/_Misc/+++Entity%20List%20Page.md" data-label="AI Prompts Development Build List Page"><span class="dot"></span><span class="nav-text">Build List Page</span></a>

                  <a class="nav-item sub" href="https://caufero.github.io/projects/Apps/CauferoAppStarter/_Misc/+++ Report%20Filter%20Page.md" data-label="AI Prompts Development Build Report Filter Page"><span class="dot"></span><span class="nav-text">Build Report Filter Page</span></a>

                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Build%20Totally%20New%20Page.md" data-label="AI Prompts Development Build Totally New Page"><span class="dot"></span><span class="nav-text">Build Totally New Page</span></a>
                  
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Do%20Changes%20In%20Solution%20Based%20On%20Development%20Documentation.md" data-label="AI Prompts Development Do Changes In Solution Based On Development Documentation"><span class="dot"></span><span class="nav-text">Do Changes In Solution Based On Development Documentation</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/How%20To%20Go%20About%20Some%20Development%20Task.md" data-label="AI Prompts Development How To Go About Some Development Task"><span class="dot"></span><span class="nav-text">How To Go About Some Development Task</span></a>

                  <div class="nav-subgroup" data-label="AI Prompts Development Make Page Generation Better">
                    <button class="nav-subgroup-head inner" type="button" data-toggle="subgroup">
                      <span class="mini-pill teal">GEN</span>
                      <span class="nav-text">Make Page Generation Better</span>
                      <span class="chev" aria-hidden="true">
                        <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M9 18l6-6-6-6"></path>
                        </svg>
                      </span>
                    </button>
                    <div class="nav-subgroup-body">
                      <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Make%20A%20Page%20ChatGPT%20Generated%20Become%20Better/Format%20JS%20Of%20Working%20FM%20Script%20Into%20Preferred%20Components.md" data-label="AI Prompts Development Make Page Generation Better Format JS Of Working FM Script Into Preferred Components"><span class="dot"></span><span class="nav-text">Format JS Of Working FM Script Into Preferred Components</span></a>
                      <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Make%20A%20Page%20ChatGPT%20Generated%20Become%20Better/Make%20A%20Page%20ChatGPT%20Generated%20Become%20Better.md" data-label="AI Prompts Development Make Page Generation Better Make A Page ChatGPT Generated Become Better"><span class="dot"></span><span class="nav-text">Make A Page ChatGPT Generated Become Better</span></a>
                    </div>
                  </div>

                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Mimic%20Caufero%20Workspace%20Page.md" data-label="AI Prompts Development Mimic Caufero Workspace Page"><span class="dot"></span><span class="nav-text">Mimic Caufero Workspace Page</span></a>

                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Update%20ExecuteSQL%20Query.md" data-label="AI Prompts Development Update ExecuteSQL Query"><span class="dot"></span><span class="nav-text">Update ExecuteSQL Query</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="AI Prompts Documents">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill amber">DOC</span>
                  <span class="nav-text">Documents</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Generate%20Contract.md" data-label="AI Prompts Documents Software Contract"><span class="dot"></span><span class="nav-text">Software Contract</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Generate%20Software%20Features%20Document%20_%20Based%20On%20DDR%20_n_%20Sample%20Features%20Doc.md" data-label="AI Prompts Documents Software Features Document"><span class="dot"></span><span class="nav-text">Software Features Document</span></a>
                  <a class="nav-item sub muted" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Generate%20Invoice.md" data-label="AI Prompts Documents Invoice"><span class="dot"></span><span class="nav-text">⏳ Invoice</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Generate%20Software%20Proposal.md" data-label="AI Prompts Documents Software Proposal"><span class="dot"></span><span class="nav-text">Software Proposal</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="AI Prompts FM Script <-> XML">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill slate">XML</span>
                  <span class="nav-text">FM Script &lt;-&gt; XML</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/XML:FM%20Scripts%20Convertions/Convert%20FM%20Script%20To%20XML.md" data-label="AI Prompts FM Script XML FM Script To XML"><span class="dot"></span><span class="nav-text">FM Script To XML</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/XML:FM%20Scripts%20Convertions/Convert%20XML%20To%20FM%20Script.md" data-label="AI Prompts FM Script XML XML To FM Script"><span class="dot"></span><span class="nav-text">XML To FM Script</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="AI Prompts Docs">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill teal">DOCS</span>
                  <span class="nav-text">Docs</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Generate%20Documentations/AI_AgentTraining.md" data-label="AI Prompts Docs Documentation To Train Agent To Do Something"><span class="dot"></span><span class="nav-text">Documentation To Train Agent To Do Something</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/Generate%20Documentations/FM%20App%20Documentation.md" data-label="AI Prompts Docs Documentation For A FileMaker Application"><span class="dot"></span><span class="nav-text">Documentation For A FileMaker Application</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="AI Prompts Explain">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill rose">WHY</span>
                  <span class="nav-text">Explain</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/What%20Is%20It%20Doing/What%20Is%20This%20FM%20App%20Doing.md" data-label="AI Prompts Explain What Is This FileMaker Application Doing"><span class="dot"></span><span class="nav-text">What Is This FileMaker Application Doing?</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/AI%20Prompts/What%20Is%20It%20Doing/What%20Is%20This%20FM%20Script%20Doing.md" data-label="AI Prompts Explain What Is This FileMaker Script Doing"><span class="dot"></span><span class="nav-text">What Is This FileMaker Script Doing?</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-group open" data-label="Modular Solutions">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h7v7H4z"></path>
                  <path d="M13 4h7v7h-7z"></path>
                  <path d="M4 13h7v7H4z"></path>
                  <path d="M13 13h7v7h-7z"></path>
                </svg>
              </span>
              <span class="nav-text">Modular Solutions</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>

            <div class="nav-group-body">
              <div class="nav-subgroup" data-label="Modular Solutions Blue Collar">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill">BC</span>
                  <span class="nav-text">Blue Collar</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/barcode_test.md" data-label="Modular Solutions Blue Collar barcode_test"><span class="dot"></span><span class="nav-text">barcode_test</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/Coffee%20Break.md" data-label="Modular Solutions Blue Collar Coffee Break"><span class="dot"></span><span class="nav-text">Coffee Break</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/Item%20Collection.md" data-label="Modular Solutions Blue Collar Item Collection"><span class="dot"></span><span class="nav-text">Item Collection</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/Time_Picker.md" data-label="Modular Solutions Blue Collar Time_Picker"><span class="dot"></span><span class="nav-text">Time_Picker</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="Modular Solutions PerformanceBTS">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill amber">PB</span>
                  <span class="nav-text">PerformanceBTS</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/ActionTrack_R1.md" data-label="Modular Solutions PerformanceBTS ActionTrack_R1"><span class="dot"></span><span class="nav-text">ActionTrack_R1</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/BCS_d1.md" data-label="Modular Solutions PerformanceBTS BCS_d1"><span class="dot"></span><span class="nav-text">BCS_d1</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/BCS_StyleSheetTheme.md" data-label="Modular Solutions PerformanceBTS BCS_StyleSheetTheme"><span class="dot"></span><span class="nav-text">BCS_StyleSheetTheme</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/FM%20Virtual%20Menu%20List.md" data-label="Modular Solutions PerformanceBTS FM Virtual Menu List"><span class="dot"></span><span class="nav-text">FM Virtual Menu List</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/InfoTools%20Helper.md" data-label="Modular Solutions PerformanceBTS InfoTools Helper"><span class="dot"></span><span class="nav-text">InfoTools Helper</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/Task_List.md" data-label="Modular Solutions PerformanceBTS Task_List"><span class="dot"></span><span class="nav-text">Task_List</span></a>
                </div>
              </div>

              <div class="nav-subgroup open" data-label="Modular Solutions Geist">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill violet">G</span>
                  <span class="nav-text">Geist</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/FMSVGInator.md" data-label="Modular Solutions Geist FMSVGInator"><span class="dot"></span><span class="nav-text">FMSVGInator</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/LedgerLink.md" data-label="Modular Solutions Geist LedgerLink"><span class="dot"></span><span class="nav-text">LedgerLink</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/ModLog.md" data-label="Modular Solutions Geist ModLog"><span class="dot"></span><span class="nav-text">ModLog</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/OttoDeploy.md" data-label="Modular Solutions Geist OttoDeploy"><span class="dot"></span><span class="nav-text">OttoDeploy</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/OttoFMS.md" data-label="Modular Solutions Geist OttoFMS"><span class="dot"></span><span class="nav-text">OttoFMS</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/ProofChat.md" data-label="Modular Solutions Geist ProofChat"><span class="dot"></span><span class="nav-text">ProofChat</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/Raycast.md" data-label="Modular Solutions Geist Raycast"><span class="dot"></span><span class="nav-text">Raycast</span></a>
                  <a class="nav-item sub active" href="https://caufero.github.io/projects/ModularSolutions/SimpleQ.md" data-label="Modular Solutions Geist SimpleQ"><span class="dot"></span><span class="nav-text">SimpleQ</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="Modular Solutions Monkeybread">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill slate">MB</span>
                  <span class="nav-text">Monkeybread</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/CodeSnips.md" data-label="Modular Solutions Monkeybread CodeSnips"><span class="dot"></span><span class="nav-text">CodeSnips</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="Modular Solutions Others">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill teal">+</span>
                  <span class="nav-text">Others</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/JSONQuery%202.1.md" data-label="Modular Solutions Others JSONQuery 2.1"><span class="dot"></span><span class="nav-text">JSONQuery 2.1</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/OData%20Examples.md" data-label="Modular Solutions Others OData Examples"><span class="dot"></span><span class="nav-text">OData Examples</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/ModularSolutions/TaskControl.md" data-label="Modular Solutions Others TaskControl"><span class="dot"></span><span class="nav-text">TaskControl</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-group" data-label="Tailwind-Designed Websites">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12c2-6 6-6 8 0s6 6 8 0"></path>
                  <path d="M4 18c2-6 6-6 8 0s6 6 8 0"></path>
                </svg>
              </span>
              <span class="nav-text">Tailwind-Designed Websites</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>
            <div class="nav-group-body">
              <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/_Stuff.md#tailwind-designed-websites" data-label="Tailwind-Designed Websites Jump To Section"><span class="dot"></span><span class="nav-text">Jump to Sites section</span></a>
              <div class="nav-subgroup" data-label="Tailwind-Designed Websites AI Agents and Automation">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill teal">AI</span>
                  <span class="nav-text">AI Agents &amp; Automation</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/AgentMail.md" data-label="Tailwind-Designed Websites AI AgentMail"><span class="dot"></span><span class="nav-text">AgentMail</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/AI%20Agents%20Hub.md" data-label="Tailwind-Designed Websites AI AI Agents Hub"><span class="dot"></span><span class="nav-text">AI Agents Hub</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/AI%20Agents%20List.md" data-label="Tailwind-Designed Websites AI AI Agents List"><span class="dot"></span><span class="nav-text">AI Agents List</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/AllGPTs.md" data-label="Tailwind-Designed Websites AI AllGPTs"><span class="dot"></span><span class="nav-text">AllGPTs</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/AutoGPT.md" data-label="Tailwind-Designed Websites AI AutoGPT"><span class="dot"></span><span class="nav-text">AutoGPT</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Best%20AI%20Agents.md" data-label="Tailwind-Designed Websites AI Best AI Agents"><span class="dot"></span><span class="nav-text">Best AI Agents</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Browser%20Use.md" data-label="Tailwind-Designed Websites AI Browser Use"><span class="dot"></span><span class="nav-text">Browser Use</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Composio.md" data-label="Tailwind-Designed Websites AI Composio"><span class="dot"></span><span class="nav-text">Composio</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Continuum.md" data-label="Tailwind-Designed Websites AI Continuum"><span class="dot"></span><span class="nav-text">Continuum</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Cranston%20AI.md" data-label="Tailwind-Designed Websites AI Cranston AI"><span class="dot"></span><span class="nav-text">Cranston AI</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/CrewAI.md" data-label="Tailwind-Designed Websites AI CrewAI"><span class="dot"></span><span class="nav-text">CrewAI</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Dify.md" data-label="Tailwind-Designed Websites AI Dify"><span class="dot"></span><span class="nav-text">Dify</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Flowise.md" data-label="Tailwind-Designed Websites AI Flowise"><span class="dot"></span><span class="nav-text">Flowise</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/LlamaIndex.md" data-label="Tailwind-Designed Websites AI LlamaIndex"><span class="dot"></span><span class="nav-text">LlamaIndex</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Subconscious.md" data-label="Tailwind-Designed Websites AI Subconscious"><span class="dot"></span><span class="nav-text">Subconscious</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Tavily.md" data-label="Tailwind-Designed Websites AI Tavily"><span class="dot"></span><span class="nav-text">Tavily</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/TaskMaster.md" data-label="Tailwind-Designed Websites AI TaskMaster"><span class="dot"></span><span class="nav-text">TaskMaster</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="Tailwind-Designed Websites Builders and Platforms">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill violet">BLD</span>
                  <span class="nav-text">Builders &amp; Platforms</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Bolt.new.md" data-label="Tailwind-Designed Websites Builders Bolt.new"><span class="dot"></span><span class="nav-text">Bolt.new</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Cofondr.md" data-label="Tailwind-Designed Websites Builders Cofondr"><span class="dot"></span><span class="nav-text">Cofondr</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Factory.md" data-label="Tailwind-Designed Websites Builders Factory"><span class="dot"></span><span class="nav-text">Factory</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Lovable.md" data-label="Tailwind-Designed Websites Builders Lovable"><span class="dot"></span><span class="nav-text">Lovable</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/MarsX.md" data-label="Tailwind-Designed Websites Builders MarsX"><span class="dot"></span><span class="nav-text">MarsX</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Unicorn%20Platform.md" data-label="Tailwind-Designed Websites Builders Unicorn Platform"><span class="dot"></span><span class="nav-text">Unicorn Platform</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Zuludesk.md" data-label="Tailwind-Designed Websites Builders Zuludesk"><span class="dot"></span><span class="nav-text">Zuludesk</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="Tailwind-Designed Websites Dev Tools and Docs">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill">DEV</span>
                  <span class="nav-text">Dev Tools &amp; Docs</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Cursor.md" data-label="Tailwind-Designed Websites Dev Cursor"><span class="dot"></span><span class="nav-text">Cursor</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Decipher%20AI.md" data-label="Tailwind-Designed Websites Dev Decipher AI"><span class="dot"></span><span class="nav-text">Decipher AI</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Dev%20Hunt.md" data-label="Tailwind-Designed Websites Dev Dev Hunt"><span class="dot"></span><span class="nav-text">Dev Hunt</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Graphed.md" data-label="Tailwind-Designed Websites Dev Graphed"><span class="dot"></span><span class="nav-text">Graphed</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Gravity.md" data-label="Tailwind-Designed Websites Dev Gravity"><span class="dot"></span><span class="nav-text">Gravity</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Make.md" data-label="Tailwind-Designed Websites Dev Make"><span class="dot"></span><span class="nav-text">Make</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/NextJs%20Starters%20&%20Boilerplates.md" data-label="Tailwind-Designed Websites Dev NextJs Starters & Boilerplates"><span class="dot"></span><span class="nav-text">NextJs Starters &amp; Boilerplates</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Open%20Source%20Software.md" data-label="Tailwind-Designed Websites Dev Open Source Software"><span class="dot"></span><span class="nav-text">Open Source Software</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Tailwind%20CSS.md" data-label="Tailwind-Designed Websites Dev Tailwind CSS"><span class="dot"></span><span class="nav-text">Tailwind CSS</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/UI%20Generator.md" data-label="Tailwind-Designed Websites Dev UI Generator"><span class="dot"></span><span class="nav-text">UI Generator</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="Tailwind-Designed Websites Marketing and Growth">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill amber">GRW</span>
                  <span class="nav-text">Marketing &amp; Growth</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/CountVisits.md" data-label="Tailwind-Designed Websites Marketing CountVisits"><span class="dot"></span><span class="nav-text">CountVisits</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Fast%20Search%20Engine%20Indexing.md" data-label="Tailwind-Designed Websites Marketing Fast Search Engine Indexing"><span class="dot"></span><span class="nav-text">Fast Search Engine Indexing</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/InboxBott.md" data-label="Tailwind-Designed Websites Marketing InboxBott"><span class="dot"></span><span class="nav-text">InboxBott</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/ListingBott.md" data-label="Tailwind-Designed Websites Marketing ListingBott"><span class="dot"></span><span class="nav-text">ListingBott</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Marketsy.ai.md" data-label="Tailwind-Designed Websites Marketing Marketsy.ai"><span class="dot"></span><span class="nav-text">Marketsy.ai</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Saas%20Emailer.md" data-label="Tailwind-Designed Websites Marketing Saas Emailer"><span class="dot"></span><span class="nav-text">Saas Emailer</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Secondly.md" data-label="Tailwind-Designed Websites Marketing Secondly"><span class="dot"></span><span class="nav-text">Secondly</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/SEObot.md" data-label="Tailwind-Designed Websites Marketing SEObot"><span class="dot"></span><span class="nav-text">SEObot</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/StartClaw.md" data-label="Tailwind-Designed Websites Marketing StartClaw"><span class="dot"></span><span class="nav-text">StartClaw</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Startups%20Tools.md" data-label="Tailwind-Designed Websites Marketing Startups Tools"><span class="dot"></span><span class="nav-text">Startups Tools</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/TinyAdz.md" data-label="Tailwind-Designed Websites Marketing TinyAdz"><span class="dot"></span><span class="nav-text">TinyAdz</span></a>
                </div>
              </div>

              <div class="nav-subgroup" data-label="Tailwind-Designed Websites Misc and Reference">
                <button class="nav-subgroup-head" type="button" data-toggle="subgroup">
                  <span class="mini-pill slate">MISC</span>
                  <span class="nav-text">Misc &amp; Reference</span>
                  <span class="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
                <div class="nav-subgroup-body">
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Butter.md" data-label="Tailwind-Designed Websites Misc Butter"><span class="dot"></span><span class="nav-text">Butter</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Filmgrail.md" data-label="Tailwind-Designed Websites Misc Filmgrail"><span class="dot"></span><span class="nav-text">Filmgrail</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Jack&Jill.md" data-label="Tailwind-Designed Websites Misc Jack&Jill"><span class="dot"></span><span class="nav-text">Jack&amp;Jill</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/John%20Rush.md" data-label="Tailwind-Designed Websites Misc John Rush"><span class="dot"></span><span class="nav-text">John Rush</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Kortix.md" data-label="Tailwind-Designed Websites Misc Kortix"><span class="dot"></span><span class="nav-text">Kortix</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Lorem.space.md" data-label="Tailwind-Designed Websites Misc Lorem.space"><span class="dot"></span><span class="nav-text">Lorem.space</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Mem0.md" data-label="Tailwind-Designed Websites Misc Mem0"><span class="dot"></span><span class="nav-text">Mem0</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/MyMeet.md" data-label="Tailwind-Designed Websites Misc MyMeet"><span class="dot"></span><span class="nav-text">MyMeet</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Naologic.md" data-label="Tailwind-Designed Websites Misc Naologic"><span class="dot"></span><span class="nav-text">Naologic</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Pally.md" data-label="Tailwind-Designed Websites Misc Pally"><span class="dot"></span><span class="nav-text">Pally</span></a>
                  <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/Sites/Qurrent.md" data-label="Tailwind-Designed Websites Misc Qurrent"><span class="dot"></span><span class="nav-text">Qurrent</span></a>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-group" data-label="Chats">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
                </svg>
              </span>
              <span class="nav-text">Chats</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>
            <div class="nav-group-body">
              <a class="nav-item sub" href="https://caufero.github.io/projects/_Misc/_/_Stuff.md" data-label="Chats Jump To Panel"><span class="dot"></span><span class="nav-text">Jump to Chats panel</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/_To%20Dos%20From%20Chats.md" data-label="Chats _To Dos From Chats"><span class="dot"></span><span class="nav-text">_To Dos From Chats</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/4K.md" data-label="Chats 4K"><span class="dot"></span><span class="nav-text">4K</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/AI.md" data-label="Chats AI"><span class="dot"></span><span class="nav-text">AI</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/APIs%20&%20Webhooks.md" data-label="Chats APIs & Webhooks"><span class="dot"></span><span class="nav-text">APIs &amp; Webhooks</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Caufero%20.md" data-label="Chats Caufero"><span class="dot"></span><span class="nav-text">Caufero</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Deployment.md" data-label="Chats Deployment"><span class="dot"></span><span class="nav-text">Deployment</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Design%20UI_UX.md" data-label="Chats Design UI_UX"><span class="dot"></span><span class="nav-text">Design UI_UX</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/DEV.md" data-label="Chats DEV"><span class="dot"></span><span class="nav-text">DEV</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Discussion.md" data-label="Chats Discussion"><span class="dot"></span><span class="nav-text">Discussion</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Files%20Shared.md" data-label="Chats Files Shared"><span class="dot"></span><span class="nav-text">Files Shared</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/General.md" data-label="Chats General"><span class="dot"></span><span class="nav-text">General</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Goodies%204U.md" data-label="Chats Goodies 4U"><span class="dot"></span><span class="nav-text">Goodies 4U</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Javascript%20in%20FileMaker.md" data-label="Chats Javascript in FileMaker"><span class="dot"></span><span class="nav-text">Javascript in FileMaker</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/JSON.md" data-label="Chats JSON"><span class="dot"></span><span class="nav-text">JSON</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/JS%20In%20FM.md" data-label="Chats JS In FM"><span class="dot"></span><span class="nav-text">JS In FM</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Mobile.md" data-label="Chats Mobile"><span class="dot"></span><span class="nav-text">Mobile</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Model%20Context%20Protocol%20(MCP).md" data-label="Chats Model Context Protocol (MCP)"><span class="dot"></span><span class="nav-text">Model Context Protocol (MCP)</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/ModularFM.md" data-label="Chats ModularFM"><span class="dot"></span><span class="nav-text">ModularFM</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/OData.md" data-label="Chats OData"><span class="dot"></span><span class="nav-text">OData</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/OTTO.md" data-label="Chats OTTO"><span class="dot"></span><span class="nav-text">OTTO</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Performance.md" data-label="Chats Performance"><span class="dot"></span><span class="nav-text">Performance</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Raycast.md" data-label="Chats Raycast"><span class="dot"></span><span class="nav-text">Raycast</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/ScriptsCalcs.md" data-label="Chats ScriptsCalcs"><span class="dot"></span><span class="nav-text">ScriptsCalcs</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Security%20Items.md" data-label="Chats Security Items"><span class="dot"></span><span class="nav-text">Security Items</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Server.md" data-label="Chats Server"><span class="dot"></span><span class="nav-text">Server</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/SQL.md" data-label="Chats SQL"><span class="dot"></span><span class="nav-text">SQL</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Team%20Meetings.md" data-label="Chats Team Meetings"><span class="dot"></span><span class="nav-text">Team Meetings</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/TipsTricksTraps.md" data-label="Chats TipsTricksTraps"><span class="dot"></span><span class="nav-text">TipsTricksTraps</span></a>
              <a class="nav-item sub" href="https://caufero.github.io/projects/Chats/Tools.md" data-label="Chats Tools"><span class="dot"></span><span class="nav-text">Tools</span></a>
            </div>
          </div>

          <div class="nav-group" data-label="Actions To Automate">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="M12 2a7 7 0 0 0-4 12c.6.5 1 1.2 1.1 2h5.8c.1-.8.5-1.5 1.1-2A7 7 0 0 0 12 2z"></path>
                </svg>
              </span>
              <span class="nav-text">Actions To Automate</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>
            <div class="nav-group-body">
              <a class="nav-item sub" href="#actions" data-label="Actions To Automate Jump To Panel"><span class="dot"></span><span class="nav-text">Jump to Actions panel</span></a>
            </div>
          </div>

          <div class="nav-group" data-label="YouTube">
            <button class="nav-group-head" type="button" data-toggle="group">
              <span class="nav-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 15l5-3-5-3z"></path>
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                </svg>
              </span>
              <span class="nav-text">YouTube</span>
              <span class="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="ico sm" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </span>
            </button>
            <div class="nav-group-body">
              <a class="nav-item sub" href="#youtube" data-label="YouTube Jump To Panel"><span class="dot"></span><span class="nav-text">Jump to YouTube panel</span></a>
              <a class="nav-item sub" href="#yt-ghana" data-label="YouTube Ghana Anchors"><span class="dot"></span><span class="nav-text">Open Ghana list</span></a>
              <a class="nav-item sub" href="#yt-sports" data-label="YouTube Sports Anchors"><span class="dot"></span><span class="nav-text">Open Sports list</span></a>
              <a class="nav-item sub" href="#yt-babies" data-label="YouTube Babies Anchors"><span class="dot"></span><span class="nav-text">Open Babies &amp; Animals list</span></a>
              <a class="nav-item sub" href="#yt-tea" data-label="YouTube Streamer Tea Anchors"><span class="dot"></span><span class="nav-text">Open Streamer Tea list</span></a>
              <a class="nav-item sub" href="#yt-politics" data-label="YouTube Politics Anchors"><span class="dot"></span><span class="nav-text">Open Politics list</span></a>
            </div>
          </div>
        </nav>

        <div class="rail-bottom">
          <div class="rail-foot">
            <span class="rail-foot-dot" aria-hidden="true"></span>
            <span>Fixed menu • scroll inside</span>
          </div>
        </div>
      </aside>

      <!-- ==================== MAIN CONTENT (SimpleQ) ==================== -->
      <main class="content" id="content" role="main">
        <div class="content-inner">

          <!-- HERO -->
          <section class="hero">
            <div class="hero-glow" aria-hidden="true"></div>
            <div class="hero-inner">
              <div class="hero-top">
                <div class="hero-title">SimpleQ (fmPUBSUB)</div>
                <div class="hero-sub">A separate FileMaker file (from Proof+Geist) that lets two or more FileMaker files talk by sending messages. Think of it like a post office: Sales writes the letter, SimpleQ routes it, Stock opens and acts on it.</div>
              </div>
              <div class="hero-actions">
                <a class="cta ghost" href="https://caufero.github.io/projects/_Misc/_/_Stuff.md#">
                  <span class="cta-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 10.5L12 3l9 7.5"></path>
                      <path d="M5 10v11h14V10"></path>
                    </svg>
                  </span>
                  Back to Home
                </a>
                <a class="cta" href="https://caufero.github.io/projects/ModularSolutions">
                  <span class="cta-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="ico" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h7v7H4z"></path>
                      <path d="M13 4h7v7h-7z"></path>
                      <path d="M4 13h7v7H4z"></path>
                      <path d="M13 13h7v7h-7z"></path>
                    </svg>
                  </span>
                  All Modular Solutions
                </a>
              </div>
              <div class="hero-meta">
                <span class="chip violet">Geist</span>
                <span class="chip teal">PubSub Pattern</span>
                <span class="chip amber">De-coupling</span>
                <span class="chip copper">Sales + Stock Example</span>
              </div>
            </div>
          </section>

          <!-- 1) WHAT SIMPLEQ IS -->
          <section class="card section" id="what-is-simpleq">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">📬</span>
                <span>What SimpleQ Is</span>
              </div>
            </div>
            <div class="prose">
              <p>If you have two FileMaker files, and they need to cooperate, you have two choices:</p>
              <div class="grid grid-2" style="margin-top:12px;">
                <div class="tile">
                  <div class="tile-top"><div class="badge rose">Option 1</div><div class="tile-title">Hard-wire</div></div>
                  <div class="tile-sub">You hard-wire them together and pray it stays maintainable.</div>
                </div>
                <div class="tile accent-teal">
                  <div class="tile-top"><div class="badge teal">Option 2</div><div class="tile-title">SimpleQ</div></div>
                  <div class="tile-sub">You put a smart "middleman" in between, and you stay in control.</div>
                </div>
              </div>
              <p style="margin-top:14px;">SimpleQ is option 2. Sales does not reach into Stock and poke tables. Sales drops a message into SimpleQ. SimpleQ delivers that message to Stock.</p>
            </div>
          </section>

          <!-- 2) PUBSUB CONCEPT -->
          <section class="card section" id="pubsub">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">📡</span>
                <span>Publish &amp; Subscribe (PubSub)</span>
              </div>
            </div>
            <div class="grid grid-2">
              <div class="pad">
                <div class="pad-top"><div class="badge violet">Publish</div><div class="pad-title">Send a Message</div></div>
                <div class="prose">
                  <p>Publishing means: <strong>"Put a message on a topic."</strong></p>
                  <p>Sales writes a message, tags it with a channel name, and drops it into SimpleQ.</p>
                </div>
              </div>
              <div class="pad">
                <div class="pad-top"><div class="badge teal">Subscribe</div><div class="pad-title">Listen &amp; React</div></div>
                <div class="prose">
                  <p>Subscribing means: <strong>"Listen for messages on a topic, and run a script when they arrive."</strong></p>
                  <p>Stock tells SimpleQ which channels it cares about, and what script to run when a message arrives.</p>
                </div>
              </div>
            </div>
            <div class="prose" style="margin-top:14px;">
              <p>PubSub is adult communication between FileMaker files. No tight coupling, no guesswork.</p>
            </div>
          </section>

          <!-- 3) CORE TERMS -->
          <section class="card section" id="core-terms">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">📖</span>
                <span>Core Terms, In Plain English</span>
              </div>
            </div>
            <div class="grid grid-3">
              <div class="pad">
                <div class="pad-top"><div class="badge">Channel</div><div class="pad-title">Topic Name</div></div>
                <div class="prose">
                  <p>A channel is like a radio station name. You broadcast on a station. Anyone tuned in hears it.</p>
                  <div class="code-block"><code>order_created</code><br><code>customer_updated</code><br><code>stock_low</code></div>
                </div>
              </div>
              <div class="pad">
                <div class="pad-top"><div class="badge amber">Subscriber</div><div class="pad-title">Listener</div></div>
                <div class="prose">
                  <p>A subscriber is a listener inside SimpleQ. It is a target FileMaker file, a script name inside that file, and a list of channels it listens to.</p>
                  <p>When Stock subscribes to <code class="inline-code">order_created</code>, it is saying: "Whenever <code class="inline-code">order_created</code> happens, run <code class="inline-code">SQ_OrderCreated</code> in Stock."</p>
                </div>
              </div>
              <div class="pad">
                <div class="pad-top"><div class="badge violet">Payload</div><div class="pad-title">Message Data</div></div>
                <div class="prose">
                  <p>A payload is the data inside the message. Most times, it is JSON text. Portable. Easy to parse. Clean.</p>
                  <div class="code-block"><code>{"orderID":"123","itemID":"A100","qty":5}</code></div>
                </div>
              </div>
            </div>
          </section>

          <!-- 4) SALES → STOCK EXAMPLE -->
          <section class="card section" id="sales-stock-flow">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">🔄</span>
                <span>The Flow: Sales → Stock</span>
              </div>
            </div>
            <div class="prose">
              <p>When an order is finalized in <strong>Sales.fmp12</strong>, you want <strong>Stock.fmp12</strong> to deduct inventory. Here is the flow:</p>
            </div>
            <div class="flow-steps">
              <div class="flow-step">
                <div class="flow-num">1</div>
                <div class="flow-body">
                  <div class="flow-label">Sales publishes</div>
                  <div class="flow-desc">Channel = <code class="inline-code">order_created</code>, payload = JSON with order details</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">2</div>
                <div class="flow-body">
                  <div class="flow-label">SimpleQ receives &amp; stores</div>
                  <div class="flow-desc">The message lands in SimpleQ's queue</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">3</div>
                <div class="flow-body">
                  <div class="flow-label">SimpleQ checks subscribers</div>
                  <div class="flow-desc">"Who subscribed to <code class="inline-code">order_created</code>?"</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">4</div>
                <div class="flow-body">
                  <div class="flow-label">SimpleQ calls Stock</div>
                  <div class="flow-desc">Runs the subscriber script, passes the payload</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">5</div>
                <div class="flow-body">
                  <div class="flow-label">Stock reacts</div>
                  <div class="flow-desc">Reads payload, deducts stock, logs movement</div>
                </div>
              </div>
            </div>
            <div class="prose" style="margin-top:14px;">
              <p>Sales does not need to know Stock's internal logic. Stock does not need to know Sales' internal logic. SimpleQ is the bridge.</p>
            </div>
          </section>

          <!-- 5) WHERE SIMPLEQ LIVES -->
          <section class="card section" id="where-it-lives">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">🗄️</span>
                <span>Where SimpleQ Lives</span>
              </div>
            </div>
            <div class="prose">
              <p>You do <strong>not</strong> install SimpleQ inside Sales. SimpleQ is its own FileMaker file, hosted alongside your other files.</p>
            </div>
            <div class="grid grid-3" style="margin-top:12px;">
              <div class="tile">
                <div class="tile-top"><div class="badge teal">File</div><div class="tile-title">SimpleQ.fmp12</div></div>
                <div class="tile-sub">The message router</div>
              </div>
              <div class="tile accent-amber">
                <div class="tile-top"><div class="badge amber">File</div><div class="tile-title">Sales.fmp12</div></div>
                <div class="tile-sub">Publishes messages</div>
              </div>
              <div class="tile accent-violet">
                <div class="tile-top"><div class="badge violet">File</div><div class="tile-title">Stock.fmp12</div></div>
                <div class="tile-sub">Subscribes &amp; reacts</div>
              </div>
            </div>
            <div class="prose" style="margin-top:12px;">
              <p>Same server. Same environment. Clean routing.</p>
            </div>
          </section>

          <!-- 6) IMPLEMENTATION STEPS -->
          <section class="card section" id="implementation">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">🛠️</span>
                <span>Implementation Steps</span>
                <span class="section-sub">(Do not skim this)</span>
              </div>
            </div>

            <div class="flow-steps">
              <div class="flow-step">
                <div class="flow-num">1</div>
                <div class="flow-body">
                  <div class="flow-label">Host the files</div>
                  <div class="flow-desc">Host SimpleQ, Sales, and Stock on FileMaker Server.</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">2</div>
                <div class="flow-body">
                  <div class="flow-label">Configure SimpleQ</div>
                  <div class="flow-desc">In SimpleQ, go to <strong>Configure</strong>. Set the server address (domain / FQDN). Use <strong>Verify URL</strong> to confirm SimpleQ can reach the server correctly.</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">3</div>
                <div class="flow-body">
                  <div class="flow-label">Create a Channel</div>
                  <div class="flow-desc">In SimpleQ, go to <strong>Channels</strong>, create: <code class="inline-code">order_created</code>. That is the station Sales will broadcast on.</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">4</div>
                <div class="flow-body">
                  <div class="flow-label">Create a Subscriber</div>
                  <div class="flow-desc">In SimpleQ, go to <strong>Subscribers</strong>. Subscriber Key: <code class="inline-code">STOCK</code>. Script name: <code class="inline-code">SQ_OrderCreated</code>. Enable the subscriber.</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">5</div>
                <div class="flow-body">
                  <div class="flow-label">Subscribe Stock to the Channel</div>
                  <div class="flow-desc">Inside that subscriber record, subscribe: <code class="inline-code">STOCK</code> → <code class="inline-code">order_created</code>. Now SimpleQ has a rule: "When a message hits <code class="inline-code">order_created</code>, run Stock's script."</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">6</div>
                <div class="flow-body">
                  <div class="flow-label">Create the receiving script in Stock</div>
                  <div class="flow-desc">In <strong>Stock.fmp12</strong>, create script <code class="inline-code">SQ_OrderCreated</code>. It should: Get Script Parameter (payload JSON) → Read <code class="inline-code">itemID</code>, <code class="inline-code">qty</code> → Deduct stock → Optionally log inventory movement.</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">7</div>
                <div class="flow-body">
                  <div class="flow-label">Publish from Sales</div>
                  <div class="flow-desc">In <strong>Sales.fmp12</strong>, when an order is finalized, call the SimpleQ script using <strong>Perform Script [External]</strong>. The publish script is: <code class="inline-code">publish message (channel, payload, runAfterTS )</code></div>
                </div>
              </div>
            </div>
          </section>

          <!-- 7) PUBLISH PARAMS -->
          <section class="card section" id="publish-params">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">📤</span>
                <span>Publish Script Parameters</span>
              </div>
            </div>
            <div class="prose">
              <p>The publish script expects 3 values, passed as 3 lines:</p>
            </div>
            <div class="grid grid-3" style="margin-top:12px;">
              <div class="pad">
                <div class="pad-top"><div class="badge">Line 1</div><div class="pad-title">channel</div></div>
                <div class="prose"><p>The topic name to broadcast on</p></div>
              </div>
              <div class="pad">
                <div class="pad-top"><div class="badge amber">Line 2</div><div class="pad-title">payload</div></div>
                <div class="prose"><p>JSON text with the message data</p></div>
              </div>
              <div class="pad">
                <div class="pad-top"><div class="badge violet">Line 3</div><div class="pad-title">runAfterTS</div></div>
                <div class="prose"><p>Timestamp, or blank for "run now"</p></div>
              </div>
            </div>
            <div class="code-block" style="margin-top:14px;">
              <div class="code-label">Example parameter</div>
              <code>order_created</code><br>
              <code>{"orderID":"123","itemID":"A100","qty":5}</code><br>
              <code class="code-muted">(blank line = process immediately)</code>
            </div>
          </section>

          <!-- 8) CONFIRM IT WORKS -->
          <section class="card section" id="confirm">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">✅</span>
                <span>How To Confirm It Is Working</span>
              </div>
            </div>
            <div class="prose">
              <p>You do not "guess" integration. You observe it. In SimpleQ you have:</p>
            </div>
            <div class="grid grid-4" style="margin-top:12px;">
              <div class="mini"><div class="mini-title">Queue</div></div>
              <div class="mini"><div class="mini-title">Messages</div></div>
              <div class="mini"><div class="mini-title">Subscribers</div></div>
              <div class="mini"><div class="mini-title">Channels</div></div>
            </div>
            <div class="flow-steps" style="margin-top:14px;">
              <div class="flow-step">
                <div class="flow-num">1</div>
                <div class="flow-body">
                  <div class="flow-label">Publish a test message from Sales</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">2</div>
                <div class="flow-body">
                  <div class="flow-label">Confirm it appears in SimpleQ Queue or Messages</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">3</div>
                <div class="flow-body">
                  <div class="flow-label">Confirm Stock script actually ran</div>
                  <div class="flow-desc">Write to a debug table, create a log record, or stamp a field with a timestamp</div>
                </div>
              </div>
            </div>
          </section>

          <!-- 9) DOES & DOES NOT -->
          <section class="card section" id="does-and-doesnt">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">⚖️</span>
                <span>What SimpleQ Does &amp; Does Not Do</span>
              </div>
            </div>
            <div class="grid grid-2">
              <div class="pad">
                <div class="pad-top"><div class="badge teal">DOES</div><div class="pad-title">SimpleQ handles</div></div>
                <ul class="ul">
                  <li>Store and deliver messages centrally</li>
                  <li>Let you define channels (topics)</li>
                  <li>Let you define subscribers (file + script)</li>
                  <li>Pass payloads into subscriber scripts</li>
                  <li>Reduce tight coupling between files</li>
                </ul>
              </div>
              <div class="pad">
                <div class="pad-top"><div class="badge rose">DOES NOT</div><div class="pad-title">Your job, not SimpleQ's</div></div>
                <ul class="ul">
                  <li>Auto-sync your tables for you</li>
                  <li>Decide your inventory logic</li>
                  <li>Replace your business rules</li>
                </ul>
                <div class="prose" style="margin-top:10px;"><p>SimpleQ is the messenger. Your scripts do the work.</p></div>
              </div>
            </div>
          </section>

          <!-- 10) WHY THIS PATTERN -->
          <section class="card section" id="why-useful">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">💡</span>
                <span>Why This Pattern Is Useful</span>
              </div>
            </div>
            <div class="grid grid-2">
              <div class="pad">
                <div class="pad-top"><div class="badge amber">Integration</div><div class="pad-title">One event, many listeners</div></div>
                <div class="prose">
                  <p>If you have many systems, PubSub shines: Website, Accounting, multiple FileMaker apps.</p>
                  <p>Example: <code class="inline-code">customer_updated</code> could be subscribed to by Sales, CRM, and Support. One publish, multiple reactions.</p>
                </div>
              </div>
              <div class="pad">
                <div class="pad-top"><div class="badge violet">De-coupling</div><div class="pad-title">Smaller, cleaner apps</div></div>
                <div class="prose">
                  <p>It reduces the need for heavy TO links and cross-file complexity.</p>
                  <p>You build smaller apps. They stay cleaner. They still coordinate.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- 11) CHEAT SHEET -->
          <section class="card section" id="cheat-sheet">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">📋</span>
                <span>Cheat Sheet</span>
              </div>
            </div>
            <div class="grid grid-3">
              <div class="tile">
                <div class="tile-top"><div class="badge">Channel</div></div>
                <div class="tile-sub">Topic name (<code class="inline-code">order_created</code>)</div>
              </div>
              <div class="tile accent-teal">
                <div class="tile-top"><div class="badge teal">Subscriber</div></div>
                <div class="tile-sub">File + script that runs on that topic</div>
              </div>
              <div class="tile accent-violet">
                <div class="tile-top"><div class="badge violet">Publish</div></div>
                <div class="tile-sub">Send a message to a channel</div>
              </div>
              <div class="tile accent-amber">
                <div class="tile-top"><div class="badge amber">Payload</div></div>
                <div class="tile-sub">Data sent (usually JSON)</div>
              </div>
              <div class="tile accent-copper">
                <div class="tile-top"><div class="badge copper">SimpleQ</div></div>
                <div class="tile-sub">The "post office" that routes the message</div>
              </div>
              <div class="tile">
                <div class="tile-top"><div class="badge slate">Summary</div></div>
                <div class="tile-sub">Sales publishes. SimpleQ delivers. Stock reacts.</div>
              </div>
            </div>
          </section>

          <!-- MINI DRILL -->
          <section class="card section" id="mini-drill">
            <div class="section-head">
              <div class="section-title">
                <span class="section-emoji" aria-hidden="true">🧠</span>
                <span>Mini Drill</span>
                <span class="section-sub">(Do this once, and you will "get it")</span>
              </div>
            </div>
            <div class="prose">
              <p>Imagine you click <strong>Finalize Order</strong> in Sales. Answer these questions fast:</p>
            </div>
            <div class="flow-steps" style="margin-top:12px;">
              <div class="flow-step">
                <div class="flow-num">Q1</div>
                <div class="flow-body">
                  <div class="flow-label">What channel do you publish to?</div>
                  <div class="flow-desc"><code class="inline-code">order_created</code></div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">Q2</div>
                <div class="flow-body">
                  <div class="flow-label">What is inside the payload?</div>
                  <div class="flow-desc">OrderID, ItemID, Qty in JSON</div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">Q3</div>
                <div class="flow-body">
                  <div class="flow-label">Who is subscribed?</div>
                  <div class="flow-desc"><code class="inline-code">STOCK</code></div>
                </div>
              </div>
              <div class="flow-step">
                <div class="flow-num">Q4</div>
                <div class="flow-body">
                  <div class="flow-label">What script runs in Stock?</div>
                  <div class="flow-desc"><code class="inline-code">SQ_OrderCreated</code></div>
                </div>
              </div>
            </div>
            <div class="prose" style="margin-top:14px;">
              <p>If you can answer those four, you understand SimpleQ.</p>
            </div>
          </section>

          <!-- FOOTER -->
          <footer class="footer">
            <div class="footer-left">
              <div class="footer-title">Caufero Workspace</div>
              <div class="footer-sub">Built like Tailwind. Stored like Markdown.</div>
            </div>
            <div class="footer-right">
              <a class="footer-link" href="../../Apps">Apps</a>
              <a class="footer-link" href="../../Chats">Chats</a>
              <a class="footer-link" href="../../ModularSolutions">Modular Solutions</a>
            </div>
          </footer>
        </div>
      </main>

      <!-- ==================== RIGHT PANEL (SimpleQ) ==================== -->
      <aside class="rail rail-right" id="railRight" aria-label="Right panel">
        <div class="rail-top">
          <div class="rail-title">SimpleQ Guide</div>
          <div class="rail-sub">Jump to any section</div>
          <div class="rail-actions">
            <a class="rail-btn" href="#what-is-simpleq">What Is It</a>
            <a class="rail-btn" href="#pubsub">PubSub</a>
            <a class="rail-btn" href="#implementation">Implement</a>
            <a class="rail-btn" href="#cheat-sheet">Cheat Sheet</a>
          </div>
        </div>

        <div class="rail-body">

          <!-- SCAN CUES -->
          <div class="panel-card">
            <div class="panel-head">
              <div class="panel-title">Scan cues</div>
              <div class="panel-sub">Quick anchors</div>
            </div>
            <div class="pill-row">
              <a class="pill2" href="#what-is-simpleq" style="text-decoration:none;color:inherit;">What Is It</a>
              <a class="pill2" href="#pubsub" style="text-decoration:none;color:inherit;">PubSub</a>
              <a class="pill2" href="#core-terms" style="text-decoration:none;color:inherit;">Core Terms</a>
              <a class="pill2" href="#sales-stock-flow" style="text-decoration:none;color:inherit;">Sales → Stock</a>
              <a class="pill2" href="#where-it-lives" style="text-decoration:none;color:inherit;">File Setup</a>
              <a class="pill2" href="#implementation" style="text-decoration:none;color:inherit;">Implement</a>
              <a class="pill2" href="#publish-params" style="text-decoration:none;color:inherit;">Params</a>
              <a class="pill2" href="#confirm" style="text-decoration:none;color:inherit;">Confirm</a>
              <a class="pill2" href="#does-and-doesnt" style="text-decoration:none;color:inherit;">Does / Doesn't</a>
              <a class="pill2" href="#why-useful" style="text-decoration:none;color:inherit;">Why Useful</a>
              <a class="pill2" href="#cheat-sheet" style="text-decoration:none;color:inherit;">Cheat Sheet</a>
              <a class="pill2" href="#mini-drill" style="text-decoration:none;color:inherit;">Mini Drill</a>
            </div>
          </div>

          <!-- POST OFFICE ANALOGY -->
          <div class="panel-card">
            <div class="panel-head">
              <div class="panel-title">📬 Post Office Analogy</div>
              <div class="panel-sub">The core mental model</div>
            </div>
            <div class="stack">
              <div class="stack-item">Sales writes the letter</div>
              <div class="stack-item">SimpleQ routes the letter</div>
              <div class="stack-item">Stock opens the letter and takes action</div>
            </div>
          </div>

          <!-- FILES ON SERVER -->
          <div class="panel-card">
            <div class="panel-head">
              <div class="panel-title">🗄️ Files on Server</div>
              <div class="panel-sub">Same server, same environment</div>
            </div>
            <div class="side-grid">
              <div class="side-pill">SimpleQ.fmp12</div>
              <div class="side-pill warn">Sales.fmp12</div>
              <div class="side-pill">Stock.fmp12</div>
            </div>
          </div>

          <!-- KEY SCRIPT -->
          <div class="panel-card">
            <div class="panel-head">
              <div class="panel-title">⚡ Key Script Call</div>
              <div class="panel-sub">From Sales to SimpleQ</div>
            </div>
            <div class="stack">
              <div class="stack-item"><code class="inline-code" style="font-size:12px;">publish message (channel, payload, runAfterTS )</code><div class="stack-sub">Called via Perform Script [External]</div></div>
            </div>
          </div>

          <!-- DOES / DOESN'T QUICK REF -->
          <div class="panel-card">
            <div class="panel-head">
              <div class="panel-title">⚖️ Quick Reference</div>
              <div class="panel-sub">SimpleQ boundaries</div>
            </div>
            <div class="stack">
              <div class="stack-item" style="border-color:rgba(20,122,116,.22);background:rgba(20,122,116,.06);">✓ Store &amp; deliver messages</div>
              <div class="stack-item" style="border-color:rgba(20,122,116,.22);background:rgba(20,122,116,.06);">✓ Define channels &amp; subscribers</div>
              <div class="stack-item" style="border-color:rgba(20,122,116,.22);background:rgba(20,122,116,.06);">✓ Pass payloads to scripts</div>
              <div class="stack-item" style="border-color:rgba(180,35,58,.22);background:rgba(180,35,58,.06);">✗ Auto-sync tables</div>
              <div class="stack-item" style="border-color:rgba(180,35,58,.22);background:rgba(180,35,58,.06);">✗ Decide business logic</div>
            </div>
          </div>

          <!-- INTEGRATION POWER -->
          <div class="panel-card">
            <div class="panel-head">
              <div class="panel-title">🌐 Integration Power</div>
              <div class="panel-sub">One publish, many reactions</div>
            </div>
            <div class="side-grid">
              <div class="side-pill">Sales</div>
              <div class="side-pill">CRM</div>
              <div class="side-pill">Support</div>
              <div class="side-pill warn">Website</div>
              <div class="side-pill">Accounting</div>
              <div class="side-pill warn">Other FM Apps</div>
            </div>
          </div>

        </div>

        <div class="rail-bottom">
          <div class="rail-foot">
            <span class="rail-foot-dot right" aria-hidden="true"></span>
            <span>Right panel • scroll inside</span>
          </div>
        </div>
      </aside>
    </div>
  </div>

  <script>
    (function(){
      var root = document.querySelector(".page");
      var btnTheme = document.getElementById("btnTheme");
      var btnMenu = document.getElementById("btnMenu");
      var railLeft = document.getElementById("railLeft");
      var railRight = document.getElementById("railRight");
      var navSearch = document.getElementById("navSearch");
      var navClear = document.getElementById("navClear");
      var navTree = document.getElementById("navTree");

      function setTheme(mode){
        if (!root) return;
        root.setAttribute("data-theme", mode);
        try{ localStorage.setItem("cwf_theme", mode); } catch(e){}
      }
      function getTheme(){
        try{ return localStorage.getItem("cwf_theme") || "auto"; } catch(e){ return "auto"; }
      }
      function toggleTheme(){
        var cur = root.getAttribute("data-theme") || "auto";
        if (cur === "auto") return setTheme("dark");
        if (cur === "dark") return setTheme("light");
        return setTheme("auto");
      }
      function toggleLeftRail(){
        if (!railLeft) return;
        railLeft.classList.toggle("open");
      }
      function closest(el, sel){
        while(el && el !== document.documentElement){
          if (el.matches && el.matches(sel)) return el;
          el = el.parentNode;
        }
        return null;
      }
      function setOpen(panelEl, open){
        if (!panelEl) return;
        if (open) panelEl.classList.add("open");
        else panelEl.classList.remove("open");
      }
function filterNav(q){
  if (!navTree) return;
  var query = (q || "").trim().toLowerCase();
  var items = navTree.querySelectorAll("[data-label]");
  for (var i=0;i<items.length;i++){
    var el = items[i];
    var label = (el.getAttribute("data-label") || "").toLowerCase();
    var hit = !query || label.indexOf(query) !== -1;
    el.classList.toggle("is-hit", hit);
    el.classList.toggle("is-hidden", !!query && !hit);  // ← CHANGED: is-dim → is-hidden
  }
  var groups = navTree.querySelectorAll(".nav-group, .nav-subgroup");
  for (var g=0; g<groups.length; g++){
    var group = groups[g];
    var all = group.querySelectorAll("[data-label]");
    var anyHit = false;
    for (var j=0;j<all.length;j++){
      if (all[j].classList.contains("is-hit")) { anyHit = true; break; }
    }
    group.classList.toggle("is-hidden", !!query && !anyHit);  // ← CHANGED: is-dim → is-hidden
    if (query && anyHit){
      group.classList.add("forced-open");
    } else {
      group.classList.remove("forced-open");
    }
  }
}
      function wireDisclosure(){
        document.addEventListener("click", function(e){
          var head = closest(e.target, "[data-toggle='group'], [data-toggle='subgroup']");
          if (!head) return;
          var wrap = head.parentNode;
          if (!wrap) return;
          wrap.classList.toggle("open");
        });
      }
      function highlightKeywords(){
        var main = document.querySelector(".content-inner");
        if (!main) return;
        var keywords = ["SimpleQ","PubSub","Publish","Subscribe","Channel","Subscriber","Payload","Sales","Stock","FileMaker"];
        var skipSel = "a,pre,code,script,style,input,textarea,button,.code-block,.inline-code";
        function walk(node){
          if (!node || node.nodeType !== 1) return;
          if (node.matches(skipSel)) return;
          var children = Array.prototype.slice.call(node.childNodes);
          for (var i=0;i<children.length;i++){
            var c = children[i];
            if (c.nodeType === 3){
              var text = c.nodeValue;
              if (!text || !text.trim()) continue;
              var replaced = text;
              var changed = false;
              for (var k=0;k<keywords.length;k++){
                var kw = keywords[k];
                var re = new RegExp("\\b" + kw.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + "\\b","g");
                if (re.test(replaced)){
                  replaced = replaced.replace(re, function(m){ return "%%KW_START%%" + m + "%%KW_END%%"; });
                  changed = true;
                }
              }
              if (changed){
                var span = document.createElement("span");
                span.innerHTML = replaced.replace(/%%KW_START%%/g,'<mark class="kw">').replace(/%%KW_END%%/g,"</mark>");
                c.parentNode.replaceChild(span, c);
              }
            } else if (c.nodeType === 1){
              walk(c);
            }
          }
        }
        walk(main);
      }
      function closeMobileRailsOnOutsideClick(e){
        var isMobile = window.matchMedia("(max-width: 980px)").matches;
        if (!isMobile) return;
        if (!railLeft || !railRight) return;
        var t = e.target;
        var insideLeft = !!closest(t, "#railLeft");
        var insideRight = !!closest(t, "#railRight");
        var insideBtn = !!closest(t, "#btnMenu");
        if (!insideLeft && !insideRight && !insideBtn){
          setOpen(railLeft, false);
          setOpen(railRight, false);
        }
      }
      function init(){
        setTheme(getTheme());
        wireDisclosure();
        highlightKeywords();
        if (btnTheme) btnTheme.addEventListener("click", toggleTheme);
        if (btnMenu) btnMenu.addEventListener("click", function(){
          var isMobile = window.matchMedia("(max-width: 980px)").matches;
          if (isMobile){
            toggleLeftRail();
          } else {
            document.body.classList.toggle("compact-rails");
          }
        });
        if (navClear) navClear.addEventListener("click", function(){
          if (!navSearch) return;
          navSearch.value = "";
          filterNav("");
          navSearch.focus();
        });
        if (navSearch) navSearch.addEventListener("input", function(){
          filterNav(navSearch.value || "");
        });
        document.addEventListener("click", closeMobileRailsOnOutsideClick, true);
        filterNav("");
        var activeNav = navTree && navTree.querySelector(".nav-item.active");
        if (activeNav) {
          setTimeout(function(){
            var railBody = activeNav.closest(".rail-body");
            if (railBody) {
              var railRect = railBody.getBoundingClientRect();
              var itemRect = activeNav.getBoundingClientRect();
              var offset = itemRect.top - railRect.top - (railBody.clientHeight / 2) + (activeNav.offsetHeight / 2);
              railBody.scrollTop += offset;
            }
          }, 120);
        }
      }
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
      else init();
    })();
  </script>

  <style>
    :root{
      --slate-950:#0b1220;
      --slate-900:#0f172a;
      --slate-800:#1f2937;
      --slate-700:#334155;
      --slate-600:#475569;
      --slate-500:#64748b;
      --slate-400:#94a3b8;
      --slate-300:#cbd5e1;
      --slate-200:#e2e8f0;
      --slate-100:#f1f5f9;
      --slate-50:#f8fafc;

      --caufero-900:#0b2a36;
      --caufero-800:#0e3344;
      --caufero-700:#124458;

      --teal-700:#0f5e5b;
      --teal-600:#147a74;
      --teal-500:#1a9a93;

      --sky-600:#2c97b9;
      --sky-500:#41c5e0;

      --violet-600:#5b49c8;
      --amber-600:#b7791f;
      --copper-600:#d8743d;
      --rose-700:#b4233a;
      --danger:#d5432e;

      --bg:var(--slate-50);
      --surface:rgba(255,255,255,.88);
      --surface2:rgba(255,255,255,.78);
      --elev:rgba(255,255,255,.70);

      --line:rgba(15,23,42,.10);
      --line2:rgba(15,23,42,.16);

      --shadow-1:0 1px 0 rgba(15,23,42,.06),0 10px 22px rgba(15,23,42,.06);
      --shadow-2:0 2px 0 rgba(15,23,42,.08),0 18px 36px rgba(15,23,42,.10);

      --r-xs:8px;
      --r-sm:10px;
      --r-md:12px;
      --r-lg:14px;
      --r-xl:18px;

      --topbarH:56px;
      --railW:288px;
      --railWCompact:228px;
      --contentMax:1200px;

      --focus:rgba(14,51,68,.22);
      --focus2:rgba(216,116,61,.22);
    }

    *{box-sizing:border-box;}
    html,body{height:100%;}
    body{
      margin:0;
      font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji";
      background:var(--bg);
      color:var(--slate-900);
      line-height:1.45;
      overflow-x:hidden;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }
    a{color:var(--caufero-800);text-decoration:none;}
    a:hover{text-decoration:underline;}
    img{max-width:100%;}

    .page{min-height:100vh;position:relative;}
    .bg{
      position:fixed;
      inset:0;
      z-index:-1;
      background:
        radial-gradient(900px 480px at 12% -10%, rgba(14,51,68,.14), transparent 58%),
        radial-gradient(860px 520px at 100% 10%, rgba(216,116,61,.12), transparent 58%),
        radial-gradient(900px 520px at 60% 110%, rgba(95,164,161,.10), transparent 60%),
        var(--bg);
    }

    .page[data-theme="dark"]{
      --bg:#070a12;
      --surface:rgba(10,14,26,.82);
      --surface2:rgba(10,14,26,.68);
      --elev:rgba(10,14,26,.60);
      --line:rgba(148,163,184,.14);
      --line2:rgba(148,163,184,.22);
      color:var(--slate-100);
    }
    .page[data-theme="dark"] a{color:#a7d7e3;}
    .page[data-theme="dark"] .bg{
      background:
        radial-gradient(900px 480px at 12% -10%, rgba(65,197,224,.14), transparent 60%),
        radial-gradient(860px 520px at 100% 10%, rgba(216,116,61,.10), transparent 60%),
        radial-gradient(900px 520px at 60% 110%, rgba(95,164,161,.10), transparent 62%),
        var(--bg);
    }

    .topbar{
      position:fixed;
      top:0;left:0;right:0;
      height:var(--topbarH);
      z-index:50;
      border-bottom:1px solid var(--line);
      backdrop-filter:saturate(140%) blur(10px);
      background:linear-gradient(to bottom, rgba(248,250,252,.82), rgba(248,250,252,.62));
    }
    .page[data-theme="dark"] .topbar{
      background:linear-gradient(to bottom, rgba(10,14,26,.84), rgba(10,14,26,.62));
    }
    .topbar-inner{
      height:100%;
      display:grid;
      grid-template-columns:1fr auto 1fr;
      align-items:center;
      gap:12px;
      padding:0 14px;
      max-width:calc(var(--contentMax) + (var(--railW) * 2) + 72px);
      margin:0 auto;
    }

    .brand{
      display:flex;
      align-items:center;
      gap:10px;
      min-width:0;
      text-decoration:none;
    }
    .brand:hover{text-decoration:none;}
    .brand-mark{
      width:34px;height:34px;
      border-radius:10px;
      display:grid;
      place-items:center;
      font-weight:800;
      letter-spacing:.2px;
      color:#fff;
      background:linear-gradient(135deg, var(--caufero-800), var(--teal-600));
      box-shadow:0 6px 16px rgba(14,51,68,.18);
      flex:0 0 auto;
    }
    .brand-text{min-width:0;}
    .brand-name{
      font-weight:750;
      font-size:14px;
      color:inherit;
      line-height:1.1;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .brand-sub{
      font-size:12px;
      color:var(--slate-600);
      margin-top:2px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .page[data-theme="dark"] .brand-sub{color:rgba(241,245,249,.68);}

    .topbar-left,.topbar-center,.topbar-right{display:flex;align-items:center;}
    .topbar-left{justify-content:flex-start;min-width:0;}
    .topbar-center{justify-content:center;}
    .topbar-right{justify-content:flex-end;gap:8px;}

    .page-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      border:1px solid var(--line);
      background:var(--surface2);
      padding:7px 10px;
      border-radius:999px;
      box-shadow:0 1px 0 rgba(15,23,42,.04);
    }
    .page-chip-dot{
      width:8px;height:8px;border-radius:999px;
      background:linear-gradient(180deg, var(--copper-600), var(--teal-600));
      box-shadow:0 0 0 3px rgba(216,116,61,.12);
    }
    .page-chip-text{font-size:12px;font-weight:650;letter-spacing:.1px;}

    .icon-btn{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:8px 10px;
      border-radius:12px;
      border:1px solid var(--line);
      background:var(--surface);
      color:inherit;
      box-shadow:0 1px 0 rgba(15,23,42,.04);
      cursor:pointer;
      user-select:none;
    }
    .icon-btn:hover{
      text-decoration:none;
      box-shadow:var(--shadow-1);
      transform:translateY(-1px);
      transition:transform .12s ease, box-shadow .12s ease;
    }
    .icon-btn:active{transform:translateY(0px);}
    .icon-btn.ghost{
      background:transparent;
      border:1px solid var(--line);
    }
    .icon-btn.brand{
      border-color:rgba(14,51,68,.22);
      background:linear-gradient(180deg, rgba(14,51,68,.10), rgba(14,51,68,.06));
    }
    .icon-btn-text{font-size:12px;font-weight:650;}
    .ico{width:18px;height:18px;display:block;}
    .ico.sm{width:16px;height:16px;}

    .shell{
      padding-top:var(--topbarH);
      display:grid;
      grid-template-columns:var(--railW) 1fr var(--railW);
      min-height:100vh;
      gap:14px;
      max-width:calc(var(--contentMax) + (var(--railW) * 2) + 72px);
      margin:0 auto;
      padding-left:14px;
      padding-right:14px;
    }
    body.compact-rails .shell{grid-template-columns:var(--railWCompact) 1fr var(--railWCompact);}
    body.compact-rails .rail{width:var(--railWCompact);}
    body.compact-rails .nav-text{font-size:12px;}
    body.compact-rails .rail-title{font-size:12px;}
    body.compact-rails .rail-sub{font-size:11px;}

    .rail{
      position:sticky;
      top:calc(var(--topbarH) + 14px);
      height:calc(100vh - var(--topbarH) - 28px);
      border:1px solid var(--line);
      background:var(--surface);
      border-radius:var(--r-xl);
      box-shadow:var(--shadow-1);
      overflow:hidden;
      display:flex;
      flex-direction:column;
    }
    .rail-top{
      padding:14px 14px 12px 14px;
      border-bottom:1px solid var(--line);
      background:linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,0));
    }
    .page[data-theme="dark"] .rail-top{
      background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0));
    }
    .rail-title{font-size:12px;font-weight:750;letter-spacing:.12px;}
    .rail-sub{font-size:12px;color:var(--slate-600);margin-top:2px;}
    .page[data-theme="dark"] .rail-sub{color:rgba(241,245,249,.70);}

    .rail-search{
      margin-top:10px;
      display:flex;
      align-items:center;
      gap:8px;
      border:1px solid var(--line);
      background:var(--surface2);
      border-radius:12px;
      padding:8px 10px;
    }
    .rail-search input{
      width:100%;
      border:0;
      outline:none;
      background:transparent;
      color:inherit;
      font-size:12px;
    }
    .xbtn{
      border:0;
      background:transparent;
      color:inherit;
      padding:4px;
      border-radius:10px;
      cursor:pointer;
      opacity:.75;
    }
    .xbtn:hover{opacity:1;background:rgba(15,23,42,.06);}
    .page[data-theme="dark"] .xbtn:hover{background:rgba(241,245,249,.08);}

    .rail-hint{
      margin-top:10px;
      font-size:11px;
      color:var(--slate-500);
    }
    .page[data-theme="dark"] .rail-hint{color:rgba(241,245,249,.58);}

    .rail-body{
      padding:10px;
      overflow:auto;
      overscroll-behavior:contain;
    }

    .nav-item,
    .nav-group-head,
    .nav-subgroup-head{
      width:100%;
      display:flex;
      align-items:center;
      gap:10px;
      padding:9px 10px;
      border-radius:12px;
      border:1px solid transparent;
      color:inherit;
      background:transparent;
      cursor:pointer;
      user-select:none;
      text-align:left;
    }
    .nav-item:hover,
    .nav-group-head:hover,
    .nav-subgroup-head:hover{
      background:rgba(15,23,42,.04);
      border-color:rgba(15,23,42,.06);
      text-decoration:none;
    }
    .page[data-theme="dark"] .nav-item:hover,
    .page[data-theme="dark"] .nav-group-head:hover,
    .page[data-theme="dark"] .nav-subgroup-head:hover{
      background:rgba(241,245,249,.06);
      border-color:rgba(241,245,249,.08);
    }

    .nav-item.active{
      background:linear-gradient(180deg, rgba(14,51,68,.10), rgba(14,51,68,.06));
      border-color:rgba(14,51,68,.20);
    }
    .page[data-theme="dark"] .nav-item.active{
      background:linear-gradient(180deg, rgba(65,197,224,.10), rgba(65,197,224,.06));
      border-color:rgba(65,197,224,.22);
    }

    .nav-item.sub{padding-left:34px;}
    .nav-item.sub .dot{
      width:6px;height:6px;border-radius:999px;
      background:rgba(100,116,139,.55);
      flex:0 0 auto;
    }
    .nav-item.sub.danger .dot{background:rgba(213,67,46,.70);}
    .nav-item.sub.muted{opacity:.65;cursor:default;}

    .nav-ico{display:inline-flex;align-items:center;justify-content:center;color:inherit;opacity:.9;}
    .nav-text{
      flex:1 1 auto;
      font-size:12.5px;
      font-weight:650;
      letter-spacing:.05px;
      min-width:0;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .chev{
      opacity:.65;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      flex:0 0 auto;
      transition:transform .14s ease;
    }

    .nav-group,.nav-subgroup{margin-top:6px;}
    .nav-group-body,
    .nav-subgroup-body{
      padding-left:6px;
      margin-top:6px;
      display:none;
    }
    .nav-group.open > .nav-group-body{display:block;}
    .nav-subgroup.open > .nav-subgroup-body{display:block;}
    .nav-group.open > .nav-group-head .chev,
    .nav-subgroup.open > .nav-subgroup-head .chev{transform:rotate(90deg);}

    .nav-subgroup-head{
      padding-left:12px;
      gap:10px;
    }
    .nav-subgroup-head.inner{padding-left:22px;}

    .mini-pill{
      font-size:10px;
      font-weight:800;
      letter-spacing:.3px;
      padding:3px 7px;
      border-radius:999px;
      border:1px solid var(--line);
      background:rgba(15,23,42,.02);
      color:var(--slate-700);
      flex:0 0 auto;
    }
    .page[data-theme="dark"] .mini-pill{
      background:rgba(241,245,249,.06);
      color:rgba(241,245,249,.78);
    }
    .mini-pill.teal{border-color:rgba(20,122,116,.25);background:rgba(20,122,116,.10);color:var(--teal-700);}
    .mini-pill.violet{border-color:rgba(91,73,200,.22);background:rgba(91,73,200,.10);color:var(--violet-600);}
    .mini-pill.amber{border-color:rgba(183,121,31,.22);background:rgba(183,121,31,.10);color:var(--amber-600);}
    .mini-pill.slate{border-color:rgba(71,85,105,.22);background:rgba(71,85,105,.08);color:var(--slate-700);}
    .mini-pill.rose{border-color:rgba(180,35,58,.22);background:rgba(180,35,58,.10);color:var(--rose-700);}

    .is-dim{opacity:.35;filter:saturate(.9);}
    .is-hidden{display: none !important;}
    .forced-open > .nav-group-body,
    .forced-open > .nav-subgroup-body{display:block;}

    .rail-bottom{
      padding:10px 12px;
      border-top:1px solid var(--line);
      background:linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,.62));
    }
    .page[data-theme="dark"] .rail-bottom{
      background:linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,.06));
    }
    .rail-foot{
      display:flex;
      align-items:center;
      gap:10px;
      color:var(--slate-600);
      font-size:11px;
      justify-content:center;
    }
    .page[data-theme="dark"] .rail-foot{color:rgba(241,245,249,.64);}
    .rail-foot-dot{
      width:8px;height:8px;border-radius:999px;
      background:rgba(14,51,68,.55);
      box-shadow:0 0 0 3px rgba(14,51,68,.10);
    }
    .rail-foot-dot.right{
      background:rgba(216,116,61,.70);
      box-shadow:0 0 0 3px rgba(216,116,61,.10);
    }

    .content{
      min-width:0;
      padding:14px 0 22px 0;
    }
    .content-inner{
      max-width:var(--contentMax);
      margin:0 auto;
      display:flex;
      flex-direction:column;
      gap:14px;
    }

    .hero{
      border:1px solid var(--line);
      background:linear-gradient(180deg, rgba(255,255,255,.86), rgba(255,255,255,.70));
      border-radius:var(--r-xl);
      box-shadow:var(--shadow-2);
      position:relative;
      overflow:hidden;
    }
    .page[data-theme="dark"] .hero{
      background:linear-gradient(180deg, rgba(10,14,26,.88), rgba(10,14,26,.66));
    }
    .hero-glow{
      position:absolute;
      inset:-80px -120px auto -120px;
      height:220px;
      background:radial-gradient(closest-side, rgba(65,197,224,.20), transparent 68%);
      opacity:.9;
      pointer-events:none;
    }
    .hero-inner{padding:18px 18px 16px 18px;position:relative;}
    .hero-top{display:flex;flex-direction:column;gap:6px;}
    .hero-title{
      font-size:18px;
      font-weight:850;
      letter-spacing:.2px;
    }
    .hero-sub{
      font-size:13px;
      color:var(--slate-600);
      max-width:100ch;
    }
    .page[data-theme="dark"] .hero-sub{color:rgba(241,245,249,.68);}

    .hero-actions{
      margin-top:14px;
      display:flex;
      flex-wrap:wrap;
      gap:10px;
    }

    .cta{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:10px 12px;
      border-radius:14px;
      border:1px solid rgba(14,51,68,.18);
      background:linear-gradient(180deg, rgba(14,51,68,.12), rgba(14,51,68,.06));
      color:inherit;
      font-weight:750;
      font-size:12.5px;
      box-shadow:0 1px 0 rgba(15,23,42,.04);
    }
    .cta:hover{
      text-decoration:none;
      box-shadow:var(--shadow-1);
      transform:translateY(-1px);
      transition:transform .12s ease, box-shadow .12s ease;
    }
    .cta:active{transform:translateY(0px);}
    .cta.ghost{
      border-color:var(--line);
      background:var(--surface);
    }
    .cta-ico{display:inline-flex;align-items:center;justify-content:center;}

    .hero-meta{
      margin-top:14px;
      display:flex;
      flex-wrap:wrap;
      gap:8px;
    }

    .chip{
      display:inline-flex;
      align-items:center;
      padding:6px 10px;
      border-radius:999px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.55);
      font-size:11px;
      font-weight:750;
      color:var(--slate-700);
    }
    .page[data-theme="dark"] .chip{
      background:rgba(255,255,255,.06);
      color:rgba(241,245,249,.78);
    }
    .chip.teal{border-color:rgba(20,122,116,.22);background:rgba(20,122,116,.10);color:var(--teal-700);}
    .chip.amber{border-color:rgba(183,121,31,.22);background:rgba(183,121,31,.10);color:var(--amber-600);}
    .chip.copper{border-color:rgba(216,116,61,.22);background:rgba(216,116,61,.10);color:var(--copper-600);}
    .chip.violet{border-color:rgba(91,73,200,.22);background:rgba(91,73,200,.10);color:var(--violet-600);}

    .card{
      border:1px solid var(--line);
      background:var(--surface);
      border-radius:var(--r-xl);
      box-shadow:var(--shadow-1);
    }
    .section{padding:16px;}
    .section-head{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      margin-bottom:12px;
    }
    .section-title{
      display:flex;
      align-items:center;
      gap:10px;
      font-weight:850;
      letter-spacing:.12px;
      font-size:14px;
      min-width:0;
    }
    .section-title a{color:inherit;text-decoration:none;}
    .section-title a:hover{text-decoration:underline;}
    .section-icon{width:22px;height:22px;display:block;opacity:.95;}
    .section-emoji{font-size:18px;}
    .section-sub{font-size:12px;color:var(--slate-600);font-weight:650;}
    .page[data-theme="dark"] .section-sub{color:rgba(241,245,249,.68);}

    .section-actions{display:flex;gap:8px;flex-wrap:wrap;}
    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      padding:9px 12px;
      border-radius:12px;
      border:1px solid var(--line);
      background:var(--surface2);
      font-size:12px;
      font-weight:750;
      color:inherit;
      text-decoration:none;
    }
    .btn:hover{text-decoration:none;box-shadow:var(--shadow-1);transform:translateY(-1px);transition:transform .12s ease, box-shadow .12s ease;}
    .btn:active{transform:translateY(0px);}
    .btn.ghost{background:transparent;}
    .btn.primary{
      border-color:rgba(14,51,68,.22);
      background:linear-gradient(180deg, rgba(14,51,68,.16), rgba(14,51,68,.08));
    }

    .grid{display:grid;gap:12px;}
    .grid-2{grid-template-columns:repeat(2, minmax(0, 1fr));}
    .grid-3{grid-template-columns:repeat(3, minmax(0, 1fr));}
    .grid-4{grid-template-columns:repeat(4, minmax(0, 1fr));}

    .tile{
      display:block;
      border:1px solid var(--line);
      background:linear-gradient(180deg, rgba(255,255,255,.80), rgba(255,255,255,.58));
      border-radius:16px;
      padding:14px;
      box-shadow:0 1px 0 rgba(15,23,42,.04);
      text-decoration:none;
      color:inherit;
      position:relative;
      overflow:hidden;
    }
    .page[data-theme="dark"] .tile{
      background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.04));
    }
    .tile:hover{
      text-decoration:none;
      box-shadow:var(--shadow-2);
      transform:translateY(-1px);
      transition:transform .12s ease, box-shadow .12s ease;
    }
    .tile:active{transform:translateY(0px);}
    .tile-top{display:flex;align-items:center;justify-content:space-between;gap:10px;}
    .tile-title{font-size:13px;font-weight:900;letter-spacing:.2px;}
    .tile-sub{margin-top:8px;font-size:12px;color:var(--slate-600);}
    .page[data-theme="dark"] .tile-sub{color:rgba(241,245,249,.66);}

    .tile::after{
      content:"";
      position:absolute;
      inset:auto -40px -60px auto;
      width:180px;
      height:180px;
      border-radius:999px;
      background:radial-gradient(closest-side, rgba(14,51,68,.10), transparent 70%);
      transform:rotate(18deg);
      pointer-events:none;
    }
    .tile.accent-teal::after{background:radial-gradient(closest-side, rgba(20,122,116,.14), transparent 70%);}
    .tile.accent-violet::after{background:radial-gradient(closest-side, rgba(91,73,200,.12), transparent 70%);}
    .tile.accent-amber::after{background:radial-gradient(closest-side, rgba(183,121,31,.12), transparent 70%);}
    .tile.accent-sky::after{background:radial-gradient(closest-side, rgba(65,197,224,.14), transparent 70%);}
    .tile.accent-copper::after{background:radial-gradient(closest-side, rgba(216,116,61,.14), transparent 70%);}

    .badge{
      font-size:10px;
      font-weight:900;
      letter-spacing:.35px;
      text-transform:uppercase;
      padding:4px 8px;
      border-radius:999px;
      border:1px solid rgba(14,51,68,.20);
      background:rgba(14,51,68,.08);
      color:var(--caufero-800);
      flex:0 0 auto;
    }
    .page[data-theme="dark"] .badge{
      border-color:rgba(241,245,249,.16);
      background:rgba(241,245,249,.06);
      color:rgba(241,245,249,.84);
    }
    .badge.teal{border-color:rgba(20,122,116,.25);background:rgba(20,122,116,.10);color:var(--teal-700);}
    .badge.violet{border-color:rgba(91,73,200,.22);background:rgba(91,73,200,.10);color:var(--violet-600);}
    .badge.amber{border-color:rgba(183,121,31,.22);background:rgba(183,121,31,.10);color:var(--amber-600);}
    .badge.sky{border-color:rgba(65,197,224,.22);background:rgba(65,197,224,.10);color:var(--sky-600);}
    .badge.rose{border-color:rgba(180,35,58,.22);background:rgba(180,35,58,.10);color:var(--rose-700);}
    .badge.copper{border-color:rgba(216,116,61,.24);background:rgba(216,116,61,.10);color:var(--copper-600);}
    .badge.slate{border-color:rgba(71,85,105,.22);background:rgba(71,85,105,.08);color:var(--slate-700);}

    .pad{
      border:1px solid var(--line);
      background:linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.60));
      border-radius:16px;
      padding:14px;
      box-shadow:0 1px 0 rgba(15,23,42,.04);
    }
    .page[data-theme="dark"] .pad{
      background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.04));
    }
    .pad-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px;}
    .pad-title{font-size:13px;font-weight:900;letter-spacing:.15px;min-width:0;}
    .pad-title a{color:inherit;text-decoration:none;}
    .pad-title a:hover{text-decoration:underline;}

    .ul{
      margin:0;
      padding-left:18px;
      font-size:12.5px;
      color:var(--slate-700);
      line-height:1.55;
    }
    .page[data-theme="dark"] .ul{color:rgba(241,245,249,.78);}
    .ul li{margin:6px 0;}
    .ul a{color:inherit;}

    .mini{
      border:1px solid var(--line);
      background:var(--surface2);
      border-radius:14px;
      padding:12px;
      text-decoration:none;
      color:inherit;
      box-shadow:0 1px 0 rgba(15,23,42,.04);
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      min-height:44px;
    }
    .mini:hover{text-decoration:none;box-shadow:var(--shadow-1);transform:translateY(-1px);transition:transform .12s ease, box-shadow .12s ease;}
    .mini:active{transform:translateY(0px);}
    .mini-title{font-size:12.2px;font-weight:850;letter-spacing:.08px;}

    .footer{
      border:1px solid var(--line);
      background:var(--surface);
      border-radius:var(--r-xl);
      box-shadow:var(--shadow-1);
      padding:14px 16px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }
    .footer-title{font-weight:950;letter-spacing:.2px;}
    .footer-sub{font-size:12px;color:var(--slate-600);margin-top:2px;}
    .page[data-theme="dark"] .footer-sub{color:rgba(241,245,249,.66);}
    .footer-right{display:flex;gap:12px;flex-wrap:wrap;}
    .footer-link{
      font-size:12px;
      font-weight:800;
      color:inherit;
      text-decoration:none;
      padding:7px 10px;
      border-radius:12px;
      border:1px solid transparent;
    }
    .footer-link:hover{
      text-decoration:none;
      border-color:var(--line);
      background:var(--surface2);
    }

    .rail-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;}
    .rail-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      padding:8px 10px;
      border-radius:12px;
      border:1px solid var(--line);
      background:var(--surface2);
      font-size:12px;
      font-weight:800;
      color:inherit;
      text-decoration:none;
    }
    .rail-btn:hover{text-decoration:none;box-shadow:0 1px 0 rgba(15,23,42,.04);}

    .panel-card{
      border:1px solid var(--line);
      background:linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.60));
      border-radius:16px;
      padding:14px;
      box-shadow:0 1px 0 rgba(15,23,42,.04);
      margin-bottom:12px;
    }
    .page[data-theme="dark"] .panel-card{
      background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.04));
    }
    .panel-head{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;}
    .panel-title{font-weight:950;letter-spacing:.15px;display:flex;align-items:center;gap:10px;}
    .panel-sub{font-size:12px;color:var(--slate-600);line-height:1.35;}
    .page[data-theme="dark"] .panel-sub{color:rgba(241,245,249,.66);}

    .pill-row{display:flex;flex-wrap:wrap;gap:8px;}
    .pill2{
      font-size:11px;
      font-weight:850;
      padding:6px 10px;
      border-radius:999px;
      border:1px solid var(--line);
      background:var(--surface2);
      color:inherit;
    }

    .side-grid{
      display:grid;
      grid-template-columns:repeat(2, minmax(0, 1fr));
      gap:10px;
    }
    .side-pill{
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      padding:10px;
      border-radius:14px;
      border:1px solid var(--line);
      background:var(--surface2);
      font-size:12px;
      font-weight:850;
      color:inherit;
      text-decoration:none;
      min-height:42px;
    }
    .side-pill:hover{text-decoration:none;box-shadow:0 1px 0 rgba(15,23,42,.04);transform:translateY(-1px);transition:transform .12s ease;}
    .side-pill:active{transform:translateY(0px);}
    .side-pill.warn{
      border-color:rgba(216,116,61,.22);
      background:rgba(216,116,61,.10);
      color:var(--copper-600);
    }

    .stack{display:flex;flex-direction:column;gap:8px;}
    .stack-item{
      border:1px solid var(--line);
      background:var(--surface2);
      border-radius:14px;
      padding:10px 12px;
      font-size:12.5px;
      font-weight:800;
      color:inherit;
    }
    .stack-sub{
      margin-top:6px;
      font-size:11px;
      font-weight:750;
      color:var(--slate-600);
    }
    .page[data-theme="dark"] .stack-sub{color:rgba(241,245,249,.66);}

    mark.kw{
      padding:2px 6px;
      border-radius:999px;
      background:rgba(216,116,61,.14);
      border:1px solid rgba(216,116,61,.18);
      color:inherit;
      font-weight:900;
    }
    .page[data-theme="dark"] mark.kw{
      background:rgba(65,197,224,.12);
      border-color:rgba(65,197,224,.18);
    }

    :focus{outline:none;}
    :focus-visible{
      box-shadow:0 0 0 3px var(--focus), 0 0 0 6px rgba(255,255,255,.12);
      border-radius:12px;
    }
    .page[data-theme="dark"] :focus-visible{
      box-shadow:0 0 0 3px rgba(65,197,224,.22), 0 0 0 6px rgba(10,14,26,.40);
    }

    /* ===== SimpleQ-specific styles ===== */

    .prose{font-size:13px;line-height:1.6;color:var(--slate-700);}
    .page[data-theme="dark"] .prose{color:rgba(241,245,249,.78);}
    .prose p{margin:0 0 8px 0;}
    .prose p:last-child{margin-bottom:0;}
    .prose strong{font-weight:900;color:var(--slate-900);}
    .page[data-theme="dark"] .prose strong{color:rgba(241,245,249,.94);}

    .code-block{
      border:1px solid var(--line);
      background:rgba(15,23,42,.04);
      border-radius:12px;
      padding:12px 14px;
      font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
      font-size:12px;
      line-height:1.6;
      margin-top:10px;
      overflow-x:auto;
    }
    .page[data-theme="dark"] .code-block{
      background:rgba(241,245,249,.06);
    }
    .code-label{
      font-family:inherit;
      font-size:11px;
      font-weight:800;
      letter-spacing:.1px;
      text-transform:uppercase;
      color:var(--slate-500);
      margin-bottom:8px;
    }
    .code-muted{
      color:var(--slate-500);
      font-style:italic;
    }

    .inline-code{
      font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
      font-size:11.5px;
      padding:2px 7px;
      border-radius:8px;
      border:1px solid var(--line);
      background:rgba(15,23,42,.04);
    }
    .page[data-theme="dark"] .inline-code{
      background:rgba(241,245,249,.08);
    }

    .flow-steps{
      display:flex;
      flex-direction:column;
      gap:0;
      margin-top:12px;
    }
    .flow-step{
      display:flex;
      align-items:flex-start;
      gap:14px;
      padding:12px 14px;
      border:1px solid var(--line);
      border-bottom:0;
      background:linear-gradient(180deg, rgba(255,255,255,.70), rgba(255,255,255,.50));
    }
    .page[data-theme="dark"] .flow-step{
      background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
    }
    .flow-step:first-child{border-radius:14px 14px 0 0;}
    .flow-step:last-child{border-bottom:1px solid var(--line);border-radius:0 0 14px 14px;}
    .flow-step:only-child{border-radius:14px;border-bottom:1px solid var(--line);}
    .flow-num{
      width:32px;
      height:32px;
      border-radius:999px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:12px;
      font-weight:900;
      border:1px solid rgba(14,51,68,.20);
      background:linear-gradient(180deg, rgba(14,51,68,.12), rgba(14,51,68,.06));
      color:var(--caufero-800);
      flex:0 0 auto;
    }
    .page[data-theme="dark"] .flow-num{
      border-color:rgba(65,197,224,.22);
      background:linear-gradient(180deg, rgba(65,197,224,.14), rgba(65,197,224,.06));
      color:#a7d7e3;
    }
    .flow-body{min-width:0;flex:1 1 auto;padding-top:4px;}
    .flow-label{font-size:13px;font-weight:900;letter-spacing:.1px;}
    .flow-desc{font-size:12px;color:var(--slate-600);margin-top:4px;line-height:1.5;}
    .page[data-theme="dark"] .flow-desc{color:rgba(241,245,249,.66);}

    @media (max-width: 1180px){
      .grid-4{grid-template-columns:repeat(3, minmax(0, 1fr));}
    }
    @media (max-width: 980px){
      .shell{
        grid-template-columns:1fr;
        gap:12px;
      }
      .rail{
        position:fixed;
        top:var(--topbarH);
        height:calc(100vh - var(--topbarH));
        border-radius:18px;
        z-index:60;
        width:min(92vw, 340px);
        box-shadow:var(--shadow-2);
        transform:translateX(-110%);
        transition:transform .18s ease;
      }
      .rail-right{
        right:12px;
        left:auto;
        transform:translateX(110%);
      }
      .rail-left{
        left:12px;
        right:auto;
      }
      .rail.open{transform:translateX(0%);}
      .content{padding:12px 0 18px 0;}
      .grid-2{grid-template-columns:1fr;}
      .grid-3{grid-template-columns:repeat(2, minmax(0, 1fr));}
      .grid-4{grid-template-columns:repeat(2, minmax(0, 1fr));}
      .side-grid{grid-template-columns:1fr;}
      .topbar-inner{grid-template-columns:1fr auto;gap:10px;}
      .topbar-center{display:none;}
      .brand-sub{display:none;}
    }
    @media (max-width: 560px){
      .grid-3{grid-template-columns:1fr;}
      .grid-4{grid-template-columns:1fr;}
      .icon-btn-text{display:none;}
      .topbar-right{gap:6px;}
    }
  </style>
</body>
</html>