/**
 * Usage group, part three.
 *   TBS-013 Grease Resistant — barrier engineering. Owns the low-absorb inner
 *                              liner, why the inner face carries no print, and
 *                              fold integrity under oil exposure. Deliberately
 *                              the barrier counterpart to TBS-012's absorbent
 *                              paper; each page names the other as the
 *                              alternative rather than restating it.
 *   TBS-014 Food Grade       — the contact question itself. Owns ink migration,
 *                              keeping ink off the food side, odour neutrality
 *                              and what "food grade" does and does not settle.
 *
 * TBS-014's inherited short description claims the product "meets strict FDA
 * regulations" and uses "certified safe materials". Nothing in the supplied data
 * supports either. The claim is flagged in CONTENT_AUDIT.md and is NOT repeated
 * here; this page says the opposite, that suitability must be confirmed in
 * writing for the finished construction.
 */

export const usage3 = {
  'TBS-013': {
    sections: [
      {
        heading: 'Slowing Oil Is Not The Same As Stopping It',
        blocks: [
          { t: 'p', html: 'A barrier build slows oil moving through paperboard. It does not stop it, and no honest specification describes it as doing so.' },
          { t: 'p', html: 'What that buys is time. Oil that would show through an untreated board in a few minutes takes considerably longer to reach the outer face, and on most menus that delay covers the whole span between assembly and the last bite. The customer never sees a stain because the meal finished first, not because the oil was permanently blocked.' },
          { t: 'p', html: 'Framing it as a delay rather than a seal matters, because it tells you what to specify against: how long your food actually sits before it is eaten. A twenty-minute delivery and a two-minute counter handover are different problems and a barrier that suits one may be unnecessary for the other.' },
        ],
      },
      {
        heading: 'The Inner Liner Is The Product',
        blocks: [
          { t: 'p', html: 'Everything that sets this construction apart is on the face nobody looks at. The specification names a barrier paper layer with a low-absorb inner liner, and that liner is where the performance lives.' },
          { t: 'p', html: 'An ordinary sleeve absorbs from the inside outward: oil meets fibre, the fibre takes it up, and the mark works its way to the visible face. A low-absorb inner surface changes the first step, so there is far less migration to travel. The outer paper is then free to be chosen for appearance and hand-feel rather than for defence.' },
          { t: 'p', html: 'That division is why this product can offer a cleaner dry-touch outer face alongside genuine oil resistance. They are two different layers doing two different jobs, which a single-layer board cannot arrange.' },
        ],
      },
      {
        heading: 'Why Grease Resistant Burger Sleeves Carry No Inner Print',
        blocks: [
          { t: 'p', html: 'The specification states outer print only and no inner print. That is a functional constraint rather than a cost saving, and it is worth understanding before someone asks for a printed interior.' },
          { t: 'p', html: 'Ink laid onto a barrier surface sits on top of it, because the surface is engineered not to absorb. That leaves the ink film exposed on the face nearest hot, oily food, where it is most likely to be disturbed and where it has the least reason to be. Printing the inside also risks interrupting the continuity of the barrier itself, which is the one property being paid for.' },
          { t: 'p', html: 'So the outer face carries the artwork, in one to four colours, and the inner face stays clean and unprinted. Anyone offering a printed interior on a barrier sleeve should be asked what it does to the barrier and to ink migration before it is accepted.' },
        ],
      },
      {
        heading: 'Folds Fail Before Faces Do',
        blocks: [
          { t: 'p', html: 'The most common barrier failure is not the panel going through. It is the crease.' },
          { t: 'p', html: 'A fold compresses and slightly fractures the surface along its line, and a barrier layer is thin. Oil that cannot cross the flat panel finds the crease, wicks along it and appears as a dark line down the fold while the rest of the sleeve looks untouched. Corner softening follows, and the sleeve loses its grip on the wrap exactly where it was holding it.' },
          { t: 'p', html: 'The specification addresses this with higher GSM options and fold integrity under oil exposure. Heavier stock takes a deeper crease without fracturing the barrier as severely, which is why weight matters more on a barrier build than on a dry one.' },
          {
            t: 'table',
            caption: 'Where oil actually gets through, and what addresses each route',
            headers: ['Route', 'How it shows', 'What addresses it'],
            rows: [
              ['Through the flat panel', 'Even darkening across a face', 'The low-absorb inner liner itself'],
              ['Along a crease', 'A dark line down the fold, panel otherwise clean', 'Higher GSM; crease depth specified for the caliper'],
              ['At a cut edge', 'Darkening creeping in from the rim', 'Edge treatment; ask what is offered'],
              ['At the corners', 'Softening where the sleeve grips the wrap', 'Heavier stock; rounded corner geometry'],
              ['Over time on a long hold', 'Gradual rather than sudden marking', 'Match the barrier to your real hold time'],
              ['From the outside', 'Marks from bag contents, not from the burger', 'Bag discipline; this is not a barrier problem'],
            ],
          },
        ],
      },
      {
        heading: 'Specifying Against Hold Time Rather Than Menu',
        blocks: [
          { t: 'p', html: 'Buyers usually decide barrier level by how greasy the food is. Hold time is the better variable, because a modestly oily item sitting for half an hour defeats a barrier that a very greasy item eaten immediately never tests.' },
          {
            t: 'ol',
            items: [
              'Time the real interval from assembly to the first bite, including staging and travel',
              'Take the longest realistic case rather than the average, since that is where complaints come from',
              'Sleeve your greasiest item and leave it for that full duration, bagged as it would be',
              'Check the flat panel, the creases, the corners and the cut edges separately',
              'Specify to the failure you saw, not to the one you expected',
            ],
          },
          { t: 'p', html: 'Step four is where most tests go wrong. People look at the face, see it clean, and approve a sleeve whose creases were already wicking.' },
        ],
      },
      {
        heading: 'The Menu Item That Tests It Hardest',
        blocks: [
          { t: 'p', html: 'Melted cheese is usually the worst case rather than the fattiest patty, because it combines oil with sustained heat and moisture and it keeps producing all three while the order waits.' },
          { t: 'p', html: 'Cheese also spreads and sticks, which puts oil in contact with a wider area of the sleeve and holds it there. A barrier that copes with a plain patty can be defeated by the same patty with cheese, and that is worth testing specifically rather than assuming the greasiest-sounding item is the hardest one. The interaction between melt and packaging is covered in more detail on <a href="/product/cheeseburger-sleeves/">the page dealing with what melting does to fit and moisture</a>, which is a sizing problem as much as a barrier one.' },
          { t: 'p', html: 'Test with the item that actually generates complaints. It is frequently not the one anyone predicted.' },
        ],
      },
      {
        heading: 'What A Barrier Costs You Besides Money',
        blocks: [
          { t: 'p', html: 'Two trade-offs come with the construction and both surprise people who specified it for performance alone.' },
          { t: 'p', html: 'The first is feel. Much of the appeal of plain paperboard is a dry, matte, papery hand, and a barrier moves the surface toward something slightly sealed. Operations that chose an unbleached look for its character sometimes find the barrier version does not feel like what they approved, which is worth handling with <a href="/product/kraft-brown-burger-sleeves/">a coated sample of the brown surface</a> before a run rather than after.' },
          { t: 'p', html: 'The second is disposal. A barrier layer can affect fibre recovery, and what happens to a treated, printed, food-contaminated sleeve depends on the finished construction and on local facilities rather than on the material name. Neither trade-off argues against the product; both argue for deciding with the sample in hand.' },
        ],
      },
      {
        heading: 'When The Answer Is Absorption Instead',
        blocks: [
          { t: 'p', html: 'A barrier is not automatically the better choice, and the cheaper alternative genuinely suits a lot of service.' },
          { t: 'p', html: 'Where food is eaten within a few minutes of handover, absorbent paper takes up the light surface oil, the hand meets dry paper, and nobody is holding the item long enough for migration to matter. That is a real solution at a lower cost, described on <a href="/product/disposable-burger-sleeves/">the single-use page built around absorbent stock</a>, and specifying a barrier over it buys time you were never going to use.' },
          { t: 'p', html: 'The barrier earns its cost when hold times are long, when items travel, or when a visible stain on a printed face would be noticed. Short, fast, dry service does not need it.' },
        ],
      },
      {
        heading: 'Sizing Still Comes First',
        blocks: [
          { t: 'p', html: 'It is possible to buy an excellent barrier and still have a sleeve that fails, because oil resistance does not fix fit.' },
          { t: 'p', html: 'A sleeve too small for the build strains at the corners, and strained corners are where the barrier fractures first. A sleeve too large lets the item shift, which drags oily wrap across the inner face repeatedly instead of leaving it in one place. Both undermine the construction that was paid for. On tall or heavy builds the geometry matters most, and <a href="/product/jumbo-burger-sleeves/">a sleeve sized around the largest builds</a> is the prerequisite rather than an upgrade.' },
          { t: 'p', html: 'Get the dimensions right first, then choose the barrier level. Doing it the other way round produces an expensive sleeve with a stain down one crease.' },
        ],
      },
    ],
    faqs: [
      { q: 'Does a grease resistant sleeve stop oil completely?', a: 'No, and it should not be described that way. A barrier slows oil moving through the board. What that buys is time — usually more than the span between assembly and the last bite. The customer sees no stain because the meal finished first, not because oil was permanently blocked.' },
      { q: 'What actually makes this different from a normal sleeve?', a: 'A low-absorb inner liner on the face nobody looks at. An ordinary board absorbs from the inside outward until the mark reaches the visible face. Changing that first step leaves far less migration to travel, and frees the outer paper to be chosen for appearance instead of defence.' },
      { q: 'Why can\'t the inside of the sleeve be printed?', a: 'Ink sits on top of a barrier surface rather than absorbing into it, leaving an exposed ink film on the face nearest hot, oily food. Printing there also risks interrupting the barrier itself, which is the property being paid for. The specification is outer print only for that reason.' },
      { q: 'Why does oil appear along the fold but not on the panel?', a: 'Because a crease compresses and slightly fractures a thin barrier layer, and oil that cannot cross the flat panel wicks along the fold instead. It is the most common barrier failure. Higher GSM stock takes a deeper crease without fracturing the barrier as severely.' },
      { q: 'Should I choose a barrier based on how greasy my food is?', a: 'Hold time is the better variable. A modestly oily item sitting half an hour defeats a barrier that a very greasy item eaten immediately never tests. Time the real interval from assembly to first bite, and take the longest realistic case rather than the average.' },
      { q: 'How should I test a barrier sample?', a: 'Sleeve your greasiest item, bag it as it would be, and leave it for your full realistic hold time. Then check the flat panel, the creases, the corners and the cut edges separately. Most tests fail by looking only at the face while the creases were already wicking.' },
      { q: 'Which menu item tests a barrier hardest?', a: 'Usually melted cheese rather than the fattiest patty, because it combines oil with sustained heat and moisture and keeps producing all three while the order waits. Cheese also spreads and sticks, holding oil against a wider area of the sleeve.' },
      { q: 'Does a barrier change how the sleeve feels?', a: 'Yes, and this catches out buyers who chose a stock for its character. Much of the appeal of plain paperboard is a dry, matte, papery hand, and a barrier moves the surface toward something slightly sealed. Handle a coated sample before approving a run.' },
      { q: 'Does a barrier sleeve affect recycling?', a: 'It can. A barrier layer influences fibre recovery, and what happens to a treated, printed, food-contaminated sleeve depends on the finished construction and on what local facilities accept. That should be checked for the specific build rather than assumed either way.' },
      { q: 'When is absorbent paper the better choice?', a: 'When food is eaten within a few minutes of handover. Absorbent stock takes up the light surface oil, the hand meets dry paper, and nobody holds the item long enough for migration to matter. A barrier then buys time you were never going to use.' },
      { q: 'Can a barrier fix a sleeve that keeps failing?', a: 'Not if the failure is fit. A sleeve too small strains at the corners, and strained corners are where a barrier fractures first. A sleeve too large lets the item shift and drags oily wrap repeatedly across the inner face. Get the dimensions right first.' },
      { q: 'Is the inner surface safe against food?', a: 'The specification lists barrier materials and approved inks intended for hot foods. As with any construction, suitability is a property of the finished build rather than the category, so ask your supplier to confirm the intended contact type in writing for the exact sleeve being supplied.' },
    ],
  },

  'TBS-014': {
    sections: [
      {
        heading: 'What The Term Settles And What It Does Not',
        blocks: [
          { t: 'p', html: '"Food grade" sounds like a certification and functions more like a category. It signals that a material was selected with food contact in mind rather than being general-purpose packaging board, and that is a genuine distinction worth having.' },
          { t: 'p', html: 'What it does not do is settle the question for a particular product. Contact suitability depends on the specific paper, the coatings, the inks, how long contact lasts, at what temperature, and whether the sleeve touches food directly or sits outside a wrap. Two sleeves can both be described as food grade and be appropriate for quite different uses.' },
          { t: 'p', html: 'So the useful posture is to treat the term as the start of a conversation. This page covers what to ask about and why each answer matters, rather than asserting an outcome no product title can guarantee.' },
        ],
      },
      {
        heading: 'Migration Is The Mechanism Behind The Question',
        blocks: [
          { t: 'p', html: 'The reason food-contact materials are treated as a separate category comes down to migration: substances moving from packaging into food.' },
          { t: 'p', html: 'It happens at very small scales and is driven by contact time, temperature, and how fatty or moist the food is. A hot, oily item in prolonged contact is the demanding case; a cool dry item touched briefly is not. That is why a sleeve\'s intended use matters as much as its material — the same board can be appropriate for one and questionable for the other.' },
          { t: 'p', html: 'Understanding it this way makes the specification questions obvious. You are asking what could move, under what conditions it might, and whether the supplier has established that it does not under yours.' },
        ],
      },
      {
        heading: 'Food Grade Burger Sleeves And Where The Ink Sits',
        blocks: [
          { t: 'p', html: 'The single most practical line in this product\'s specification is that ink is kept off the food side, with low-migration ink options available.' },
          { t: 'p', html: 'Inks are the component most likely to be raised in a contact discussion, and the simplest control is placement. If the printed face is the one facing outward and the food side is left unprinted, the primary migration path is removed by geometry rather than by chemistry. That answer holds up better than relying on the ink alone.' },
          { t: 'p', html: 'Low-migration ink sets exist for cases where printing near a contact surface is unavoidable, and they are formulated to reduce what can move. Both controls are worth having on a hot-food item. Neither is a substitute for confirming the finished construction, and a supplier who offers one should be able to say which of the two they are relying on.' },
        ],
      },
      {
        heading: 'Odour And Taste Transfer',
        blocks: [
          { t: 'p', html: 'The specification names odour neutrality and clean pulp papers, which addresses a problem most buyers never think about until a customer mentions it.' },
          { t: 'p', html: 'Paper carries a smell. Usually it is faint enough to go unnoticed, but warmth intensifies it and an enclosed bag concentrates it. A sleeve with a noticeable paper or ink odour sits next to hot food in a sealed space for several minutes, and what the customer notices is that the burger tastes faintly of packaging.' },
          { t: 'p', html: 'This is easy to check and almost never checked. Put a sample in a sealed bag with something warm for ten minutes and open it near your face. If the packaging is what you smell first, the customer will taste it, and no amount of specification review will surface that as reliably as the test does.' },
        ],
      },
      {
        heading: 'Heat, Hold Time And Why Both Are Stated Together',
        blocks: [
          { t: 'p', html: 'The specification lists suitability for hot serving alongside a note that short hold times are typical, and those two belong together rather than being read separately.' },
          { t: 'p', html: 'Migration rises with both temperature and duration. A material appropriate for hot food held briefly is not automatically appropriate for the same food held for an hour, which is why the qualifier is attached. It is a scope statement, not marketing.' },
          {
            t: 'table',
            caption: 'What to ask a supplier, and why the answer matters',
            headers: ['Question', 'Why it matters', 'What a weak answer looks like'],
            rows: [
              ['Is this specified for direct contact, or outside a wrap?', 'Different uses need different confirmation', '"It\'s food grade" without naming the use'],
              ['Which face carries ink, and is the contact face unprinted?', 'Placement removes the main migration path', 'Uncertainty about which side prints'],
              ['Are low-migration inks used, and on what basis?', 'The main chemical control where print is near food', '"Approved inks" with nothing further'],
              ['What contact temperature and duration is this scoped for?', 'Migration rises with both', 'A claim with no conditions attached'],
              ['Will you confirm suitability in writing for this build?', 'Suitability is a property of the finished construction', 'Verbal assurance only'],
              ['Does any coating or barrier change the answer?', 'Treatments alter the contact surface', 'The coating being treated as unrelated'],
            ],
          },
        ],
      },
      {
        heading: 'Direct Contact Or Outside A Wrap',
        blocks: [
          { t: 'p', html: 'This is the first thing to establish and it changes everything after it, yet it is the thing most often left implicit.' },
          { t: 'p', html: 'Where a sleeve sits outside an inner wrap, the wrap is the contact layer and the sleeve\'s requirements are considerably narrower. Where the sleeve touches the food itself, it becomes the contact material and the whole set of questions applies to it directly.' },
          { t: 'p', html: 'The trap is operational drift. A business specifies sleeves for use over a wrap, then during a busy period staff start handing items out without the wrap, and packaging chosen for one role is quietly performing another. "We use a wrap" is a habit rather than a specification, and if the sleeve may ever meet food directly the confirmation should be obtained for that case.' },
        ],
      },
      {
        heading: 'Choosing A Stock That Suits Contact Use',
        blocks: [
          { t: 'p', html: 'Contact-appropriate stock is not automatically the most impressive-looking board, and a few characteristics matter more here than they would elsewhere.' },
          {
            t: 'ul',
            items: [
              'A clean, neutral pulp with no strong inherent smell of its own',
              'An unprinted contact face, so ink placement rather than ink chemistry does the work',
              'A predictable surface, since heavy texture on a contact face traps residue',
              'Consistency between batches, so a confirmation obtained once still describes later deliveries',
              'A supplier able to state what changes if a coating or barrier is added',
            ],
          },
          { t: 'p', html: 'Bright white stock is common on contact-facing packaging because it shows contamination rather than hiding it, which is an operational advantage even though it marks more readily. Where that matters more than a forgiving surface, <a href="/product/white-burger-sleeves/">a bright board that reports marks rather than concealing them</a> is the deliberate choice, and the trade against showing grease is the price of it.' },
        ],
      },
      {
        heading: 'Printing Without Undermining The Specification',
        blocks: [
          { t: 'p', html: 'Branding and contact suitability are not in conflict, but they interact, and the interaction is easiest to manage at the design stage.' },
          { t: 'p', html: 'Keep artwork on the outward face, avoid designs that wrap around onto a contact surface, and be cautious about heavy coverage near cut edges that sit against food. None of that meaningfully constrains a good layout; it constrains a careless one. The general mechanics of how ink, board and press interact are covered on <a href="/product/printed-burger-sleeves/">the page dealing with the production relationship</a>, and the contact-specific rule is simply that placement comes before everything else.' },
          { t: 'p', html: 'Where a design genuinely requires print near a contact surface, that is the moment to ask about low-migration ink sets rather than to proceed and hope.' },
        ],
      },
      {
        heading: 'Documentation Is The Deliverable',
        blocks: [
          { t: 'p', html: 'The output of a contact conversation should be a written statement covering the exact construction: the paper, any coating or barrier, the ink system, the intended contact type, and the temperature and duration it is scoped for.' },
          { t: 'p', html: 'That document is what makes the specification real. A product title, a category page or a verbal assurance are none of them evidence, and if a customer or an inspector asks, the written scope is the only thing that answers. It is worth obtaining before volume rather than after, and worth re-obtaining when a board or supplier changes.' },
          { t: 'p', html: 'The same discipline applies to any environmental wording on the same packaging: state only what is documented for the build supplied. Where fibre source is part of that conversation, <a href="/product/recycled-burger-sleeves/">the page on reclaimed fibre and its evidence</a> sets out how to get a figure worth holding rather than a general assurance.' },
        ],
      },
    ],
    faqs: [
      { q: 'Does "food grade" mean the sleeve is certified?', a: 'Not by itself. It signals that a material was selected with food contact in mind rather than being general-purpose board, which is a real distinction. It does not settle suitability for a particular use, because that depends on the paper, coatings, inks, contact time and temperature.' },
      { q: 'Are these sleeves FDA approved?', a: 'No such approval is claimed here, and nothing in the available product documentation establishes one. If a specific regulatory position is required for your business, request written confirmation from the supplier covering the exact construction rather than relying on a product name or category description.' },
      { q: 'What is migration and why does it matter?', a: 'It is substances moving from packaging into food at very small scales, driven by contact time, temperature and how fatty or moist the food is. A hot oily item in prolonged contact is the demanding case; a cool dry item touched briefly is not. It is why intended use matters as much as material.' },
      { q: 'Where should ink sit on a food contact sleeve?', a: 'On the outward face, with the food side left unprinted. Placement removes the main migration path by geometry rather than relying on ink chemistry, which is the more robust control. Low-migration ink sets exist for cases where printing near a contact surface is unavoidable.' },
      { q: 'Can packaging make food taste different?', a: 'It can. Paper carries a faint smell that warmth intensifies and a sealed bag concentrates. Test it: put a sample in a closed bag with something warm for ten minutes and open it near your face. If you smell the packaging first, a customer will taste it.' },
      { q: 'Why does the specification mention short hold times?', a: 'Because migration rises with both temperature and duration, so a scope statement for hot food is incomplete without one. A material appropriate for hot food held briefly is not automatically appropriate for the same food held for an hour. It is a scope note rather than marketing.' },
      { q: 'Does it matter whether the sleeve touches food directly?', a: 'It changes everything. Over an inner wrap, the wrap is the contact layer and the sleeve\'s requirements are much narrower. Touching food, the sleeve becomes the contact material and the full set of questions applies to it directly.' },
      { q: 'We use an inner wrap, so is this still relevant?', a: 'Yes, because of operational drift. A business specifies sleeves for use over a wrap, then during a rush staff hand items out without one, and packaging chosen for one role performs another. "We use a wrap" is a habit rather than a specification.' },
      { q: 'What stock characteristics suit contact use?', a: 'A clean neutral pulp with no strong smell, an unprinted contact face, a predictable surface that does not trap residue, batch consistency so a confirmation still describes later deliveries, and a supplier who can say what changes if a coating or barrier is added.' },
      { q: 'Why is bright white common on contact-facing packaging?', a: 'Because it shows contamination rather than hiding it, which is an operational advantage. The trade is that it also reports every grease mark, so it is a deliberate choice between a surface that reveals problems and one that conceals them.' },
      { q: 'Does adding a barrier coating change the contact position?', a: 'It can, because a treatment alters the surface that meets the food. Any coating or barrier should be part of the confirmation rather than treated as unrelated to it. Ask specifically what the treatment is, which face it covers, and whether the scope still holds with it applied.' },
      { q: 'What documentation should I actually ask for?', a: 'A written statement covering the exact construction — the paper, any coating or barrier, the ink system, the intended contact type, and the temperature and duration it is scoped for. Obtain it before volume, and again whenever the board or supplier changes.' },
    ],
  },
};
