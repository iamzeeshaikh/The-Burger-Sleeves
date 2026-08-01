/**
 * Customized group, part one.
 *
 * Intent boundaries are kept strict because these eight pages sit closest
 * together in the catalogue:
 *   TBS-015 Custom       — the decision hub: structure + size + material + print
 *   TBS-017 Branded      — brand system across a packaging set, not printing
 *   TBS-018 Logo Printed — placement, clear space, legibility in the hand
 */

export const custom = {
  // --------------------------------------------------------------- CUSTOM
  'TBS-015': {
    sections: [
      {
        heading: 'Five Decisions That Define A Bespoke Sleeve',
        blocks: [
          { t: 'p', html: 'A custom sleeve is not one choice but five, and they are not independent. Dimensions constrain which boards behave well. Board choice constrains print quality. A barrier treatment changes hand-feel. Structure affects assembly time. Print coverage affects cost at every quantity.' },
          { t: 'p', html: 'Buyers who work through them in that order tend to get a specification that holds together. Buyers who start with the artwork usually find that a decision made early for visual reasons has quietly ruled out something they needed operationally.' },
          { t: 'p', html: 'The sequence matters because the constraints run one way. You can design artwork around a board; you cannot easily change board to rescue artwork once the dimensions and structure are fixed. Settle the physical questions, then the visual ones.' },
          {
            t: 'table',
            caption: 'How each customisation decision constrains the next',
            headers: ['Decision', 'Set by', 'What it constrains downstream'],
            rows: [
              ['Internal dimensions', 'The finished, wrapped build', 'Which calipers stay rigid at that span'],
              ['Board and caliper', 'Weight and grease of the build', 'Print sharpness and fold behaviour'],
              ['Barrier treatment', 'How wet the menu is', 'Surface feel and finishing options'],
              ['Structure and closure', 'Assembly speed and handling', 'Where artwork can safely sit'],
              ['Print coverage', 'Brand and budget', 'Unit cost at every quantity'],
            ],
          },
        ],
      },
      {
        heading: 'Measuring Before Anyone Draws Anything',
        blocks: [
          { t: 'p', html: 'Every bespoke job starts with a measurement, and the most common cause of a disappointing first run is measuring the wrong thing. A sleeve is sized against the finished item as it leaves the kitchen, not against a bun on a tray.' },
          {
            t: 'ol',
            items: [
              'Assemble the item exactly as it is served, including any inner wrap',
              'Measure the width at the widest point, which is rarely the base',
              'Measure the height at the tallest point rather than an average',
              'Note the approximate weight, since it changes the board recommendation',
              'Record how far the sleeve travels and whether it is bagged',
              'Photograph the assembled build beside a ruler and send that with the figures',
            ],
          },
          { t: 'p', html: 'State your intended clearance as a separate number rather than folding it into the measurement. A supplier needs to know which part is food and which part is allowance, because that determines how a change in board thickness gets absorbed.' },
          { t: 'p', html: 'Where several menu items will share one sleeve, measure the extremes rather than a representative build. A sleeve sized to the average will rattle around the smallest and crush the largest, and both faults appear in service rather than at approval. Where those extremes land close together, it is worth checking <a href="/product-category/burger-sleeves-sizes/">the standard size bands already in the range</a> before commissioning a tool of your own.' },
        ],
      },
      {
        heading: 'Choosing Structure Against Assembly Time',
        blocks: [
          { t: 'p', html: 'Structure is where bespoke work most often over-reaches. An engineered sleeve with tabs and locks looks impressive as a drawing and costs seconds per unit at the counter, every order, for as long as the packaging is in use.' },
          { t: 'p', html: 'That is worth paying when the structure solves a real problem — a build that will not stay together, a delivery that keeps arriving open, a stack that collapses on a tray. It is not worth paying because the option existed.' },
          { t: 'p', html: 'A useful test is to describe what would go wrong with a simpler sleeve. If the answer is specific, the structure is earning its cost. If the answer is that it would look less considered, a simpler form and better print will usually serve the same goal for less. Where the structure genuinely is the point, <a href="/product/die-cut-burger-sleeves/">shaped tooling with tabs, locks and defined cut lines</a> is the route rather than a heavier plain sleeve.' },
        ],
      },
      {
        heading: 'Material And Barrier As One Decision',
        blocks: [
          { t: 'p', html: 'Board and barrier get quoted separately and behave as one thing. A stiff board that absorbs oil quickly will soften under a wet build; a lighter board with a barrier treatment can outperform it in service while costing less.' },
          { t: 'p', html: 'The honest question is how wet the menu actually is, judged from what leaves the kitchen rather than from the recipe. Sauced builds, melted cheese and anything held under a lid all produce more liquid than the description suggests.' },
          { t: 'p', html: 'It is also worth being clear about what a barrier does. It slows oil moving into fibre. It does not make paperboard leakproof, waterproof or suitable as a container, and any supplier describing it that way is overselling. An inner greaseproof wrap remains the primary defence on wet items.' },
          { t: 'p', html: 'Surface feel changes with treatment too, which catches out buyers who chose a stock for its hand-feel. Comparing the options side by side is easier than reasoning about them, and <a href="/product-category/burger-sleeves-materials/">the range of board and fibre choices available</a> is the practical place to start that comparison.' },
          {
            t: 'ul',
            items: [
              'Board stiffness and grease resistance are separate properties',
              'A lighter treated board can outperform a heavier untreated one in service',
              'Barrier treatments slow absorption; they do not seal the sleeve',
              'Any coating alters surface feel, which matters if you chose the stock for its texture',
              'Judge wetness from what leaves the kitchen, not from the recipe',
            ],
          },
        ],
      },
      {
        heading: 'Getting A Quotation That Means Something',
        blocks: [
          { t: 'p', html: 'A bespoke quotation is only as useful as the brief behind it. Ask for a price without settling dimensions, board, structure and coverage and you will get a number that changes as soon as any of those is pinned down.' },
          { t: 'p', html: 'Bring the measurements, the weight, an honest description of how greasy the build is, the artwork coverage you want and a realistic first-order quantity. Those five things let a supplier quote something you can actually compare against another quote.' },
          { t: 'p', html: 'Ask what is not included as well. Tooling for a shaped sleeve, physical samples, proofing rounds and artwork adjustments are all things that may sit outside a headline unit price, and finding out at invoice stage is avoidable. Sending the full brief through <a href="/get-free-quote/">the quotation form where dimensions, board and print are captured together</a> keeps all of it in one place.' },
        ],
      },
      {
        heading: 'Prototyping Before Committing To A Run',
        blocks: [
          { t: 'p', html: 'Bespoke work benefits from one round of physical iteration more than from any amount of drawing review. A cut sample in the hand answers questions that a specification cannot: whether the tab binds, whether the crease cracks, whether the burger actually goes in without being pushed.' },
          { t: 'p', html: 'The useful test is not performed by the person who commissioned the packaging. Give the samples to the people who will assemble them during a rush and to a few customers who will hold them while eating, and watch rather than ask. What people do with a sleeve is more informative than what they say about it.' },
          { t: 'p', html: 'Expect the first sample to be wrong in at least one respect. That is what the round is for. A specification that survives contact with a real burger unchanged is unusual, and treating the first sample as a proposal rather than a proof avoids the temptation to accept something that nearly works.' },
          { t: 'p', html: 'Change one variable at a time between rounds where possible. Adjusting board, dimensions and closure together produces a better sample without telling you which change mattered, which makes the next specification harder rather than easier.' },
          {
            t: 'ul',
            items: [
              'A cut sample answers questions a drawing cannot',
              'Test with the people who assemble and the people who hold it',
              'Expect the first sample to be wrong somewhere; that is its purpose',
              'Change one variable at a time so you learn what mattered',
              'Load a real burger rather than judging an empty sleeve',
            ],
          },
        ],
      },
      {
        heading: 'Reordering Without Re-Specifying',
        blocks: [
          { t: 'p', html: 'The point of settling a bespoke specification carefully is that the second order should be straightforward. That only holds if the specification was written down properly, which is more often the gap than the original decision-making.' },
          { t: 'p', html: 'A usable record covers internal dimensions and the clearance they include, board grade and caliper, any barrier treatment, the structure or tooling reference, ink count and finish, and the approved artwork version. Kept together, that turns a reorder into a confirmation rather than a conversation.' },
          { t: 'p', html: 'Retaining a physical sample alongside it matters as much. Written figures describe an intention; the sample records what was actually accepted, including the things nobody thought to specify, such as board shade or how the surface feels.' },
        ],
      },
    ],
    faqs: [
      { q: 'What order should I make customisation decisions in?', a: 'Physical first, visual second. Internal dimensions set which boards stay rigid; board sets print sharpness and fold behaviour; barrier changes surface feel; structure affects assembly time and where artwork can sit; coverage affects cost. You can design artwork around a board, but you cannot easily change board to rescue artwork later.' },
      { q: 'What measurements does a bespoke sleeve actually need?', a: 'Width at the widest point of the finished, wrapped build, height at the tallest point, approximate weight, and how far the sleeve travels. Measure the item as it leaves the kitchen rather than a bun on a tray, and photograph it beside a ruler to send with the figures.' },
      { q: 'Should I include clearance in the measurement I send?', a: 'No — state it separately. A supplier needs to know which part of the figure is food and which is allowance, because that determines how a change in board thickness is absorbed. A single combined number hides the information they need.' },
      { q: 'How do I size one sleeve for several menu items?', a: 'Measure the extremes rather than a representative build. A sleeve sized to the average rattles around the smallest item and crushes the largest, and both faults appear in service rather than at approval. The smallest and largest set the boundaries the sleeve must live between.' },
      { q: 'When is an engineered structure worth the cost?', a: 'When you can describe specifically what goes wrong without it — a build that will not hold together, deliveries arriving open, stacks collapsing on a tray. If the only answer is that a simpler sleeve looks less considered, better print on a simpler form usually serves the same goal for less.' },
      { q: 'Does a structural sleeve slow down service?', a: 'It generally adds seconds per unit at assembly, every order, for the life of the packaging. That is worth measuring before committing rather than after. Time ten assemblies with the person who will actually do it during a busy period.' },
      { q: 'Are board stiffness and grease resistance the same thing?', a: 'No, and treating them as one is a common mistake. A stiff board that absorbs oil quickly will soften under a wet build, while a lighter treated board can outperform it in service for less money. Decide how wet the menu is before choosing caliper.' },
      { q: 'Can a custom sleeve be made leakproof?', a: 'No, and it should not be described that way. A barrier treatment slows oil moving into the fibre; it does not seal the sleeve or make paperboard suitable as a container. On wet builds an inner greaseproof wrap remains the primary defence.' },
      { q: 'Will a coating change how the sleeve feels?', a: 'Yes, and that catches out buyers who chose a stock for its texture. Treatments move an uncoated, papery surface towards something slightly sealed. If hand-feel was part of the reason for a board choice, handle a treated sample before ordering.' },
      { q: 'What information makes a bespoke quotation comparable?', a: 'Measurements, approximate weight, an honest description of how greasy the build is, the artwork coverage you want and a realistic first-order quantity. Without those a price will move as soon as any of them is pinned down, and two quotes cannot be compared.' },
      { q: 'What costs sit outside a headline unit price?', a: 'Tooling for a shaped sleeve, physical samples, proofing rounds and artwork adjustments may all be quoted separately. Ask what is excluded as well as what is included, because finding out at invoice stage is avoidable with one question.' },
      { q: 'Should I approve artwork before or after a physical sample?', a: 'After. A flat visual cannot show how artwork sits once the sleeve is folded, whether a fold lands across something important, or how the board affects printed colour. Approve a physical sample of the actual construction wherever the process allows it.' },
      { q: 'How much does changing one decision affect the rest?', a: 'More than most buyers expect. Moving to a heavier caliper reduces internal space and changes fold behaviour. Adding a barrier changes surface feel and finishing options. Increasing coverage changes cost at every quantity. Treat the specification as one system rather than a list.' },
    ],
  },

  // -------------------------------------------------------------- BRANDED
  'TBS-017': {
    sections: [
      {
        heading: 'A Sleeve Is One Item In A Set',
        blocks: [
          { t: 'p', html: 'Branding a burger sleeve is rarely a standalone job. It joins bags, cups, napkins, boxes and whatever else already carries the identity, and its job is to look like it belongs to those rather than to look good on its own.' },
          { t: 'p', html: 'That reframes the brief. The question is not whether the sleeve looks strong in isolation, but whether a table holding a sleeve, a bag and a cup reads as one business. A sleeve that is the most attractive item on the tray, and clearly from a different design system, has failed.' },
          { t: 'p', html: 'Substrate is why this is harder than it sounds. A cup is coated and often lined, a bag is absorbent, a sleeve sits between them. The same ink lands differently on each, so exact colour matching across a set is usually neither achievable nor worth the money spent chasing it. Where a photographic or multi-colour identity has to reproduce closely, <a href="/product/full-color-burger-sleeves/">process printing and the substrate it depends on</a> sets the realistic limits.' },
        ],
      },
      {
        heading: 'What To Fix And What To Let Vary',
        blocks: [
          { t: 'p', html: 'Coherence comes from fixing a small number of things rigidly and allowing the rest to move. Brands that try to fix everything end up with a set that still does not match, because the variables they cannot control were never the ones carrying recognition.' },
          { t: 'p', html: 'The elements worth fixing are typographic and structural: the wordmark, the typeface and weight, the relationship between logo size and panel, and the proportion of the panel left empty. Those survive substrate changes intact. Colour, surface sheen and fine detail all shift between materials and are better treated as approximate.' },
          {
            t: 'table',
            caption: 'Brand elements by panel and how tightly to control them',
            headers: ['Panel', 'What it carries', 'Control level'],
            rows: [
              ['Customer-facing front', 'Primary mark and its clear space', 'Fixed — position and proportion'],
              ['Side panels', 'Secondary marks, menu identifiers', 'Fixed layout, flexible content'],
              ['Base or underside', 'Nothing customer-facing', 'Leave clear; it gets marked'],
              ['Grip zone', 'Nothing that must be read', 'Keep empty by design'],
              ['Inner face', 'Rarely printed', 'Only if genuinely visible in use'],
            ],
          },
          { t: 'p', html: 'The grip zone is the one most often ignored. Whatever sits where a hand closes is hidden for the whole meal, so a mark placed there is paid for and never seen. Establishing that zone early removes a recurring argument with designers.' },
        ],
      },
      {
        heading: 'Holding A Brand Together Across Locations',
        blocks: [
          { t: 'p', html: 'A single site can keep packaging consistent by memory. A group cannot. Once several locations reorder independently, drift appears through substitutions, reprints and whichever supplier was quickest that month. Groups running mixed formats have it harder again, because the same identity is handed across a dining room counter and out of a service window, where <a href="/product/food-truck-burger-sleeves/">sleeves specified for mobile units</a> meet quicker handling and far less shelter.' },
          { t: 'p', html: 'The practical control is a retained physical sample rather than a written specification. Colour references in a brand book describe an intention; a printed sleeve from the approved run describes what was actually accepted, and it is the only thing a printer can match against reliably.' },
          {
            t: 'ul',
            items: [
              'Keep an approved physical sample, not just a colour reference',
              'Check every reorder against it before the previous stock runs out',
              'Record which supplier and board the approved sample came from',
              'Reorder related packaging items at similar times where possible',
              'Re-approve whenever board, supplier or artwork changes at any site',
            ],
          },
          { t: 'p', html: 'Reordering the set together matters more than it appears. Drift usually becomes visible when one item is reprinted alone and then sits beside older stock, and staggered reordering guarantees that happens eventually.' },
        ],
      },
      {
        heading: 'Evergreen Packaging Versus Campaign Packaging',
        blocks: [
          { t: 'p', html: 'Most operators end up running two kinds of branded sleeve: an evergreen one that carries the identity indefinitely, and campaign versions that exist for a defined period. Confusing the two is expensive in both directions.' },
          { t: 'p', html: 'Evergreen packaging should be conservative, because it has to survive menu changes, seasonal shifts and whatever marketing does next. Dated references, specific offers and seasonal colours all shorten its useful life without adding anything to the identity.' },
          { t: 'p', html: 'Campaign packaging can carry all of that, provided the underlying brand elements stay recognisable. The set works when a campaign sleeve and an evergreen sleeve sitting on the same table clearly come from the same business, and the difference is one panel rather than the whole item.' },
          { t: 'p', html: 'Where a business runs frequent short promotions, keeping the evergreen design restrained makes each campaign easier to layer on top. That tends to push brands towards fewer inks and more space, which is the territory <a href="/product/minimal-design-burger-sleeves/">restrained layouts built around negative space</a> occupies.' },
        ],
      },
      {
        heading: 'Using Packaging To Identify Menu Items',
        blocks: [
          { t: 'p', html: 'A branded sleeve can carry operational information as well as identity, and doing both well is a layout problem rather than a design one. Staff need to distinguish builds at speed; customers need to recognise the brand. Those two jobs want different parts of the panel.' },
          { t: 'p', html: 'Identification works best when it is a consistent element in a consistent position — an icon, a colour block, a printed word — rather than something integrated into the artwork. Consistency of position is what lets a server read it without looking directly at it.' },
          { t: 'p', html: 'It also has to be readable from above, since that is the angle a loaded tray is seen from. A marker on the face panel disappears the moment the sleeve is set down flat, which is exactly when it is needed.' },
          { t: 'p', html: 'Where identification needs to change often, printing it into the sleeve stops being practical and a separate applied element serves better. Where it is stable, building it into the artwork is cheaper and looks deliberate. Restaurants working through this usually settle it alongside <a href="/product/cafe-burger-sleeves/">how packaging behaves across mixed dine-in and takeaway service</a>, since the two questions interact.' },
        ],
      },
      {
        heading: 'Typography Travels Better Than Colour',
        blocks: [
          { t: 'p', html: 'Of everything in a brand system, typography is the element that survives moving between packaging materials most intact. A typeface set at a given weight and size looks the same on a coated cup, an absorbent bag and a board sleeve, whereas the colour beside it shifts on all three.' },
          { t: 'p', html: 'That makes type the most reliable carrier of recognition across a set, and it is usually underused. Brands spend a great deal of effort matching colour across substrates and comparatively little defining how type should be scaled, spaced and weighted on each item.' },
          { t: 'p', html: 'A workable rule is to define relationships rather than absolute sizes. The wordmark occupies a fixed proportion of the panel width; secondary text sits at a fixed ratio to it; the space above and below is expressed in multiples of the type size. Those hold when the panel changes shape, and absolute point sizes do not.' },
          { t: 'p', html: 'Weight deserves specific attention on packaging because reading conditions are poor. Warm lighting, a curved surface, a hand partly covering the panel and a customer glancing rather than reading all favour heavier weights than a brand would use in print. Testing type at final size on the actual board settles it quickly.' },
        ],
      },
      {
        heading: 'When The Brand Changes',
        blocks: [
          { t: 'p', html: 'Identities get refreshed, and packaging is usually the last item to be updated and the largest quantity in stock. Planning for that at the point of ordering costs nothing and prevents a rebrand from stranding a year of sleeves.' },
          { t: 'p', html: 'The practical control is quantity rather than design. Where a refresh is known to be coming, ordering shorter and more often through the transition period costs a little more per unit and avoids writing off the difference.' },
          { t: 'p', html: 'Sequencing helps too. Changing the highest-visibility item first and letting slower-moving stock run down keeps the set broadly coherent during the transition, whereas changing everything at once guarantees a period where old and new sit side by side on the same tray.' },
        ],
      },
    ],
    faqs: [
      { q: 'Should my sleeve match my cups and bags exactly?', a: 'Matching exactly is usually neither achievable nor worth the spend. A cup is coated and often lined, a bag is absorbent, and a sleeve sits between them, so the same ink lands differently on each. Match typography, proportion and the amount of empty space instead, and treat colour as approximate.' },
      { q: 'Which brand elements should be controlled most tightly?', a: 'The typographic and structural ones — wordmark, typeface and weight, the relationship between logo size and panel, and how much of the panel stays empty. Those survive substrate changes intact. Colour, sheen and fine detail shift between materials and are better treated as approximate.' },
      { q: 'Where should nothing be printed on a sleeve?', a: 'The grip zone and the base. Whatever sits where a hand closes is hidden for the entire meal, and the underside gets marked in service. Establishing both as deliberately empty early on removes a recurring argument during design.' },
      { q: 'How do I stop branding drifting across locations?', a: 'Keep a retained physical sample from the approved run and check every reorder against it. A colour reference in a brand book describes an intention; a printed sleeve describes what was actually accepted, and it is the only thing a printer can reliably match.' },
      { q: 'Why does packaging stop matching over time?', a: 'Usually because items are reprinted separately and then sit beside older stock. Reordering related packaging at similar times, and recording which supplier and board each approved sample came from, prevents most of it.' },
      { q: 'Should evergreen and campaign sleeves look the same?', a: 'They should share the underlying identity and differ in one defined zone. A campaign sleeve and an everyday sleeve on the same table should clearly come from the same business, with the difference being a panel rather than the whole item.' },
      { q: 'What should be kept off evergreen packaging?', a: 'Dates, specific offers and seasonal colours. Evergreen stock has to survive menu changes and whatever marketing does next, and anything time-bound shortens its useful life without strengthening the identity. Keep those for campaign runs.' },
      { q: 'Can a branded sleeve also identify menu items?', a: 'Yes, but treat it as a layout problem. Identification works best as a consistent element in a consistent position — an icon, a colour block, a word — rather than something woven into the artwork. Consistent position is what lets staff read it without looking directly.' },
      { q: 'Where should a menu identifier be placed?', a: 'Somewhere readable from above, because that is the angle a loaded tray is viewed from. A marker on the face panel disappears the moment the sleeve is set down flat, which is exactly when a server needs it.' },
      { q: 'Should identification be printed or applied?', a: 'Printed when it is stable, since it is cheaper and looks deliberate. Applied when it changes often, because reprinting the sleeve every time a menu shifts is impractical. The deciding question is how frequently the identifiers actually change.' },
      { q: 'How many inks does a branded sleeve need?', a: 'Fewer than most briefs assume. A restrained evergreen design is easier to layer campaign artwork onto, holds up better across substrates, and costs less at every quantity. Add inks when the identity genuinely requires them rather than because more are available.' },
      { q: 'How often should branded packaging be reviewed?', a: 'Whenever the board, supplier or artwork changes at any location, rather than on a schedule. Those three events are what actually cause drift, and reviewing against a retained sample at those points catches it before a full run is produced.' },
    ],
  },
};
