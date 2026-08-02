/**
 * Materials group, part two.
 *   TBS-003 Paper      — RESTRUCTURED, not replaced. The inherited page already
 *                        held ~1,198 usable words and its two step-by-step lists
 *                        are genuinely specific, so those are carried through
 *                        verbatim. What changed: the templated headings, the
 *                        filler tables whose rows were duplicated across the
 *                        cluster, and the "lightweight flexible paper" framing,
 *                        which its own specification table contradicts (that
 *                        table reads "Paperboard sleeve structure" and "medium
 *                        to heavy calipers"). Re-framed around what the spec
 *                        actually documents: format and contact setup.
 *   TBS-004 Corrugated — construction NOT independently verified. See the note
 *                        in the page copy and CONTENT_AUDIT.md. The spec table
 *                        documents E flute, F flute and single-face options, so
 *                        those are named as quotable options; none of the five
 *                        product images shows fluting, so nothing is asserted
 *                        about thickness, insulation or thermal performance.
 */

export const materials2 = {
  'TBS-003': {
    sections: [
      {
        heading: 'A Sleeve That Assumes Something Underneath It',
        blocks: [
          { t: 'p', html: 'The defining thing about this format is what it does not do. It is specified to sit over an inner wrap rather than against the food, which changes what the board has to be good at and removes a set of requirements people often assume are there.' },
          { t: 'p', html: 'That assumption is worth making explicit before ordering, because it is the source of most disappointment. A sleeve in this setup is a grip point, a presentation face and a way of holding wrap edges down. It is not a barrier, not a container, and not the layer keeping sauce off a customer. If your service has no inner wrap, the specification changes and the barrier question moves from optional to central.' },
          { t: 'p', html: 'Where the wrap is present, the sleeve can be lighter than it would otherwise need to be, and that is where the cost and storage advantages of this format come from — not from the paper being thin in itself.' },
        ],
      },
      {
        heading: 'Slide-On Or Wrap-Close, And Why It Decides Speed',
        blocks: [
          { t: 'p', html: 'Two formats are offered and they behave differently on a line. A slide-on sleeve is a closed band the wrapped item passes into. A wrap-close sleeve is applied around the item and folded shut. The paperboard can be identical; the assembly time is not.' },
          { t: 'p', html: 'Slide-on is faster per unit and more tolerant of a rushed hand, but it needs the item to be wrapped tidily first or it snags going in. Wrap-close forgives an untidy wrap because it is being formed around whatever is there, but it costs a second or two more each time and gives staff a chance to close it crooked.' },
          { t: 'p', html: 'At low volumes the difference is invisible. At several hundred covers a day it is the difference between the format helping the line and slowing it, which is why this is worth timing with real staff rather than deciding on paper.' },
          {
            t: 'table',
            caption: 'Paper sleeve formats and what each one asks of the line',
            headers: ['Format', 'Assembly', 'Tolerates', 'Struggles with'],
            rows: [
              ['Slide-on band', 'Fastest; one motion', 'High volume and repetitive service', 'An untidy wrap underneath; snags on entry'],
              ['Wrap-close', 'Slower; formed around the item', 'Variable wrap quality and mixed builds', 'Being closed crooked when staff are rushed'],
              ['Die-cut shaped form', 'Slowest; assembled at the counter', 'Distinctive presentation and tab closures', 'Adds seconds to every single order'],
              ['Grease-resistant paperboard', 'Same as the format chosen', 'Sauced items and longer holds', 'Costs more and changes the surface feel'],
              ['Print-grade smooth surface', 'Same as the format chosen', 'Logos, patterns and readable text', 'Shows handling marks more than a textured face'],
            ],
          },
        ],
      },
      {
        heading: 'Getting The Fit Right On A Lighter Build',
        blocks: [
          { t: 'p', html: 'When paper sleeves fit correctly, they improve consistency. A sleeve that is too loose can drift and hide the face panel. A sleeve that is too tight can buckle corners and stress the wrap seam. A balanced paper sleeve gives enough room for folds to close cleanly while still holding the wrap edges in place. That helps the burger feel steadier when carried and keeps the pickup shelf looking uniform when many orders are staged.' },
          { t: 'p', html: 'The best paper sleeves balance flexibility with shape hold. If the stock is too thin, it can soften and crease under pressure in a bag. If it is too stiff, it can feel bulky on smaller builds and slow down folding. Clean scoring matters because it guides the fold so staff can close the sleeve with light pressure instead of squeezing the face. When the sleeve sits centered, the wrap seam stays tucked and the burger looks more uniform on pickup shelves.' },
          { t: 'p', html: 'Because this format is often chosen for quick service, the fit tolerance is tighter than it looks. A sleeve that works when applied carefully and fails when applied at speed has not been sized correctly, and that shows up in a timed test rather than a careful one.' },
        ],
      },
      {
        heading: 'Five Steps To Apply Paper Sleeves Consistently',
        blocks: [
          { t: 'p', html: 'Most of the variation in how these look on a shelf comes from application rather than from the stock. A fixed sequence removes it, and it takes one training session to establish.' },
          {
            t: 'ol',
            items: [
              'Wrap the item first and turn it so the seam sits underneath before the sleeve goes near it',
              'Line the face panel up against that seam, so branding lands the same way on every order',
              'On a slide-on band, push from the base rather than pulling at the open edge',
              'On a wrap-close, let the score lines take the fold instead of pressing on the face',
              'Stand it on the shelf and check the corners have stayed tucked before starting the next one',
            ],
          },
          { t: 'p', html: 'The step that gets skipped under pressure is the first. An item placed seam up puts the loose edge against the sleeve, and no amount of care in the remaining four recovers it.' },
        ],
      },
      {
        heading: 'Checks Worth Running Before A Busy Shift',
        blocks: [
          { t: 'p', html: 'A sleeve that behaves on a bench can still fail in a bag. These five take a couple of minutes at the start of a service and catch nearly everything that would otherwise surface at the counter.' },
          {
            t: 'ul',
            items: [
              'Sleeve one burger and confirm folds close without heavy overlap',
              'Place it in a bag and remove it to check snag points',
              'Hold it one handed and check for rotation on the wrap',
              'Set it on a tray and confirm it stays centered',
              'Stack it beside another item to watch for rubbing zones',
            ],
          },
          { t: 'p', html: 'Run them on stock that has been in the kitchen rather than a fresh case. Paperboard that has taken up humidity folds and snags differently, and the whole point of the check is to test what staff will actually be handling.' },
        ],
      },
      {
        heading: 'Where This Format Meets Its Limit',
        blocks: [
          { t: 'p', html: 'Two situations defeat it, and both are predictable enough to plan around rather than meet by surprise.' },
          { t: 'p', html: 'The first is weight. Past a certain loaded mass the sleeve stops holding the wrap and starts being held by it, and the answer is a stiffer board rather than a better fold routine. The second is time in a bag with sauce present, where a lighter stock softens sooner than a heavier one and a grease-resistant option becomes the specification rather than an upgrade. Service that runs items out fast and eaten standing — <a href="/product/street-food-burger-sleeves/">a hand-to-mouth trade with no table at the end of it</a> — hits the second limit far sooner than a counter operation with the same menu does.' },
          { t: 'p', html: 'Knowing which limit you are near tells you what to change. Reaching for a heavier board when the real problem is dwell time with sauce buys bulk and cost without fixing anything.' },
        ],
      },
      {
        heading: 'Print Coverage On A Lighter Stock',
        blocks: [
          { t: 'p', html: 'Print-grade paper surfaces reproduce logos, patterns and short text well, and the constraint is coverage rather than quality. Heavy ink laid across a light board can stiffen the fold line and make a crease more likely to show, which is the opposite of what the format is for.' },
          { t: 'p', html: 'The practical envelope is a clear face panel, strong marks and readable text, with solid coverage kept away from the creases. Where a design genuinely needs full-bleed colour across the whole face, that is a signal to look at a heavier stock rather than to push this one, and the trade-offs of <a href="/product/medium-burger-sleeves/">a mid-range sleeve sized for a standard build</a> are usually easier to absorb than the trade-offs of over-printing a light board.' },
          { t: 'p', html: 'Judge it on a printed sample folded the way staff will fold it, not on a flat proof. A crease behaves differently once ink is sitting on it.' },
        ],
      },
      {
        heading: 'Confirming The Specification',
        blocks: [
          { t: 'p', html: 'The gaps that cause trouble on this product are specific: whether an inner wrap is assumed, which format is being quoted, whether the board is grease-resistant, and what caliper sits behind the word "paper".' },
          { t: 'p', html: 'That last one matters most. The specification for this product describes a paperboard structure across medium to heavy calipers, which is a wider range than the word "paper" suggests to most buyers, and two quotations using the same word can arrive at very different products. Ask for the caliper as a number and the format by name. Where the menu runs wet enough that softening is the recurring complaint, <a href="/product/grease-resistant-burger-sleeves/">a board specified to resist oil migration</a> is a different order line rather than a finish applied to this one.' },
          { t: 'p', html: 'On disposal, keep the claim conditional. It is a paper-based board, and whether it is recovered depends on any barrier treatment applied, on ink coverage, on food residue and on what the local facility accepts — none of which the material name settles on its own.' },
        ],
      },
    ],
    faqs: [
      { q: 'Are paper sleeves used directly against the food?', a: 'This format is specified to sit over an inner wrap rather than against the food. That is why it can be lighter than it would otherwise need to be. If your service has no inner wrap, the specification changes and direct-contact suitability has to be confirmed for the exact construction you order.' },
      { q: 'What is the difference between a slide-on and a wrap-close sleeve?', a: 'A slide-on is a closed band the wrapped item passes into; a wrap-close is applied around the item and folded shut. The board can be identical. Slide-on is faster but needs a tidy wrap underneath, while wrap-close forgives a rough wrap but costs a second or two more per order.' },
      { q: 'Is "paper" a lighter product than the cardboard sleeve option?', a: 'Not necessarily, and this is worth checking rather than assuming. The specification for this product describes a paperboard structure across medium to heavy calipers, which overlaps the cardboard range. Ask for the caliper as a figure rather than relying on the material name to imply a weight.' },
      { q: 'Will a paper sleeve stop grease reaching a customer\'s hands?', a: 'Not on its own, and it should not be specified as though it will. Grease-resistant paperboard and barrier coatings slow oil moving into the board; they do not make it a container. In this format the inner wrap is doing the containment and the sleeve is a grip and presentation layer.' },
      { q: 'Why does my sleeve keep rotating on the wrap?', a: 'Usually because the panel depth is too generous for the build. A loose sleeve drifts and hides the face panel, which is most visible when orders are staged on a shelf. Check it by holding a sleeved item one-handed rather than looking at it on a bench, since rotation appears under grip.' },
      { q: 'How much print coverage can a lighter paper stock take?', a: 'Strong marks and readable text across a clear face panel work well. Heavy solid ink across a crease can stiffen the fold and make it show. If a design needs full-bleed colour over the whole face, that is usually a signal to move to a heavier board rather than to push this one.' },
      { q: 'Should I test sleeves from a fresh case or from kitchen stock?', a: 'From kitchen stock. Paperboard takes up ambient humidity, and stock that has been sitting in a working kitchen folds, snags and creases differently from board straight out of a sealed carton. Testing a fresh sample tells you how the product behaves in conditions your staff never work in.' },
      { q: 'At what point should I move up to a stiffer board?', a: 'When the sleeve stops holding the wrap and starts being held by it. That is a weight problem and a fold routine will not fix it. If instead the failure is softening after time in a bag with sauce, the answer is a grease-resistant option rather than more caliper.' },
      { q: 'Do these sleeves work for sandwiches as well as burgers?', a: 'They can, provided the sleeve is sized to the wrapped item rather than to a category. A sandwich with a different footprint needs its dimensions measured the same way a burger would. The format assumption stays the same: an inner wrap underneath and the sleeve as a grip layer.' },
      { q: 'What causes sleeves to snag when bagged?', a: 'Usually a cut edge catching on the bag or on another item, and it is more common with slide-on formats applied over an untidy wrap. The check takes seconds: place a sleeved item in a bag and remove it. If it catches on the way out, it will catch during service too.' },
      { q: 'Are paper burger sleeves recyclable?', a: 'That depends on the finished construction and on local facilities rather than on the material name. Any barrier treatment, the ink coverage and food residue can all affect whether fibre is recovered. Ask your supplier what has been applied to the board and check what your collection accepts.' },
      { q: 'What should I confirm before approving a quotation?', a: 'Whether an inner wrap is assumed, which format is being quoted by name, whether the board is grease-resistant, and the caliper as a number. Two suppliers can use the word "paper" for noticeably different products, so a quotation without those four fixed is not comparable on price.' },
    ],
  },

  'TBS-004': {
    sections: [
      {
        heading: 'What Fluting Actually Changes',
        blocks: [
          { t: 'p', html: 'A fluted board gets its rigidity from geometry rather than from thickness. A wavy layer runs between or behind flat liners, and the arch shape resists bending far more effectively than the same weight of solid board laid flat.' },
          { t: 'p', html: 'That is the whole argument for the construction, and it is a real one. It is also why the trade-offs arrive together: the structure that gives the stiffness occupies space, so a case of fluted sleeves takes noticeably more shelf depth than the same count of flat board, and the outer liner is a different printing surface from a smooth solid stock.' },
          { t: 'p', html: 'Nothing about fluting is free. The question on this product is whether the rigidity solves a problem you actually have, because if it does not, you are buying storage bulk and a harder print surface for no return.' },
        ],
      },
      {
        heading: 'A Note On What Is And Is Not Verified Here',
        blocks: [
          { t: 'p', html: 'This page is written more cautiously than the others in the range, and the reason is worth stating plainly rather than hiding.' },
          { t: 'p', html: 'The specification supplied for this product documents fluted options — E flute, F flute, single-face constructions and stiffer flute grades with a print-grade outer liner. None of the five product photographs currently attached to it shows fluting; all five show smooth printed board, two of them carrying third-party branding and one a stock mockup template. So the flute options are named here because the specification names them, but no thickness, no insulation figure and no thermal performance is asserted, because nothing available supports one.' },
          { t: 'p', html: 'The practical consequence for a buyer is simple: treat the flute profile as something to confirm in writing at quotation, and ask for a physical sample of the actual construction before committing to a run. That is sound advice on any structured packaging, and it is the right advice here specifically.' },
        ],
      },
      {
        heading: 'Choosing Between The Flute Options Offered',
        blocks: [
          { t: 'p', html: 'Where a fluted construction is confirmed, the profile is the main variable. Finer flutes give a flatter print surface and less bulk; coarser ones give more rigidity and more thickness. Single-face constructions — one liner with the flute exposed on the other side — sit differently again, offering grip and a visible texture rather than maximum stiffness.' },
          {
            t: 'table',
            caption: 'Fluted options as documented, and what to establish for each',
            headers: ['Option offered', 'Traded for', 'Confirm before ordering'],
            rows: [
              ['E flute', 'Finer profile; flatter surface for printing', 'Caliper as a figure, and whether it runs at your quantity'],
              ['F flute', 'Finer still; least bulk of the fluted options', 'Whether rigidity is sufficient for your heaviest build'],
              ['Single-face construction', 'Exposed flute texture and grip', 'Which face is exposed, and how it prints'],
              ['Stiffer flute grades', 'Maximum rigidity in the range', 'Storage volume per case at your order size'],
              ['Lined or barrier option', 'Slows oil reaching the fluted layer', 'Which treatment, on which face, and its effect on recovery'],
              ['Print-grade outer liner', 'A usable surface for logos and icons', 'A printed sample on the actual liner, not on flat board'],
            ],
          },
          { t: 'p', html: 'Every row in that table is a question rather than a specification, which is deliberate. A quotation that answers all six describes a product; one that says "corrugated" describes a category.' },
        ],
      },
      {
        heading: 'When The Rigidity Earns Its Cost',
        blocks: [
          { t: 'p', html: 'The case for a structured sleeve is strongest where something is currently failing in a way that stiffness fixes: sleeves arriving bent, stacks collapsing on a tray, or a heavy build bowing its sleeve enough to loosen the wrap underneath.' },
          {
            t: 'ol',
            items: [
              'Identify the specific failure and how often it actually occurs, rather than how memorable it is',
              'Check whether a heavier solid board would fix it, since that is usually cheaper and stores flatter',
              'Price the storage difference, not just the unit difference, across the quantity you hold',
              'Test a sample of the real construction loaded to your heaviest build',
              'Confirm the outer liner prints your artwork acceptably before committing',
            ],
          },
          { t: 'p', html: 'Step two is the one most often skipped and the one that most often ends the conversation. Where the answer is simply more stiffness, solid board at a higher caliper does the job with less bulk and a better print face.' },
          { t: 'p', html: 'The failures that do justify the construction cluster around transport rather than around the counter. Food moved between a kitchen and a serving point, stacked in transit and unloaded by people who did not pack it, is handled harder than anything a counter operation puts a sleeve through, which is why <a href="/product/event-burger-sleeves/">catering runs served away from the kitchen</a> are where the rigidity argument holds up most consistently.' },
        ],
      },
      {
        heading: 'The Storage Arithmetic Nobody Runs First',
        blocks: [
          { t: 'p', html: 'Fluted stock is bulkier per unit than flat board, and that cost lands on shelf space rather than on the invoice. It is easy to miss at quotation and impossible to miss once the cases arrive.' },
          { t: 'p', html: 'Work it out before ordering: take the quantity you normally hold, ask what case dimensions that becomes in the fluted construction, and check it against the space you actually have. Kitchens with a dry store absorb the difference comfortably. Operations working from a service window or a single shelf frequently cannot, and find that out on delivery day.' },
          { t: 'p', html: 'Where volume is high and space is short, ordering smaller quantities more often is the usual compromise, though it changes the price per unit and needs pricing rather than assuming.' },
        ],
      },
      {
        heading: 'Printing On A Fluted Face',
        blocks: [
          { t: 'p', html: 'The outer liner is the print surface, and it does not behave like a smooth solid board. Depending on the profile, the flute beneath can telegraph faintly through the liner as a subtle ribbing under raking light, which is most visible across large flat areas of solid colour.' },
          { t: 'p', html: 'Designs that survive this well use strong marks, bold type and defined shapes rather than delicate gradients or fine photographic detail. Fine text near the low point of a flute can also lose definition. None of that rules out good-looking packaging; it rules out treating the liner as though it were coated bright board.' },
          {
            t: 'ul',
            items: [
              'Large flat areas of solid colour show the flute pattern most, so break them up rather than fighting them',
              'Bold type holds; hairline rules and small light-weight text do not',
              'Photographic images need a smoother substrate to hold tonal range and will look muddy here',
              'Keep critical text away from the low point of the flute where definition drops',
              'Reversing a mark out of a printed area is more forgiving than printing fine detail onto the liner',
            ],
          },
          { t: 'p', html: 'Approve a printed sample on the actual liner, viewed at an angle under the lighting your service uses. A proof on flat stock will not show the effect at all.' },
        ],
      },
      {
        heading: 'Heavier Menu Items And Longer Carries',
        blocks: [
          { t: 'p', html: 'Where this construction has a natural home, it is at the top of a menu rather than across it: the tall, heavy, multi-layer builds that defeat a flat sleeve, and orders that travel far enough for bending to become likely.' },
          { t: 'p', html: 'Even there the sizing question comes first. A rigid sleeve cut to the wrong depth holds its shape beautifully around a burger that is still moving inside it, which fixes nothing. Getting the dimensions right for <a href="/product/jumbo-burger-sleeves/">the largest build on the menu</a> matters more than the construction does, and it is worth settling before the flute conversation rather than after.' },
          { t: 'p', html: 'A reasonable compromise on a mixed menu is to run a structured sleeve on the heavy items only and a flat board elsewhere. That keeps the storage penalty proportionate to the number of orders that actually need it.' },
        ],
      },
      {
        heading: 'What To Put In Writing',
        blocks: [
          { t: 'p', html: 'Because the word covers a family of constructions, this is the product in the range where a vague quotation causes the most trouble. Four things need to be explicit.' },
          { t: 'p', html: 'Name the flute profile and ask for the finished caliper as a figure. Establish whether the construction is single-face or lined on both sides. Ask what barrier treatment is included, if any, and on which face. And ask for a physical sample of the exact construction, loaded, before the run is approved. Where the requirement turns out to be stiffness alone, it is worth pricing it against <a href="/product/cardboard-burger-sleeves/">a heavier solid board at a higher caliper</a> in the same conversation, since that is the direct alternative and it stores flat.' },
          { t: 'p', html: 'On disposal, treat a fluted printed sleeve the same way as any other build: what is recovered depends on the liner, any barrier applied, ink coverage, food residue and the local facility, and none of that follows from the construction name.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is the flute profile on this product confirmed?', a: 'The supplied specification documents E flute, F flute, single-face and stiffer flute grade options. The product photographs currently attached do not show fluting. Treat the profile as something to confirm in writing at quotation and ask for a physical sample of the actual construction before committing to a run.' },
      { q: 'How is a fluted sleeve different from a heavier solid board?', a: 'A fluted board gets rigidity from the arch shape of the flute; solid board gets it from thickness. For a given stiffness the fluted option is usually lighter but bulkier in storage, and its outer liner is a less forgiving print surface than smooth solid stock.' },
      { q: 'Will a fluted sleeve keep a burger warmer?', a: 'That should not be assumed and no thermal figure is offered here. Any effect depends on the specific construction, how long the item is held and how it is bagged. If heat retention is a requirement rather than a preference, ask the supplier for supporting data for the exact build before relying on it.' },
      { q: 'What is a single-face construction?', a: 'One liner with the flute layer exposed on the other side, rather than a flute sandwiched between two liners. It gives a visible texture and grip rather than maximum rigidity. Confirm which face is exposed and how the printed side reproduces before ordering.' },
      { q: 'Which flute profile should I ask for?', a: 'Finer profiles give a flatter print surface and less bulk; coarser ones give more rigidity and more thickness. The choice follows the heaviest build the sleeve has to hold and the shelf space you have. Ask for the finished caliper as a figure rather than choosing from the profile letter alone.' },
      { q: 'Why does my artwork show faint lines across solid colour?', a: 'The flute beneath can telegraph through the outer liner as subtle ribbing, most visible across large flat areas under raking light. Bold marks and defined shapes handle it well; delicate gradients and fine photographic detail do not. Approve a printed sample on the actual liner rather than a flat proof.' },
      { q: 'Do fluted sleeves take more storage space?', a: 'Yes, and it is the cost most often missed. The structure that provides the rigidity occupies volume, so a given quantity takes more shelf depth than flat board. Work out the case dimensions for the quantity you normally hold before ordering rather than finding out on delivery.' },
      { q: 'Should the whole menu use a structured sleeve?', a: 'Rarely. The construction earns its place on tall, heavy or multi-layer builds and on orders that travel. Running it on those items and a flat board elsewhere keeps the storage penalty proportionate to the number of orders that genuinely need the rigidity.' },
      { q: 'Will a fluted sleeve stop my burger being crushed in a bag?', a: 'It resists bending better than flat board, which helps, but it is not a guarantee against crushing under a heavy item stacked on top. Bag packing order matters as much as the sleeve: heavier items below, and the burger not carrying the weight of anything else.' },
      { q: 'Can a barrier treatment be applied to a fluted sleeve?', a: 'The specification lists lined and barrier options. As with any construction, ask which treatment is applied and to which face, and note that a treatment applied for appearance is not the same as one applied to slow oil migration. Having one does not mean you have the other.' },
      { q: 'Are fluted burger sleeves recyclable?', a: 'It depends on the liner, any barrier treatment, ink coverage, food residue and what your local facility accepts. Multi-layer constructions are not automatically easier or harder to recover than single-layer ones. Confirm the finished build with your supplier rather than assuming an outcome from the material name.' },
      { q: 'What should a corrugated quotation state explicitly?', a: 'The flute profile, the finished caliper as a figure, whether the construction is single-face or lined both sides, and what barrier treatment is included and on which face. A quotation that says only "corrugated" is naming a family of constructions rather than a product, and cannot be compared on price.' },
    ],
  },
};
