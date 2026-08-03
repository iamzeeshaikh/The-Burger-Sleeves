/**
 * Combo group, part one.
 *   TBS-041 Burger and Fries — the COMBO-ORDER WORKFLOW, not a combined carrier.
 *        No compartment, divider, fry pocket or two-part structure is claimed.
 *        All four product images show a single-burger sleeve or wrap; the
 *        "holds both burgers and fries in one compact sleeve" line in the
 *        inherited short description is unsupported by every image and by the
 *        rest of the specification. Flagged in CONTENT_AUDIT.md. This page is
 *        about pairing two items through one order instead.
 *   TBS-042 Burger Wrapping — VERIFIED as an outer sleeve over an inner wrap,
 *        not wrapping paper. Its spec says "designed to sit over inner wrap
 *        without slipping" and "sized by wrapped width and height with slide on
 *        clearance". The page owns the two-layer relationship.
 *
 * No leakproof, waterproof, guaranteed grease resistance, FDA, certification,
 * microwave, oven, compostability, recyclability, MOQ, price, shipping or
 * turnaround claim appears here.
 */

export const combo = {
  'TBS-041': {
    sections: [
      {
        heading: 'What This Product Is, Stated Plainly',
        blocks: [
          { t: 'p', html: 'This is a burger sleeve used inside an order that also contains fries. It is not a two-part carrier: there is no fry compartment, no divider and no attached pocket, and nothing in the product photography or the specification describes one.' },
          { t: 'p', html: 'That is worth saying at the top because the name invites the other reading. What the product actually offers a combo operation is a sleeve chosen with the second item in mind — sized, surfaced and specified knowing that fries are travelling alongside it in the same bag, on the same tray, handled by the same person in the same few seconds.' },
          { t: 'p', html: 'That turns out to be a real problem worth solving. Most combo failures are not failures of the sleeve; they are failures of how two items were packed together, and the sleeve is one of the few variables you control.' },
        ],
      },
      {
        heading: 'Two Items, One Pair Of Hands, A Few Seconds',
        blocks: [
          { t: 'p', html: 'A combo order doubles the packing work but does not double the time available. Staff assemble a burger, sleeve it, portion fries, and bag both while the next order is already forming behind it.' },
          { t: 'p', html: 'The sequence matters more than any single component. Fries portioned first go cold while the burger is assembled; fries portioned last leave the burger sitting. Both are avoidable with a fixed order of operations, and neither is fixed by buying better packaging.' },
          { t: 'p', html: 'What the sleeve contributes is one less decision. A sleeve that goes on in one motion and does not have to be lined up carefully takes the packaging step out of the critical path, leaving the timing problem to be solved where it actually lives.' },
        ],
      },
      {
        heading: 'Salt And Oil Move Between Items',
        blocks: [
          { t: 'p', html: 'This is the crossover nobody plans for. Fries arrive salted and oiled, and in a closed bag that transfers — to the outside of the burger wrap, to the sleeve face, and to hands reaching in.' },
          { t: 'p', html: 'The result is a burger sleeve that looks handled before anyone has touched it, and it is usually blamed on the burger rather than on the fries sitting beside it. A pale coated face reports this most; an unbleached or textured stock absorbs the visual damage far better.' },
          { t: 'p', html: 'The specification offers grease-resistant board and barrier coating for the sleeve, but the more effective fix is separation: fries in their own container, positioned so their open top is not pressed against the sleeve face. That costs nothing and solves more than a surface upgrade will.' },
        ],
      },
      {
        heading: 'Packing A Burger And Fries Sleeves Order Into One Bag',
        blocks: [
          { t: 'p', html: 'Bag order is the single largest lever on how a combo arrives, and it is free to change.' },
          {
            t: 'ol',
            items: [
              'Fries upright and against the bag wall, so the open top is not tipping toward the burger',
              'The sleeved burger flat on the base, carrying no weight from anything above it',
              'Sauce sachets tucked at the side rather than resting on the sleeve face',
              'Nothing stacked on the burger, however tempting the remaining space looks',
              'The bag folded rather than left open, so the fries cannot tip during the carry',
            ],
          },
          { t: 'p', html: 'Step two is the one that gets reversed under pressure, because a burger is flat and looks like a base to stack on. It is the item least able to take weight, and a bowed sleeve loosens the wrap underneath it.' },
        ],
      },
      {
        heading: 'Portion Pairing And What The Sleeve Has To Match',
        blocks: [
          { t: 'p', html: 'Combos are usually sold as tiers, and each tier pairs a burger with a fry portion. The burger side of that pairing is what determines the sleeve, and it is easy to specify against the wrong tier.' },
          { t: 'p', html: 'A menu with a standard combo and a large combo may use the same burger in both, in which case one sleeve covers the range. Where the large tier upgrades the burger as well as the fries, the sleeve has to cover two different builds, and sizing to the smaller one produces a strained fit at the top of the menu.' },
          { t: 'p', html: 'Work it out from the combo matrix rather than from the burger menu. Operations selling the upper tier in genuine volume often find that <a href="/product/large-burger-sleeves/">a sleeve specified for a heavier build</a> earns its own line, while the standard tier runs on a lighter one.' },
          {
            t: 'table',
            caption: 'Combo packing decisions and what each one settles',
            headers: ['Decision', 'The problem it addresses', 'Cost of getting it wrong'],
            rows: [
              ['Fry container upright, against the wall', 'Salt and oil reaching the sleeve face', 'A sleeve that looks handled on arrival'],
              ['Burger flat on the base, unweighted', 'Bowing under a stacked item', 'The wrap works loose in transit'],
              ['Fixed assembly sequence', 'One item going cold while the other is made', 'Whichever item was made first arrives worse'],
              ['Sleeve sized to the upper combo tier', 'A strained fit on the larger build', 'Buckled corners on the tier that costs most'],
              ['Forgiving surface on the sleeve face', 'Visible oil transfer from the fries', 'Presentation degrades before handover'],
              ['Distinct sleeve print per tier', 'Combos confused at the counter', 'Wrong order handed over; remake and refund'],
            ],
          },
        ],
      },
      {
        heading: 'Telling Combos Apart At The Counter',
        blocks: [
          { t: 'p', html: 'Bagged combos look alike. Two orders differing only in which burger is inside are indistinguishable once the bag is folded, and staff resolve it by memory during the busiest part of a shift.' },
          { t: 'p', html: 'The sleeve is the natural place to fix this, because it is the only surface on the burger that is already printed and already visible during assembly. Distinct sleeve faces per variant remove the guesswork entirely, and they work in a way handwritten marks on a bag do not, since the identification stays with the item rather than the container.' },
          { t: 'p', html: 'Where a menu runs a handful of combo variants, printing a small number of sleeve designs is usually cheaper than the remakes caused by mixing them up.' },
        ],
      },
      {
        heading: 'Combos At Events And High-Volume Service',
        blocks: [
          { t: 'p', html: 'Combo orders concentrate at exactly the moments when packing quality drops: half-time queues, festival lunch rushes, and any service where a fixed menu is sold to a large number of people quickly.' },
          { t: 'p', html: 'Those settings also strip away the things that normally compensate. There is rarely a proper bench, the fry station and burger pass may be metres apart, and staff are often temporary rather than trained on your sequence. Anyone planning <a href="/product/event-burger-sleeves/">packaging for service away from a fixed kitchen</a> is better served simplifying the combo down to one sleeve and one fry portion than optimising a range nobody has time to select from.' },
          { t: 'p', html: 'A combo that takes eight seconds at a counter takes considerably longer with a queue behind it and no bench. Testing the sequence under those conditions is the only way to know.' },
        ],
      },
      {
        heading: 'When The Sleeve Is Not The Thing To Change',
        blocks: [
          { t: 'p', html: 'It is worth diagnosing before buying, because most combo complaints resolve to something other than the sleeve.' },
          {
            t: 'ul',
            items: [
              'Cold fries on arrival is a sequencing problem, not a packaging one',
              'A crushed burger is a bag-order problem, and reversing the order costs nothing',
              'Oil marks on the sleeve face usually come from the fries beside it, not the burger inside it',
              'Wrong combos handed over is an identification problem, solved by print rather than structure',
              'A soggy bun after a long carry is trapped steam, which more board will not fix',
            ],
          },
          { t: 'p', html: 'Each of those has a cheaper answer than a specification change, and working through them first means any packaging you do buy is bought against a problem you have actually confirmed. Where a combo genuinely is being served to seated customers rather than bagged, <a href="/product/restaurant-burger-sleeves/">a sleeve built around pass-to-table service</a> answers a different set of constraints than a takeaway combo does.' },
        ],
      },
      {
        heading: 'Specifying For Combo Service',
        blocks: [
          { t: 'p', html: 'Send the burger dimensions from the tier that sells most, not the tier with the largest build, and say which tiers share a sleeve. State how the order is carried — bagged, boxed, or on a tray — because that changes what the sleeve is protected from.' },
          { t: 'p', html: 'Mention the fries explicitly at quotation. A supplier who knows a salted, oiled item travels beside the sleeve can advise on surface and barrier sensibly, where one quoting a burger sleeve in isolation cannot.' },
          { t: 'p', html: 'If the whole menu is being standardised rather than one combo line, that is a wider exercise and <a href="/product/fast-food-sleeves-packaging/">a sleeve range planned across a full menu</a> is the better place to start, since it settles how many sizes exist before any single order type is specified.' },
        ],
      },
    ],
    faqs: [
      { q: 'Does this sleeve hold the fries as well as the burger?', a: 'No. It is a burger sleeve used within a combo order. There is no fry compartment, divider or attached pocket, and none appears in the product photography or the specification. Fries need their own container; what this product offers is a sleeve chosen knowing they travel alongside it.' },
      { q: 'Why does the burger sleeve look greasy when the burger is not?', a: 'Usually the fries. They arrive salted and oiled, and in a closed bag that transfers to the outside of the wrap and onto the sleeve face. Standing the fry container upright against the bag wall, so its open top is not tipping toward the burger, addresses more than a surface upgrade will.' },
      { q: 'What order should a combo go into the bag?', a: 'Fries upright against the wall, the sleeved burger flat on the base carrying no weight, sauce sachets at the side rather than on the sleeve face, nothing stacked on top, and the bag folded so the fries cannot tip. The burger is the item least able to take weight.' },
      { q: 'My fries arrive cold. Will different packaging fix it?', a: 'Not usually. Cold fries in a combo are a sequencing problem — they were portioned before the burger was assembled and sat waiting. A fixed order of operations solves it. Packaging changes address how items arrive, not how long they waited before leaving.' },
      { q: 'Should I size the sleeve to the standard or the large combo?', a: 'Work from the combo matrix rather than the burger menu. If both tiers use the same burger, one sleeve covers the range. If the upper tier upgrades the burger too, sizing to the smaller one produces a strained fit on the tier that costs the customer most.' },
      { q: 'How do staff tell two similar combos apart?', a: 'Distinct sleeve faces per variant are the practical answer, because the sleeve is already printed and already visible during assembly. Identification stays with the item rather than the bag, which handwritten marks on a container cannot manage once the bag is folded.' },
      { q: 'Which surface holds up best in a combo bag?', a: 'An unbleached or textured stock absorbs visual damage from transferred oil far better than a pale coated face, which reports every mark. The trade is printed colour accuracy, so it comes down to whether artwork fidelity or appearance on arrival matters more.' },
      { q: 'Does a grease-resistant board solve the crossover from fries?', a: 'It slows oil moving into the board, which helps, but the oil is arriving from outside rather than from the burger inside. Separating the two items in the bag addresses the source. Treat the board as a second line rather than the fix.' },
      { q: 'What changes when combos are served at an event?', a: 'The compensating factors disappear — no proper bench, stations metres apart, and often untrained staff. Simplifying to one sleeve and one fry portion beats optimising a range nobody has time to select from. Test the sequence with a queue present, not on a quiet bench.' },
      { q: 'Why is my burger crushed when nothing heavy was in the bag?', a: 'A burger is flat and looks like a base to stack on, so under pressure staff put the fries or a drink on top of it. It is the item least able to carry weight, and a bowed sleeve loosens the wrap underneath. Reversing the bag order costs nothing.' },
      { q: 'What should I tell a supplier when quoting for combo service?', a: 'The burger dimensions from the tier that sells most, which tiers share a sleeve, and how the order is carried — bagged, boxed or on a tray. Mention the fries explicitly, since a supplier who knows a salted oiled item travels alongside can advise on surface sensibly.' },
    ],
  },

  'TBS-042': {
    sections: [
      {
        heading: 'A Sleeve Is Not The Wrap',
        blocks: [
          { t: 'p', html: 'The name causes a specific confusion worth clearing up first: this is not wrapping paper. It is a rigid outer band that goes around an item that has already been wrapped in something else.' },
          { t: 'p', html: 'The specification is explicit about it — the sleeve is designed to sit over an inner wrap without slipping, and it is sized by the wrapped width and height with slide-on clearance built in. Both of those only make sense for a two-layer arrangement.' },
          { t: 'p', html: 'That distinction decides everything downstream. A wrap contains; a sleeve grips, presents and holds the wrap closed. Buying one expecting the other is the most common disappointment on this product, and it is entirely avoidable.' },
        ],
      },
      {
        heading: 'What Each Layer Is Actually Doing',
        blocks: [
          { t: 'p', html: 'Splitting the job across two layers is what allows each to be good at one thing rather than mediocre at both.' },
          { t: 'p', html: 'The inner wrap is in contact with the food. It handles moisture, keeps the build together, and is the layer that gets discarded messy. It can be thin and cheap because it does not need to hold a shape.' },
          { t: 'p', html: 'The outer sleeve never touches the food in this arrangement. It provides rigidity, a dry grip zone and a printable face, and it can therefore be specified for stiffness and appearance without any of the constraints that contact would impose. That is why a sleeve can carry heavy print and a decent board weight without becoming expensive — it is doing less work than people assume.' },
          {
            t: 'table',
            caption: 'The two-layer system and what belongs to each layer',
            headers: ['Job', 'Inner wrap', 'Outer sleeve'],
            rows: [
              ['Touches the food', 'Yes', 'No, in this arrangement'],
              ['Holds the build together', 'Yes', 'Only indirectly, by holding the wrap closed'],
              ['Handles moisture and sauce', 'Yes — this is its main job', 'Slows surface oil only'],
              ['Provides a dry grip zone', 'No', 'Yes — this is its main job'],
              ['Carries printed branding', 'Rarely; it is discarded first', 'Yes, on the visible faces'],
              ['Determines the finished dimensions', 'Yes — the sleeve is sized to it', 'No — it is sized from the wrapped item'],
            ],
          },
        ],
      },
      {
        heading: 'Seam Control Decides How It Looks',
        blocks: [
          { t: 'p', html: 'Every wrap has a seam, and where that seam ends up relative to the sleeve is the difference between an order that looks assembled and one that looks bundled.' },
          { t: 'p', html: 'The rule is simple and almost never written down: the seam goes underneath, against the base, before the sleeve is applied. A seam facing up puts a loose paper edge against the sleeve\'s inner face, where it catches on the way on and works itself open during the carry.' },
          { t: 'p', html: 'Getting this right costs nothing and cannot be recovered later. A sleeve applied over an upward-facing seam will loosen no matter how well the sleeve itself was specified, and the failure will be blamed on the sleeve rather than on the ninety degrees of rotation that would have prevented it.' },
          { t: 'p', html: 'It is worth checking on the line rather than assuming. Watch ten items being sleeved during a normal service and count how many go on with the seam facing up — if it is more than one or two, the habit has not been established and no change of specification will substitute for fixing it.' },
        ],
      },
      {
        heading: 'Slide-On Clearance Without A Loose Fit',
        blocks: [
          { t: 'p', html: 'Clearance is the tension at the centre of this product. Too little and the sleeve compresses the bun going on; too much and it rotates and slides during the carry.' },
          { t: 'p', html: 'The resolution is that clearance is needed for the motion, not for the resting position. A sleeve can be close-fitting once seated and still go on easily, provided the leading edge is not fighting the wrap. That is a matter of how the sleeve is presented to the item rather than of adding slack to the dimensions.' },
          { t: 'p', html: 'State the clearance separately when quoting, rather than folding it into the measurement. A supplier needs to know which part of the figure is the wrapped item and which is allowance, because that determines how a change in board thickness gets absorbed. A single combined number hides exactly the information they would use to keep the fit stable if the board specification moved.' },
        ],
      },
      {
        heading: 'Applying Burger Wrapping Sleeves Without Crushing The Bun',
        blocks: [
          { t: 'p', html: 'A bun is compressible and a sleeve is not, so the whole application is a small exercise in not squeezing something soft.' },
          {
            t: 'ol',
            items: [
              'Turn the wrapped item so the seam is underneath before the sleeve comes near it',
              'Rest the item on the bench rather than holding it in the air, so nothing is squeezed from the sides',
              'Bring the sleeve on square, along the length, rather than pushing down onto the top',
              'Let the leading edge find the wrap rather than forcing it past a catch',
              'Seat it fully and check the seam is still underneath before the item is bagged',
            ],
          },
          { t: 'p', html: 'Step three is the one that causes visible damage. A sleeve pushed downward compresses the top of the bun, and the flattening does not recover before the customer sees it. Applied along the length, the same sleeve seats without any downward force at all.' },
        ],
      },
      {
        heading: 'Where Sauce Actually Escapes',
        blocks: [
          { t: 'p', html: 'Sauce almost never comes through the sleeve. It comes out of the open ends of the wrap, which the sleeve does nothing to close.' },
          { t: 'p', html: 'That means a sleeve upgrade is the wrong response to a leaking build. The wrap fold is the control — a properly folded end holds sauce that a tucked-under end will release the moment the item tilts in a bag. Where the menu is genuinely wet, the sequence to fix is the wrap technique first, the wrap material second, and the sleeve third if at all.' },
          { t: 'p', html: 'Where oil rather than sauce is the recurring complaint, that is a different failure with a different answer, and <a href="/product/grease-resistant-burger-sleeves/">a construction engineered to slow oil through the board</a> addresses migration through the board rather than escape around the ends.' },
        ],
      },
      {
        heading: 'Choosing The Wrap To Suit The Sleeve',
        blocks: [
          { t: 'p', html: 'The two layers are usually bought separately and rarely chosen together, which is a missed opportunity because the wrap changes how the sleeve behaves.' },
          { t: 'p', html: 'A slippery coated wrap lets the sleeve rotate; a matte or textured wrap holds it in place. A bulky wrap with a lot of folded material eats into the clearance and makes a close sleeve fight. A thin wrap that clings to the build leaves the sleeve doing more of the structural work than intended.' },
          { t: 'p', html: 'The practical step is to test the sleeve with the wrap you actually use rather than with whatever came in the sample pack. Where the wrap itself is under review, <a href="/product/paper-burger-sleeves/">the paperboard formats and what each asks of a line</a> covers the slide-on and wrap-close formats and how each behaves on a line.' },
        ],
      },
      {
        heading: 'The Packing Sequence That Protects Both Layers',
        blocks: [
          { t: 'p', html: 'Once the item is sleeved, the remaining risk is everything else in the bag.' },
          {
            t: 'ul',
            items: [
              'The sleeved item goes in flat and last, so nothing is placed on top of it',
              'Hard containers travel against the bag wall rather than against the sleeve face',
              'Drinks go separately where the order allows, since condensation reaches whatever is beside them',
              'Do not overfill — pressure from a stuffed bag pushes wraps open from the ends',
              'Fold the bag rather than leaving it open, so the contents cannot shift on the carry',
            ],
          },
          { t: 'p', html: 'Service where the item is eaten immediately rather than carried home puts different pressure on the arrangement, and <a href="/product/street-food-burger-sleeves/">eating on the move with nowhere to set anything down</a> makes the grip zone matter more than the packing order does.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this wrapping paper or a sleeve?', a: 'A sleeve. It is a rigid outer band that goes around an item already wrapped in something else. The specification says it is designed to sit over an inner wrap without slipping and is sized by the wrapped dimensions with slide-on clearance, both of which only make sense for a two-layer arrangement.' },
      { q: 'Do I still need an inner wrap?', a: 'Yes, in this arrangement. The wrap contains the build and handles moisture and sauce; the sleeve provides rigidity, a dry grip zone and a printed face. Splitting the job is what lets each layer be good at one thing rather than mediocre at both.' },
      { q: 'Where should the wrap seam sit?', a: 'Underneath, against the base, before the sleeve is applied. A seam facing up puts a loose paper edge against the sleeve\'s inner face, where it catches going on and works open during the carry. It costs nothing to get right and cannot be recovered afterwards.' },
      { q: 'How much slide-on clearance is needed?', a: 'Clearance is needed for the motion rather than the resting position, so a sleeve can be close-fitting once seated and still go on easily. State it separately from the measurement at quotation, since a supplier needs to know which part is the wrapped item and which is allowance.' },
      { q: 'Why does the bun get flattened when the sleeve goes on?', a: 'Almost always because the sleeve was pushed downward onto the top rather than brought on square along the length. A bun is compressible and a sleeve is not. Applied along the length with the item resting on a bench, the same sleeve seats with no downward force at all.' },
      { q: 'Sauce is escaping. Will a better sleeve stop it?', a: 'No. Sauce comes out of the open ends of the wrap, which the sleeve does not close. The wrap fold is the control — a properly folded end holds what a tucked-under end releases when the item tilts. Fix the wrap technique first, the wrap material second, the sleeve last.' },
      { q: 'Why does the sleeve keep rotating on the wrap?', a: 'Often the wrap rather than the sleeve. A slippery coated wrap lets the sleeve turn; a matte or textured one holds it. Test the sleeve with the wrap you actually use rather than whatever came in the sample pack, since the two layers interact.' },
      { q: 'Does the wrap I choose affect the sleeve fit?', a: 'Considerably. A bulky wrap with a lot of folded material eats into the clearance and makes a close sleeve fight going on. A thin wrap that clings leaves the sleeve doing more structural work than intended. The two are worth choosing together rather than separately.' },
      { q: 'Does the sleeve touch the food?', a: 'Not in this arrangement — the inner wrap is the contact layer. That is why the sleeve can be specified for stiffness and appearance without the constraints contact would impose. If your service ever hands items out without a wrap, the specification changes and contact suitability has to be confirmed.' },
      { q: 'How should a sleeved item be packed into a bag?', a: 'Flat and last, so nothing is placed on top of it. Hard containers against the bag wall rather than the sleeve face, drinks separately where the order allows, no overfilling, and fold the bag so contents cannot shift. Pressure from a stuffed bag pushes wraps open from the ends.' },
      { q: 'Can the sleeve carry heavy printing?', a: 'Yes, and more easily than people expect. Because it never contacts the food in this arrangement, the visible faces can take substantial coverage without the ink placement constraints a contact layer would impose. Board weight and print are chosen for appearance and grip.' },
      { q: 'What should I send a supplier to get the fit right?', a: 'The width and height of the item as wrapped, not the bare burger, with your intended slide-on clearance stated as a separate figure. Say which wrap you use and how bulky its folds are, since that determines how much of the clearance is consumed before the sleeve reaches the food.' },
    ],
  },
};
