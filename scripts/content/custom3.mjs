/**
 * Customized group, part three.
 *   TBS-020 Black Printed — VERIFIED as one-colour black ink on light stock.
 *                           Short description and specification table agree:
 *                           "black ink … against kraft or white backgrounds",
 *                           "Material: White paper, Kraft paper", "1-color".
 *                           NOT black board — that is TBS-031, a separate page.
 *   TBS-021 White Printed — VERIFIED from the five product images and the
 *                           specification table as coloured artwork printed on
 *                           a white stock. The short description's claim of
 *                           "white ink on dark kraft" is contradicted by every
 *                           image and by the spec table; flagged in the report
 *                           rather than repeated here.
 *   TBS-022 Minimal Design — information priority and restraint as strategy.
 */

export const custom3 = {
  // -------------------------------------------------------- BLACK PRINTED
  'TBS-020': {
    sections: [
      {
        heading: 'One Ink, Light Board, No Registration',
        blocks: [
          { t: 'p', html: 'Black printed sleeves are single-colour work: dark ink laid onto a light stock, usually white or kraft. That sounds like a limitation and is mostly an advantage, because almost everything that goes wrong in printing goes wrong between colours.' },
          { t: 'p', html: 'With one ink there is no registration to hold. Two elements cannot drift apart, a fine outline cannot separate from its fill, and nothing needs an underbase. The press is doing one simple thing, and simple things repeat reliably between runs.' },
          { t: 'p', html: 'That reliability is why single-colour work holds fine detail better at small sizes than multi-colour artwork does. A mark that would soften under a two-colour build stays crisp when printed as one solid ink.' },
          { t: 'p', html: 'This is a different product from a sleeve made of dark board. Here the board is light and the ink is dark; there the board itself is dark and the printing problems reverse entirely. Anyone weighing the two should read what happens when <a href="/product/black-burger-sleeves/">the board itself is dark rather than the ink</a>, because the artwork consequences are opposite.' },
        ],
      },
      {
        heading: 'Designing For A Single Ink',
        blocks: [
          { t: 'p', html: 'Working in one colour is a discipline rather than a restriction, and designs that acknowledge it tend to look deliberate. Designs that treat it as a reduced version of a colour layout usually look like something is missing.' },
          { t: 'p', html: 'Tone is the main tool. A single ink can produce a range of apparent greys through halftone screening, which lets a layout have depth without a second colour. How fine that screening can go depends on the board, because absorbent stock lets dots spread and merge.' },
          {
            t: 'table',
            caption: 'Single-ink techniques and where each holds up',
            headers: ['Technique', 'Effect', 'Reliability on absorbent board'],
            rows: [
              ['Solid black areas', 'Maximum contrast and weight', 'High'],
              ['Line work and outlines', 'Detail and structure', 'High if strokes are not hairline'],
              ['Coarse halftone screen', 'Apparent mid-grey', 'Good'],
              ['Fine halftone screen', 'Smooth tonal gradation', 'Reduced — dots can spread and fill'],
              ['Reversed-out shapes', 'Board colour becomes the mark', 'High, and edges stay crisp'],
              ['Very fine hairlines', 'Delicate detail', 'Poor — first thing to fill in'],
            ],
          },
          { t: 'p', html: 'Reversing shapes out is particularly effective here. Printing the surrounding area and leaving the board to form a mark costs nothing extra, produces a clean edge, and gives a second visual value without a second ink.' },
        ],
      },
      {
        heading: 'What The Board Underneath Changes',
        blocks: [
          { t: 'p', html: 'Dark ink behaves differently on white board than on kraft, and the difference is worth settling at specification stage rather than at delivery. On bright white the contrast is at its maximum, small text stays legible and halftones hold their separation.' },
          { t: 'p', html: 'On unbleached brown the contrast is lower and the ink sits into a more absorbent, less uniform surface. Solid blocks still read strongly, but fine screening loses definition and very small type becomes harder work. The trade is that the result looks warmer and less clinical, which is why plenty of operators choose it deliberately.' },
          { t: 'p', html: 'Neither is better in the abstract. What matters is matching the choice to the artwork: detailed, text-led designs favour a bright uniform ground, while bold marks and simple shapes hold up on either. Where the warmth of unbleached stock is the point, <a href="/product/kraft-burger-sleeves/">kraft board and how its fibre behaves under ink</a> covers what to expect from that surface.' },
        ],
      },
      {
        heading: 'The Cost Argument For Single-Colour Work',
        blocks: [
          { t: 'p', html: 'One ink is cheaper than four at essentially every quantity, and the saving is largest on shorter runs where setup is a bigger share of the total. For a business printing modest quantities, that difference can be what makes branded packaging viable at all.' },
          { t: 'p', html: 'It also reduces the number of things that can go wrong, which has a cost of its own. Fewer proofing rounds, fewer colour conversations, no registration to check, and a result that reproduces consistently on reorder without needing a colour reference argued over.' },
          {
            t: 'ol',
            items: [
              'Confirm the artwork genuinely works in one ink before pricing anything else',
              'Choose the board, since it changes how fine the artwork can go',
              'Set stroke weights and type sizes for the roughest stock in your range',
              'Ask for a printed proof on the actual board rather than office paper',
              'Retain the approved sample so reorders can be matched without discussion',
            ],
          },
          { t: 'p', html: 'The saving is only real if the design suits one ink. Reducing a four-colour layout to black and hoping is how single-colour packaging gets a reputation for looking cheap. Designs conceived in one ink rarely have that problem, and they share most of their thinking with <a href="/product/minimal-design-burger-sleeves/">layouts that assign panel space by priority</a>.' },
        ],
      },
      {
        heading: 'Setting Text So It Stays Readable',
        blocks: [
          { t: 'p', html: 'Single-ink work is frequently chosen for packaging that carries information — menu details, allergen notes, order identifiers — because dark ink on light board gives the highest contrast available without adding cost. Getting the typography right is therefore most of the job.' },
          { t: 'p', html: 'Reading conditions on a sleeve are worse than on a page. The surface curves, the light is warm and directional, a hand covers part of the panel, and the customer is glancing rather than reading. All of those favour larger sizes and heavier weights than the same information would need in print.' },
          { t: 'p', html: 'Light-weight and finely serifed typefaces suffer most, particularly on absorbent board where thin strokes fill in. A medium or semibold weight in a straightforward face will stay legible in conditions where a more delicate setting disappears.' },
          { t: 'p', html: 'Line length matters too. A panel is wide relative to its height, and text set across the full width becomes difficult to track. Breaking information into short lines or grouped blocks reads faster than a full-width paragraph, which is rarely read at all.' },
        ],
      },
      {
        heading: 'Menus Where One Ink Is The Right Answer',
        blocks: [
          { t: 'p', html: 'Single-colour printing suits some businesses better than others, and it is worth being specific rather than treating it purely as the budget option.' },
          { t: 'p', html: 'It works well where the identity is typographic rather than pictorial, where packaging carries operational information, where runs are modest, and where the board is part of the intended look. It works less well where photography, food imagery or a multi-colour identity is central to how the brand presents itself.' },
          { t: 'p', html: 'Businesses running several sleeve variants across a menu often find it the practical choice for a different reason: printing four separate artworks in one ink costs considerably less than four in process colour, which makes per-item packaging affordable where it otherwise would not be. It is the same arithmetic that leads <a href="/product/street-food-burger-sleeves/">traders working from stalls and markets</a> towards one ink: the board carries most of the look, and the press bill stays proportionate to a modest run.' },
          {
            t: 'ul',
            items: [
              'Suits typographic identities and information-carrying packaging',
              'Makes per-item artwork variants affordable across a menu',
              'Reproduces consistently between runs with little colour discussion',
              'Less suitable where photography or a multi-colour identity leads',
              'Board choice becomes part of the design rather than a background',
            ],
          },
        ],
      },
      {
        heading: 'What To Send For A Single-Colour Job',
        blocks: [
          { t: 'p', html: 'Single-ink jobs need less from a file than process work, but the requirements that remain are less forgiving. Artwork should be supplied as vector where possible, with type converted to outlines and everything set in one colour rather than a black built from process inks.' },
          { t: 'p', html: 'A four-colour black is a common and avoidable error. It looks identical on screen and prints as a registration-dependent build rather than a single solid ink, which removes the main advantage of specifying one colour in the first place.' },
          { t: 'p', html: 'State the board at the same time as the artwork. The same file behaves differently on coated white and unbleached brown, and a supplier who knows the substrate can advise on stroke weights and screening before a proof rather than after.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is a black printed sleeve made from black board?', a: 'No. On this product the board is light — white or kraft — and the artwork is printed in dark ink. A sleeve made from dark board is a different product with the opposite production problems, because process inks disappear on a dark ground and need an opaque underbase.' },
      { q: 'What is the advantage of printing in one ink?', a: 'There is no registration to hold. Two elements cannot drift apart, outlines cannot separate from their fills, and nothing needs an underbase. That makes fine detail more reliable at small sizes than the same mark built from several colours, and it repeats consistently between runs.' },
      { q: 'Can single-colour artwork have tonal variation?', a: 'Yes, through halftone screening, which produces apparent greys from one ink. How fine the screen can go depends on the board — absorbent stock lets dots spread and merge, so coarser screens are more reliable on uncoated or unbleached surfaces.' },
      { q: 'What is reversing out and why use it here?', a: 'Printing the area around a shape so the bare board forms the mark. On single-colour work it gives a second visual value without a second ink, costs nothing extra, and holds a crisper edge than fine printed detail on absorbent board.' },
      { q: 'Does dark ink work better on white or kraft board?', a: 'White gives maximum contrast, keeps small text legible and holds halftone separation. Kraft lowers contrast and absorbs more, so fine screening and very small type suffer, but solid marks still read strongly and the result looks warmer. Match the board to how detailed the artwork is.' },
      { q: 'What line weights should I avoid?', a: 'Hairlines are the first thing to fill in, particularly on absorbent or unbleached board. Set stroke weights for the roughest stock in your range rather than the smoothest, and check a printed proof at final size rather than judging on screen.' },
      { q: 'How much cheaper is one-colour printing?', a: 'It costs less than process printing at essentially every quantity, with the largest relative saving on shorter runs where setup is a bigger share of the total. Exact figures depend on the run and the board, so ask for both options priced against your quantity.' },
      { q: 'Does single-colour packaging look cheap?', a: 'Only when a colour layout has been reduced to black and left as is. Designs conceived for one ink — using solid shapes, reversed marks and deliberate tonal work — read as considered rather than reduced. The problem is the approach, not the ink count.' },
      { q: 'Is proofing still necessary for one-colour work?', a: 'Yes, on the actual board. A proof catches strokes filling in, halftones merging and type becoming hard work — all of which depend on the surface rather than on the artwork file. Office paper will not tell you what unbleached board does.' },
      { q: 'Will reorders match without a colour discussion?', a: 'Single-ink work is far more consistent between runs than process colour, because there is no build to reproduce. Retaining an approved sample is still worth doing, particularly if the board may vary, but the conversation is usually much shorter.' },
      { q: 'Can I add a second colour later?', a: 'It is possible but it changes the job. A second ink introduces registration tolerance, which shows wherever the two elements meet, and it means the artwork should be designed for two colours rather than having one added. Plan for it at the start if it is likely.' },
      { q: 'Is dark ink better for small text than colour?', a: 'Generally yes on a light board, because a solid single ink gives maximum contrast with no registration softening. Small text built from process colours relies on several layers aligning, which is where legibility is usually lost at packaging scale.' },
    ],
  },

  // -------------------------------------------------------- WHITE PRINTED
  'TBS-021': {
    sections: [
      {
        heading: 'A Bright Base For Printed Artwork',
        blocks: [
          { t: 'p', html: 'This product is artwork printed onto a white stock. The board provides a bright, even ground and the design sits on top of it, which is the arrangement process printing is built around and the reason colours land close to what was approved.' },
          { t: 'p', html: 'A useful way to think about it is that the white is doing work even where nothing is printed. Unprinted areas are not empty space; they are the brightest value available in the design, and layouts that treat them that way tend to look sharper than layouts that fill every panel.' },
          { t: 'p', html: 'That makes knockouts and negative shapes genuinely useful. A mark left unprinted against a printed field reads cleanly, holds a crisp edge, and costs less than adding another ink to achieve the same contrast.' },
          { t: 'p', html: 'It is worth separating this from the plain white sleeve in the range. There the subject is the board itself as a material choice; here the subject is what happens when artwork is printed onto it. Comparing against <a href="/product/white-burger-sleeves/">white board considered as a material rather than a print base</a> makes the distinction concrete.' },
        ],
      },
      {
        heading: 'Where The Brightness Costs You',
        blocks: [
          { t: 'p', html: 'Everything that makes white good to print on makes it unforgiving in service. Unprinted areas record every mark they receive, and a burger operation produces several.' },
          { t: 'p', html: 'Oil migrating into fibre darkens it into a translucent patch. Sauce marks on contact. Grey abrasion appears where a sleeve is dragged across a stainless surface. None of these is a failure of the packaging, and all of them are visible on white in a way they are not on brown or dark board.' },
          {
            t: 'table',
            caption: 'How much of the panel to leave unprinted',
            headers: ['Area', 'Marking risk in service', 'Design response'],
            rows: [
              ['Base and lower walls', 'Highest — oil pools here', 'Print or accept marking; avoid critical detail'],
              ['Grip zone', 'High — hands, sauce transfer', 'Keep clear of anything that must read'],
              ['Upper face panel', 'Low', 'Safest place for unprinted brightness'],
              ['Areas near the mouth', 'Moderate — contact when loading', 'Avoid fine detail at the edge'],
              ['Reverse panel', 'Low', 'Suitable for secondary information'],
            ],
          },
          { t: 'p', html: 'The practical response is not to abandon white but to place unprinted areas where they survive. Brightness held high on the face panel stays clean far longer than brightness at the base, and that single decision does more for how the packaging ages than any coating.' },
        ],
      },
      {
        heading: 'Barrier Treatment Matters More Here',
        blocks: [
          { t: 'p', html: 'Because white reports grease so readily, a barrier treatment does more visible good on this stock than on any other. It will not make a sleeve leakproof and no paperboard should be described that way, but it can move the point at which a visible shadow appears from a few minutes to well past the time a customer takes to eat.' },
          { t: 'p', html: 'That distinction matters commercially. A sleeve that marks before the customer has finished looks like a hygiene problem to them, whatever the reality. A sleeve that marks after they have finished is simply used packaging.' },
          { t: 'p', html: 'Worth separating clearly: a coating applied to improve how ink sits on the surface is not the same as one applied to slow oil migration. A board can have one without the other, so ask which treatments a quotation actually includes. Where the menu runs wet, <a href="/product/grease-resistant-burger-sleeves/">how oil actually moves through board and what a barrier can promise</a> covers the mechanics in detail.' },
        ],
      },
      {
        heading: 'Designing With Restraint On A Bright Ground',
        blocks: [
          { t: 'p', html: 'White stock invites two opposite approaches. One fills the panel with colour and uses the board purely as a print base. The other prints sparingly and lets the white carry the design. Both work; problems come from doing neither deliberately.' },
          {
            t: 'ul',
            items: [
              'Unprinted white is the brightest value in the layout, not empty space',
              'Knockouts hold crisp edges and cost less than adding an ink',
              'Full coverage hides marking but raises cost and shows folds more',
              'Partial coverage keeps costs down and leaves brightness to protect',
              'Whichever route, decide it before layout rather than during',
            ],
          },
          { t: 'p', html: 'Full coverage has a practical side benefit worth knowing: a printed panel shows grease shadowing less than a bare one, because there is already ink where the mark would appear. That is rarely the reason to choose it, but it is a genuine consideration on a wet menu.' },
          { t: 'p', html: 'Where the artwork is genuinely photographic or multi-coloured, the reproduction questions become the main event rather than a detail, and those are worth reading alongside <a href="/product/full-color-burger-sleeves/">process colour work and what heavy coverage does on board</a>.' },
        ],
      },
      {
        heading: 'Keeping White Consistent Between Runs',
        blocks: [
          { t: 'p', html: 'Board brightness is not a single fixed value. It varies between suppliers, between grades and to a small degree between production batches, particularly where any recycled content is involved.' },
          { t: 'p', html: 'That matters more on this product than on most, because unprinted board is part of the design. A slightly warmer sheet is invisible on a heavily printed sleeve and obvious on one where large areas are bare.' },
          { t: 'p', html: 'Keeping a retained sample from the approved run and checking new stock against it before the old runs out is the whole control. It gives time to raise a difference while you still have working packaging, rather than finding out when the last case is opened mid-service.' },
        ],
      },
      {
        heading: 'Deciding How Much Of The Panel To Print',
        blocks: [
          { t: 'p', html: 'Coverage is the decision with the largest cost consequence on this product, and it is frequently made by default rather than deliberately. Printing the whole panel and printing a mark on a bare panel are different jobs at different prices, and both are legitimate.' },
          {
            t: 'ol',
            items: [
              'Decide what the sleeve has to communicate at handover',
              'Establish whether unprinted white is part of the intended look',
              'Price partial and full coverage at your realistic quantity',
              'Weigh the difference against a board or barrier upgrade',
              'Check a proof of the chosen coverage on the actual stock',
            ],
          },
          { t: 'p', html: 'The comparison worth running is coverage against substrate. The money separating a lightly printed sleeve from a fully printed one is often close to the money separating an untreated board from a barrier-treated one, and on a wet menu the second buys more than the first.' },
          { t: 'p', html: 'Partial coverage also ages differently. A bare panel shows grease shadowing, but it shows it in a way that reads as used packaging rather than damaged artwork. A fully printed panel hides the shadow and shows fold cracking more, so neither is uniformly better in service.' },
        ],
      },
      {
        heading: 'Handling And Storage Before Use',
        blocks: [
          { t: 'p', html: 'White stock records everything that happens to it before a burger goes anywhere near it, which makes storage part of the specification rather than an afterthought.' },
          { t: 'p', html: 'Cases kept sealed until needed, stored flat rather than on edge, and away from prep benches where flour and oil become airborne will arrive at the counter looking like the approved sample. Cases left open in a kitchen for a fortnight will not.' },
          {
            t: 'ul',
            items: [
              'Keep cases sealed until the stock is needed',
              'Store flat rather than on edge to avoid pressure marks',
              'Keep away from prep areas where flour and oil are airborne',
              'Never restock a dispenser from sleeves left on a wet surface',
              'Rotate stock so no case sits open for long periods',
            ],
          },
          { t: 'p', html: 'None of this is unique to white board, but it is the stock where the consequences are visible. The same handling on brown or dark board produces marks nobody sees, which is why storage discipline slips on those stocks without anyone noticing until it is applied to a bright one.' },
        ],
      },
    ],
    faqs: [
      { q: 'What exactly is a white printed sleeve?', a: 'Artwork printed onto a white stock, with the board providing a bright, even ground for the design. That arrangement is what process printing assumes, which is why colours reproduce closer to the approved reference than on brown or textured board.' },
      { q: 'How is this different from a plain white sleeve?', a: 'The plain white product is about the board as a material choice — brightness, feel, how it shows marks. This product is about what happens when artwork is printed onto that board: colour fidelity, coverage decisions and how much brightness to leave unprinted.' },
      { q: 'Should I leave areas of the board unprinted?', a: 'It is often the strongest option, because unprinted white is the brightest value available in the layout rather than empty space. Knockouts and negative shapes hold crisp edges and give contrast without the cost of another ink.' },
      { q: 'Where do marks show first on a white sleeve?', a: 'The base and lower walls, because oil pools there, followed by the grip zone from hands and sauce transfer. The upper face panel stays clean longest, which makes it the safest place to leave brightness exposed.' },
      { q: 'Can I stop a white sleeve marking during service?', a: 'Not entirely. A barrier treatment slows oil reaching the fibre and can move a visible shadow well past the time a customer takes to eat, and an inner greaseproof wrap does the main work. Neither makes the sleeve leakproof, and it should not be described that way.' },
      { q: 'Are print coatings and barrier coatings the same?', a: 'No. One improves how ink sits on the surface for density and sharpness; the other slows liquid and oil moving into the fibre. A board can carry one without the other, so ask which treatments a quotation includes rather than assuming a coated board resists grease.' },
      { q: 'Does full coverage help with marking?', a: 'Somewhat, because a printed panel already has ink where a grease shadow would appear, so the mark is less obvious. It is rarely the main reason to choose full coverage, but on a wet menu it is a genuine secondary benefit.' },
      { q: 'What are the downsides of covering the whole panel?', a: 'Higher cost at every quantity, more visible cracking where folds run through dense ink, and the loss of the bright unprinted areas that give white stock its character. It also takes longer to dry, which raises the risk of set-off between stacked sheets.' },
      { q: 'Will the white be the same shade on every order?', a: 'Board brightness varies between suppliers, grades and to a small degree between batches, particularly with recycled content. That is more visible on this product than most, because unprinted board is part of the design. Retain an approved sample and check reorders against it.' },
      { q: 'Is white board good for small text?', a: 'It is the easiest ground to work with, because dark ink on a bright surface gives maximum contrast with no underbase needed. That is one of the practical reasons information-heavy packaging tends to use light board rather than dark or unbleached stock.' },
      { q: 'How do I judge a proof on white stock?', a: 'At full size, on the intended board, under the lighting the packaging will be seen in. Also check the unprinted areas rather than only the printed ones — the brightness of the bare board is part of what you are approving.' },
      { q: 'Should the same artwork be used on white and kraft sleeves?', a: 'Rarely without adjustment. Artwork designed for a bright ground loses pale tones and shifts hue on unbleached board. If your range runs both, expect to adapt the design rather than reuse the file directly.' },
    ],
  },

  // -------------------------------------------------------- MINIMAL DESIGN
  'TBS-022': {
    sections: [
      {
        heading: 'Deciding What The Panel Is For',
        blocks: [
          { t: 'p', html: 'Restraint is a decision about priority, not about taste. Every sleeve panel has a limited amount of attention available, and a minimal layout is one where that attention has been assigned to a single thing on purpose rather than divided between several by default.' },
          { t: 'p', html: 'Most crowded packaging is not the result of a design choice. It accumulates: marketing wants the offer, operations want the identifier, legal want the notice, and the brand wants the logo. Each addition is reasonable and the total is unreadable.' },
          { t: 'p', html: 'Working out the priority order before layout begins is what prevents that. If the panel can only communicate one thing well, deciding which one is worth more than any amount of layout skill applied afterwards.' },
          {
            t: 'table',
            caption: 'Assigning panel space by what each element has to achieve',
            headers: ['Element', 'When it must be read', 'Priority on the main panel'],
            rows: [
              ['Brand mark', 'At handover, in a glance', 'Primary'],
              ['Menu identifier', 'By staff, from above, at speed', 'Secondary — position matters more than size'],
              ['Offer or campaign message', 'Before the decision, at the counter', 'Primary only during a campaign'],
              ['Allergen or legal text', 'After the decision, when seated', 'Legible, but not on the main panel'],
              ['Website or social handle', 'Rarely read at all', 'Low — a side panel is sufficient'],
            ],
          },
        ],
      },
      {
        heading: 'Space Is Not Wasted Area',
        blocks: [
          { t: 'p', html: 'The most common objection to a restrained layout is that the panel is being under-used. It is worth answering directly: empty area is what makes the printed area readable. A mark with space around it is legible at a glance and a mark surrounded by other elements is not, regardless of how large it is.' },
          { t: 'p', html: 'On a sleeve this matters more than on flat print, because the surface curves, is held at angles and is partly covered by a hand for most of its life. Elements that survive those conditions are the ones with room around them.' },
          { t: 'p', html: 'Space also ages better. A crowded panel with a grease mark across it looks damaged; an open panel with the same mark looks like packaging that has been used. That is not a small difference when the sleeve sits in front of a customer for a meal, and it is worth weighing against how visibly a given stock marks — bright board reports more than <a href="/product/kraft-brown-burger-sleeves/">an unbleached surface that absorbs handling marks visually</a>.' },
        ],
      },
      {
        heading: 'Fewer Inks Is A Production Decision Too',
        blocks: [
          { t: 'p', html: 'Restrained layouts usually need fewer colours, and that has consequences beyond cost. Fewer inks mean fewer registration relationships, which means less that can drift, which means a result that reproduces more consistently between runs.' },
          { t: 'p', html: 'It also widens the range of boards that work. Detailed multi-colour artwork effectively requires a bright, uniform, coated surface; a two-colour layout with generous space reproduces acceptably across a much wider set of stocks, including unbleached and recycled options that would flatten a photographic design. The trade between ink count, board and press setup is worth understanding before the layout is fixed, because <a href="/product/printed-burger-sleeves/">the printing method decided at that point</a> constrains everything downstream of it.' },
          {
            t: 'ol',
            items: [
              'List every element someone has asked to appear on the sleeve',
              'Mark which must be read and when it must be read',
              'Assign the main panel to one primary element only',
              'Move everything else to a side panel or remove it',
              'Reduce the palette to the minimum the remaining elements need',
              'Proof at final size and check legibility at arm\'s length',
            ],
          },
          { t: 'p', html: 'The step people skip is the fourth one. Removing an element is harder than shrinking it, and shrinking is how panels end up carrying six things that are all technically present and none of which get read.' },
        ],
      },
      {
        heading: 'Keeping Identification Legible Without Clutter',
        blocks: [
          { t: 'p', html: 'A restrained sleeve still has to work operationally. Staff need to tell builds apart, and a design that removes every distinguishing feature makes a loaded tray harder to read, which costs time at exactly the wrong moment.' },
          { t: 'p', html: 'The answer is usually position rather than prominence. A small consistent element in a consistent place is read faster than a large one that moves, because staff learn the location and stop reading the content. That works with a restrained layout rather than against it.' },
          { t: 'p', html: 'Colour is the other efficient identifier, and it can be a single block or edge rather than a full-colour design. One additional ink used as an identifier across a menu costs less than printing several distinct artworks and is faster to read at a distance.' },
          { t: 'p', html: 'Where the logo itself is doing most of the work, its size and clearance become the whole design question, which is territory covered in more depth alongside <a href="/product/logo-printed-burger-sleeves/">how a mark is positioned, sized and kept clear of folds</a>.' },
        ],
      },
      {
        heading: 'What Restraint Does Not Promise',
        blocks: [
          { t: 'p', html: 'A simple layout does not automatically read as premium, and it is worth saying plainly because the assumption is common. Restraint communicates confidence when the execution is good and communicates a lack of budget when it is not.' },
          { t: 'p', html: 'What separates the two is usually everything except the layout: the board, the finish, the accuracy of the printing, how the sleeve fits the burger, whether it holds its shape. A minimal design on a poorly fitting, flimsy sleeve looks cheap, not understated.' },
          { t: 'p', html: 'That is the practical argument for spending the ink saving somewhere else. Money not spent on a fourth colour buys a better board, a barrier treatment or a surface finish, and each of those does more for how the packaging is perceived than another printed element would have.' },
          { t: 'p', html: 'Surface choice is where that saving is most visible on a restrained design, because with less artwork competing for attention the texture of the sleeve itself becomes part of the impression, as with <a href="/product/matte-finish-burger-sleeves/">a low-glare surface where the finish carries part of the effect</a>.' },
          {
            t: 'ul',
            items: [
              'Restraint reads as confidence only when execution supports it',
              'Fit, board and finish carry more perceived quality than element count',
              'Money saved on inks is better spent on substrate or surface',
              'A flimsy sleeve with a simple layout reads as cheap, not understated',
              'Judge the effect on a physical sample, never on a flat visual',
            ],
          },
        ],
      },
      {
        heading: 'Working At Packaging Scale',
        blocks: [
          { t: 'p', html: 'A restrained layout has less to hide behind, which makes scale errors more visible. An element two millimetres out of position on a busy panel disappears; the same error on an open panel is the first thing anyone notices.' },
          { t: 'p', html: 'That means position and alignment need defining rather than eyeballing. Margins expressed as a proportion of the panel, elements aligned to a shared axis, and consistent spacing between the few items present are what make a simple layout look intentional instead of sparse.' },
          { t: 'p', html: 'Scale also changes which typefaces work. A face chosen for a menu or a website is being read at a comfortable size in good light; the same face on a sleeve panel is read at a glance, at an angle, under warm lighting. Testing at final size on the actual board is the only reliable check.' },
          { t: 'p', html: 'Where a design has to work across several sleeve sizes, the layout should be defined by proportion rather than fixed measurements. A logo sized as a percentage of panel width scales sensibly from a slider sleeve to a jumbo one; a logo specified in millimetres looks correct on one and wrong on the others.' },
        ],
      },
      {
        heading: 'Testing Whether The Restraint Worked',
        blocks: [
          { t: 'p', html: 'Simple layouts are easy to approve and harder to evaluate, because there is little to critique on a proof. The useful tests are behavioural rather than visual.' },
          { t: 'p', html: 'Show the sleeve to someone unfamiliar with the brand for two seconds, take it away and ask what they saw. If the answer is the thing you assigned to the primary position, the layout works. If they mention something secondary, or nothing specific, the priority has not landed.' },
          { t: 'p', html: 'The second test is operational. Put several sleeved builds on a tray and ask a member of staff to pick out a specific item. If the identifier is doing its job, that takes a glance. If they have to lift or turn the sleeves, position rather than design is the problem.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is a minimal layout just about removing elements?', a: 'It is about assigning priority. Every panel has a limited amount of attention available, and restraint means deciding deliberately which single element receives it rather than dividing it between several by default. Removal is the consequence, not the goal.' },
      { q: 'Why does packaging end up crowded?', a: 'Because it accumulates rather than being designed. Marketing wants the offer, operations want the identifier, legal want the notice and the brand wants the logo. Each request is reasonable on its own and the total is unreadable. Setting priority before layout prevents it.' },
      { q: 'Is empty space on the panel wasted?', a: 'No — it is what makes the printed area readable. A mark with room around it is legible at a glance; a mark surrounded by other elements is not, however large it is. On a curved surface held at angles, that difference is larger than on flat print.' },
      { q: 'Does a restrained design cost less to print?', a: 'Usually, because it needs fewer inks. It also reproduces more consistently, since fewer colours mean fewer registration relationships that can drift between runs, and it widens the range of boards that will reproduce it acceptably.' },
      { q: 'Can a minimal sleeve still identify menu items?', a: 'Yes, and position does the work rather than prominence. A small consistent element in a consistent place is read faster than a large one that moves, because staff learn the location and stop reading the content. That suits a restrained layout rather than fighting it.' },
      { q: 'What is the most efficient identifier on a simple sleeve?', a: 'A single colour block or edge is usually fastest to read at a distance and cheaper than printing several distinct artworks. One additional ink used consistently across a menu does more operationally than a set of individually designed panels.' },
      { q: 'Does minimal design automatically look premium?', a: 'No, and assuming it does is the common mistake. Restraint reads as confidence when execution is good and as a lack of budget when it is not. What separates them is the board, the finish, the print accuracy and how well the sleeve fits.' },
      { q: 'Where should the ink saving be spent?', a: 'On substrate or surface. Money not spent on a fourth colour buys a better board, a barrier treatment or a finish, and with less artwork competing for attention those do more for how the packaging is perceived than another printed element would.' },
      { q: 'Which elements should move off the main panel?', a: 'Anything read after the purchase decision — allergen and legal text, website and social handles. Those need to be legible somewhere, not prominent. The main panel belongs to whatever has to register in a glance at handover.' },
      { q: 'How do I stop elements creeping back in?', a: 'Write down the priority order and treat it as the specification rather than a preference. Requests to add something are then a question about what gets removed, which is a more useful conversation than whether there is room.' },
      { q: 'Does a simple layout work on unbleached board?', a: 'Better than a detailed one. Two-colour work with generous space reproduces acceptably across a much wider set of stocks, including unbleached and recycled options that would flatten a photographic design. Restraint widens material choice rather than narrowing it.' },
      { q: 'How should a minimal design be proofed?', a: 'At final size, on a physical sample, judged at arm\'s length rather than magnified. With less on the panel, small faults in position, clearance or ink weight are proportionally more visible, so the physical proof matters as much here as on complex artwork.' },
    ],
  },
};
