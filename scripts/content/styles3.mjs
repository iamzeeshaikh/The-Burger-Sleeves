/**
 * Styles group, part three.
 *   TBS-034 Die Cut — dieline engineering, tabs and locks, tolerance, assembly
 *
 * Deliberately the most technical page in the group: it is a structural
 * specification topic rather than a surface or colour topic.
 */

export const styles3 = {
  'TBS-034': {
    sections: [
      {
        heading: 'A Dieline Is The Actual Product',
        blocks: [
          { t: 'p', html: 'On a plain sleeve, the cutting tool is a rectangle with two creases. On a die-cut sleeve, the tool is a shaped steel rule form that cuts curves, notches, tabs and slots in one pass. That tool — the dieline — is what you are really specifying. Board and print sit on top of it, but the dieline decides whether the sleeve assembles in one motion or fights the person holding it.' },
          { t: 'p', html: 'Every dieline separates into two kinds of line. Cut lines remove material. Crease lines compress the board so it folds along a predictable axis without cracking. Getting the crease positions right matters more than the cuts, because a crease in the wrong place by two or three millimetres produces a sleeve that closes crooked every single time.' },
          { t: 'p', html: 'Nick points are the third element and the one most often forgotten. These are tiny uncut bridges that hold a piece in the sheet until it is separated. Too few and parts fall out during production; too many and staff have to tear them apart at the counter, which slows assembly and leaves ragged edges on a customer-facing panel.' },
          {
            t: 'table',
            caption: 'Elements of a burger sleeve dieline',
            headers: ['Element', 'Function', 'What goes wrong if it is off'],
            rows: [
              ['Cut line', 'Defines the outer shape and any windows', 'Shape does not match the burger footprint'],
              ['Crease line', 'Sets the fold axis', 'Sleeve closes crooked or the board cracks'],
              ['Tuck tab', 'Holds the closure', 'Tab misses the slot or tears on insertion'],
              ['Lock slot', 'Receives the tab', 'Too tight to insert, or too loose to hold'],
              ['Nick point', 'Holds parts in the sheet during production', 'Pieces detach early, or staff tear the panel'],
              ['Bleed area', 'Extra printed margin beyond the cut', 'Unprinted white slivers appear at the edges'],
            ],
          },
        ],
      },
      {
        heading: 'Tabs, Slots And The Tolerance Problem',
        blocks: [
          { t: 'p', html: 'A tuck tab and lock slot look trivial on a drawing and are the single most common source of complaints in service. The reason is tolerance stacking. The board has a thickness tolerance. The cutting tool has a positional tolerance. The press has a registration tolerance. Individually each is small; combined, they can be enough that a tab designed to slide in needs to be forced.' },
          { t: 'p', html: 'A slot cut to the exact width of its tab will bind, because the board also has thickness and the tab has to bend to enter. Slots are normally cut with deliberate clearance, and the amount depends on the board caliper. Thicker board needs more. This is why a tab design lifted from a thin-board carton often fails when the same drawing is run on a heavier sleeve stock.' },
          { t: 'p', html: 'The other failure mode is the tab tearing at its base after a few uses. That happens where the tab meets the panel at a sharp internal corner, which concentrates stress. Rounding that junction distributes the load and is a change costing nothing at the dieline stage. Operators specifying structural sleeves for tall builds usually work through this alongside <a href="/product/double-patty-burger-sleeves/">sleeve geometry sized for stacked two-patty builds</a>, because height and closure interact.' },
          {
            t: 'ul',
            items: [
              'Slot width needs clearance beyond the tab width, scaled to board thickness',
              'Sharp internal corners where a tab meets its panel are the usual tear point',
              'Tab length must clear the slot fully or it works loose during carry',
              'Heavier board needs deeper creases to fold cleanly without cracking',
              'A tab that is easy to insert cold may be tight when board absorbs kitchen humidity',
            ],
          },
        ],
      },
      {
        heading: 'Assembly Time Is A Real Cost',
        blocks: [
          { t: 'p', html: 'Die-cut sleeves arrive flat and are formed at the counter. That is an advantage in storage and a cost in labour, and the second half is usually left out of the calculation. A sleeve that takes six seconds to assemble instead of two costs four seconds on every order for the life of the packaging.' },
          { t: 'p', html: 'At three hundred covers a service, four extra seconds is twenty minutes of staff time a day spent folding cardboard. That is worth measuring before a large order rather than after. The measurement is simple: take the physical sample, hand it to the person who will actually use it during a busy period, and time ten assemblies.' },
          {
            t: 'ol',
            items: [
              'Request physical samples cut from the proposed dieline on the proposed board',
              'Have a line member — not a manager — assemble ten of them and time it',
              'Repeat with warm, slightly greasy hands, which is the real condition',
              'Load an actual burger and check the tab still closes over the filled height',
              'Carry it in a bag for the length of a typical delivery and inspect the closure',
              'Only approve the dieline once all five checks pass',
            ],
          },
          { t: 'p', html: 'If the assembly time cannot be brought down, a simpler wrap-style sleeve may serve the same menu better. Structural complexity is worth paying for when it solves a real handling problem, not when it exists because the drawing looked interesting. Where the structure is genuinely needed, it is usually specified alongside the rest of the build through <a href="/product/custom-burger-sleeves/">a full bespoke specification covering board, print and structure together</a>.' },
        ],
      },
      {
        heading: 'Supplying And Approving The File',
        blocks: [
          { t: 'p', html: 'Die-cut work needs the artwork and the dieline supplied as separate layers in one vector file. The dieline layer should use distinct spot colours for cut, crease and any perforation, named clearly, and set to overprint so it does not knock holes in the artwork underneath.' },
          { t: 'p', html: 'Artwork must extend past every cut line into the bleed. Without that margin, the smallest cutting shift leaves an unprinted sliver along an edge, which is highly visible on dark or heavily printed sleeves. Anything that must not be trimmed — logos, legal text, allergen information — needs to sit well inside a safety margin, not close to the cut.' },
          { t: 'p', html: 'Approve a physical cut sample rather than a flat visual. A drawing cannot tell you whether the tab binds, whether a crease cracks on a heavy board, or whether the assembled sleeve actually fits your burger. If a cut sample is not offered as part of the process, ask for one and treat the request as routine. Most suppliers will discuss this at the <a href="/get-free-quote/">quotation stage where dimensions and structure are confirmed</a>.' },
        ],
      },
      {
        heading: 'One Tool Or Several: The Question Behind The Cost',
        blocks: [
          { t: 'p', html: 'Each distinct dieline is a physical steel tool, and that is the cost most buyers do not anticipate. A menu with three burger sizes is not automatically three tools, but deciding whether it is one or three is worth doing deliberately rather than by default.' },
          { t: 'p', html: 'A single tool can cover a range where the closure has enough travel to absorb the difference. A tab that engages anywhere along a longer slot, or a wrap deep enough that the smaller build simply sits lower in it, will serve two sizes without looking wrong on either. What that costs is a little slack on the smaller item and a little less margin on the larger.' },
          {
            t: 'ol',
            items: [
              'Measure the smallest and largest filled builds the sleeve has to hold',
              'Check whether one closure geometry can reach across that gap without gaping or straining',
              'Price the extra tooling against the annual volume of the size that would need it',
              'Decide whether the smaller item can share a tool, or genuinely needs its own',
            ],
          },
          { t: 'p', html: 'The answer usually turns on volume rather than on fit. A size selling in real quantity earns its own tool quickly; one selling occasionally rarely does. Where the range is wide enough that a shared tool clearly will not work, it is worth looking at <a href="/product-category/burger-sleeves-sizes/">how the size range is already divided into bands</a>, since a stock band may cover one end of the menu and leave only the other needing bespoke tooling.' },
        ],
      },
    ],
    faqs: [
      { q: 'What exactly is a die-cut burger sleeve?', a: 'It is a sleeve cut with a shaped steel rule tool rather than a straight rectangular trim. That allows curved edges, notches, windows, tuck tabs and lock slots to be produced in a single pass. The dieline — the drawing of those cut and crease positions — is the core of the specification.' },
      { q: 'What is the difference between a cut line and a crease line?', a: 'A cut line removes material and defines the shape. A crease line compresses the board so it folds along a predictable axis without cracking. Crease placement is usually more critical than cut placement, because a crease a few millimetres out produces a sleeve that closes crooked every time.' },
      { q: 'Why does my tuck tab not fit the slot?', a: 'Almost always tolerance stacking. Board thickness, cutting position and press registration each carry a small tolerance, and combined they can exceed the clearance designed into the slot. A slot cut to the exact tab width will always bind, because the tab has thickness and must bend to enter. Slots need deliberate clearance scaled to the board caliper.' },
      { q: 'Why do tabs tear after a few uses?', a: 'Usually because the tab meets its panel at a sharp internal corner, which concentrates stress at a single point. Rounding that junction spreads the load and costs nothing to change at the dieline stage. Board that has absorbed kitchen humidity also weakens, which accelerates the failure.' },
      { q: 'What are nick points and why do they matter?', a: 'Nick points are tiny uncut bridges that hold cut pieces in the sheet until they are separated. Too few and parts fall out during production or transit. Too many and staff have to tear them apart at the counter, which slows assembly and leaves ragged edges on a visible panel.' },
      { q: 'How should I supply the dieline file?', a: 'Supply artwork and dieline as separate layers in a single vector file. Use distinct, clearly named spot colours for cut, crease and perforation lines, and set the dieline layer to overprint so it does not knock out the artwork beneath. Convert type to outlines before sending.' },
      { q: 'How much bleed does a die-cut sleeve need?', a: 'Artwork must extend past every cut line by an agreed margin so that a small cutting shift does not expose unprinted board. The exact figure depends on the press and the tool, so confirm it with your supplier rather than assuming. Critical elements should sit well inside a safety margin, away from the cut.' },
      { q: 'Do die-cut sleeves take longer to assemble?', a: 'Usually yes, because they arrive flat and are formed at the counter. A sleeve taking six seconds instead of two costs four seconds on every order. At three hundred covers a day that is around twenty minutes of staff time. Time ten assemblies with a real line member before committing to a large run.' },
      { q: 'Can a die-cut sleeve hold a tall burger securely?', a: 'It can, provided the panel depth and tab length are sized for the filled height rather than the empty sleeve. A closure that works on an empty sample may not reach when a loaded burger compresses and spreads. Always test the closure with an actual burger in place.' },
      { q: 'Do heavier boards need different creasing?', a: 'Yes. Thicker board needs deeper crease rules to fold cleanly, and insufficient creasing causes the outer surface to crack along the fold. Cracking is especially visible on dark or heavily printed sleeves. Board caliper and crease depth should be specified together, not separately.' },
      { q: 'Can I reuse a dieline from another packaging item?', a: 'Only with care. A tab and slot geometry that works on thin carton board often binds on heavier sleeve stock, because clearances scale with thickness. Treat an existing dieline as a starting point to be re-proofed on the actual board rather than as a drop-in.' },
      { q: 'Should I approve a flat visual or a physical sample?', a: 'A physical cut sample, every time. A flat drawing cannot tell you whether a tab binds, whether a crease cracks, how long assembly takes, or whether the sleeve fits your actual burger. If a cut sample is not offered as part of the process, ask for one.' },
      { q: 'Can windows or cut-outs be added to the sleeve?', a: 'Shaped openings can be included in a dieline, but each one removes structural material and can reduce stiffness around the closure. Openings near a crease or a tab need particular care. Discuss placement early, because moving a window later means recutting the tool.' },
      { q: 'What information does a supplier need to quote a die-cut sleeve?', a: 'The finished burger dimensions including any inner wrap, the intended board and caliper, the closure style you want, whether artwork is single colour or full coverage, and the run size. Supplying a photograph of the assembled burger alongside the measurements helps more than measurements alone.' },
    ],
  },
};
