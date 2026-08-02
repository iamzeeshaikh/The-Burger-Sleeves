/**
 * Usage group, part one.
 *   TBS-007 Burger Sleeves      — the head term. Written as the orientation page
 *                                 for the whole range: what a sleeve is, what it
 *                                 does not do, and how to choose. Owns no
 *                                 specialism, links out widely.
 *   TBS-008 Hamburger Sleeves   — the plain standard build. Owns dimension and
 *                                 predictability ("Classic Fit — sized for
 *                                 standard hamburger builds"). Not moisture.
 *   TBS-009 Cheeseburger Sleeves— melt. Owns what molten cheese does to width,
 *                                 wrap adhesion and board softening, which is
 *                                 the one thing its spec table uniquely names.
 *
 * No FDA, certification, microwave, oven, leakproof, greaseproof-guarantee,
 * recycling, compostability, MOQ, price, shipping or turnaround claim appears
 * anywhere in this file. Every material detail traces to the product's own
 * specification table.
 */

export const usage = {
  'TBS-007': {
    sections: [
      {
        heading: 'What A Burger Sleeve Is For',
        blocks: [
          { t: 'p', html: 'A burger sleeve is an outer band that goes around an already-wrapped burger. It holds the wrap closed, gives the customer somewhere clean to grip, and presents a printable face to the person being handed the order.' },
          { t: 'p', html: 'Being precise about that boundary saves most of the disappointment people have with them. A sleeve is not a container and not a barrier. It does not hold liquid, it does not keep sauce off a customer on its own, and it is not the layer in contact with the food in the usual setup. The inner wrap does that work; the sleeve holds the arrangement together and makes it look deliberate.' },
          { t: 'p', html: 'Once that is clear, the specification becomes a short list of real questions: how big, how stiff, what surface, and whether oil needs slowing down. Everything else on this page is those four questions in order.' },
        ],
      },
      {
        heading: 'The Four Decisions Behind Any Burger Sleeves Order',
        blocks: [
          { t: 'p', html: 'Suppliers quote against these four whether or not a buyer states them, which is why two quotations for "burger sleeves" can differ so widely.' },
          {
            t: 'ol',
            items: [
              'Dimensions — measured from the finished, wrapped item as it leaves the kitchen, not from a bun',
              'Board and caliper — enough rigidity to hold the wrap without adding needless bulk or cost',
              'Surface and print — how much artwork the face carries, and on which stock',
              'Oil handling — whether the build needs an absorbent paper, a barrier, or neither',
            ],
          },
          { t: 'p', html: 'The order matters. Dimensions constrain board, board constrains print, and oil handling changes the surface feel of whatever you chose. Working backwards from artwork is how people end up with a sleeve that looks right and fits badly.' },
        ],
      },
      {
        heading: 'Choosing A Board Without Over-Specifying',
        blocks: [
          { t: 'p', html: 'The stock options quoted for this product run from SBS board through kraft board, at medium calipers and stiffer grades, with grease-resistant board and barrier coating available where the menu needs them.' },
          { t: 'p', html: 'Heavier is not automatically better. Extra caliper buys rigidity and costs material, shipping weight, shelf volume and crease depth. The useful question is which failure you are trying to remove: a sleeve that bows under a loaded burger points one way, a sleeve that is adequate but expensive at volume points the other.' },
          { t: 'p', html: 'Where the range of stocks itself is the question rather than the size, <a href="/product-category/burger-sleeves-materials/">the boards the range is built from</a> are worth comparing side by side before a caliper is fixed, because surface and fibre affect print and hand-feel as much as thickness affects stiffness.' },
        ],
      },
      {
        heading: 'Sizing Across A Menu Rather Than One Item',
        blocks: [
          { t: 'p', html: 'Most sizing mistakes come from measuring a representative build. A sleeve sized to the average rattles around the smallest item on the menu and strains on the largest, and both faults appear in service rather than at approval.' },
          { t: 'p', html: 'Measure the extremes instead: the smallest and the largest finished items the sleeve has to hold, wrapped as they leave the kitchen. If those two sit close together, one size covers the menu. If they do not, the honest answer is usually two sizes rather than one compromise, and <a href="/product-category/burger-sleeves-sizes/">the size bands already in the range</a> often cover one end without any bespoke tooling at all.' },
          {
            t: 'table',
            caption: 'What each decision changes, and what it costs',
            headers: ['Decision', 'Buys you', 'Costs you', 'Decide it from'],
            rows: [
              ['Tighter fit', 'Less rotation; face panel stays forward', 'Buckling if the build varies at all', 'The largest finished item, not the average'],
              ['Heavier caliper', 'Holds square under load', 'Material, shipping and shelf volume', 'The heaviest item, held as long as orders wait'],
              ['Grease-resistant board', 'Slower soak-through and a drier feel', 'Cost, and a change in surface texture', 'The sauciest item you sell'],
              ['Full print coverage', 'A strong branded face', 'Ink cost and a brighter board to carry it', 'Whether the panel is actually looked at'],
              ['A second size', 'Both ends of the menu fit properly', 'Two lines to hold and reorder', 'How far apart your extremes measure'],
              ['Textured stock', 'More grip in a warm hand', 'Fine detail and small type soften', 'How the item is handed over'],
            ],
          },
        ],
      },
      {
        heading: 'When Oil Needs Handling And When It Does Not',
        blocks: [
          { t: 'p', html: 'Two different answers exist and they are often confused. Absorbent paper lets surface oil move into the fibre, which keeps the outside of the wrap from smearing but gradually softens the board. A barrier build slows oil moving through, keeping the panel firmer and drier for longer.' },
          { t: 'p', html: 'Neither makes a sleeve waterproof, and neither replaces the inner wrap on a sauced build. Where the menu is genuinely wet and staining is the recurring complaint, <a href="/product/grease-resistant-burger-sleeves/">a build with a low-absorb inner liner</a> is a different order line rather than a coating added to a standard sleeve.' },
          { t: 'p', html: 'A dry menu needs neither. Paying for a barrier a burger never tests is a common and avoidable cost.' },
        ],
      },
      {
        heading: 'What The Printed Face Is Actually Doing',
        blocks: [
          { t: 'p', html: 'The face panel is looked at for a second or two, usually at an angle, in a warm hand, under whatever lighting the service has. That is the real brief, and it rules out a lot of designs that test well flat on a desk.' },
          { t: 'p', html: 'Strong marks and readable text hold up. Fine detail, small light-weight type and delicate gradients generally do not, particularly on textured or unbleached stock. Where the sleeve has to carry more than a logo — variant marking, allergen notes, campaign artwork — that changes the board choice, and <a href="/product/custom-burger-sleeves/">a sleeve specified around your own dimensions and structure</a> is the route once standard formats stop covering it.' },
          { t: 'p', html: 'Judge any layout on a printed sample held the way a customer holds it, not on a proof.' },
        ],
      },
      {
        heading: 'Storage And Reordering Habits That Protect The Stock',
        blocks: [
          { t: 'p', html: 'Sleeves arrive flat packed in bundled cartons, and most of the inconsistency that shows up at the counter starts in how they are stored rather than how they were made.' },
          {
            t: 'ul',
            items: [
              'Keep cartons sealed and bring working quantities to the pass rather than leaving a case open',
              'Store flat; stock stacked on edge takes a set and stops sitting square',
              'Keep stacks away from prep benches where flour and oil become airborne',
              'Rotate cartons so older stock is used first rather than sitting at the back',
              'Pull crushed sleeves off the top of a stack instead of working through them',
            ],
          },
          { t: 'p', html: 'Uncoated board also takes up ambient humidity, so stock that has sat in a working kitchen folds differently from stock straight out of a sealed carton. Any pre-service check is worth running on kitchen stock for that reason.' },
        ],
      },
      {
        heading: 'Getting A Quotation That Can Be Compared',
        blocks: [
          { t: 'p', html: 'Because "burger sleeve" describes a category rather than a product, quotations are only comparable once four things are fixed: the finished wrapped dimensions, the board and caliper, the surface and print coverage, and whether any barrier is included and on which face.' },
          { t: 'p', html: 'Send the dimensions measured from a wrapped item, and a photograph of it beside a ruler. That single photograph resolves more ambiguity than a page of figures, because it shows a supplier what is actually being packed rather than what a category name implies.' },
          { t: 'p', html: 'Ask for a physical sample at the final board before approving a run. Stiffness, crease behaviour and grip are judged by a hand in seconds and cannot be seen on screen at all. Load it to the heaviest item on your menu, hold it for as long as an order realistically waits, and hand it to someone across a counter before signing anything off.' },
        ],
      },
    ],
    faqs: [
      { q: 'What does a burger sleeve actually do?', a: 'It is an outer band around an already-wrapped burger. It holds the wrap closed, gives the customer a clean place to grip, and presents a printable face at handover. It is not a container and does not hold liquid; the inner wrap does the containment work.' },
      { q: 'Do I still need an inner wrap if I use sleeves?', a: 'For sauced or juicy builds, generally yes. The sleeve is a grip and presentation layer rather than a barrier around the food. That division is also what allows the sleeve itself to be specified more lightly than it would otherwise need to be.' },
      { q: 'How do I measure for a burger sleeve?', a: 'Measure the finished item as it leaves the kitchen, wrapped, at its widest and tallest points — not a bare bun on a tray. Measure the smallest and largest builds the sleeve has to hold rather than a representative one, since those two set the boundaries it must work between.' },
      { q: 'Can one sleeve size cover a whole menu?', a: 'Only if your smallest and largest finished builds measure close together. A sleeve sized to the average rattles around the smallest and strains on the largest. Where the extremes are far apart, two sizes usually work better than one compromise size.' },
      { q: 'Which board should I choose?', a: 'The options quoted here run from SBS through kraft board at medium to stiffer calipers. Choose against the failure you are removing rather than reaching for the heaviest available, since extra caliper adds material cost, shipping weight and shelf volume along with the rigidity.' },
      { q: 'What is the difference between absorbent and barrier stock?', a: 'Absorbent paper lets surface oil move into the fibre, which reduces smearing but gradually softens the board. A barrier build slows oil moving through, keeping the panel firmer and drier. Neither makes a sleeve waterproof or replaces the inner wrap on a wet build.' },
      { q: 'Do I need a grease-resistant option?', a: 'Only if oil is actually causing a problem you can describe — staining, softening, marks reaching hands. A dry menu gains little from it, and paying for a barrier the food never tests is a common avoidable cost. Decide it against the sauciest item you sell.' },
      { q: 'How much artwork can a sleeve face carry?', a: 'Strong marks and readable text hold up well; fine detail, small light type and delicate gradients often do not, particularly on textured or unbleached stock. The panel is looked at for a second or two at an angle, so judge any layout on a printed sample held that way.' },
      { q: 'How do I stop the printed face turning away from the customer?', a: 'A face that ends up sideways on the shelf is almost always a fit problem rather than an application one. Panel depth too generous for the build lets the sleeve drift under a one-handed grip. Check it by lifting a sleeved item the way a customer would, not by looking at it on a bench.' },
      { q: 'How should sleeves be stored?', a: 'Flat, sealed and rotated. Stock on edge takes a set and stops sitting square, open cases near a prep line collect airborne flour and oil, and board that has absorbed kitchen humidity folds differently. Bring working quantities to the pass rather than leaving a carton open.' },
      { q: 'What makes two burger sleeve quotations comparable?', a: 'Four fixed points: the finished wrapped dimensions, the board and caliper, the surface and print coverage, and whether a barrier is included and on which face. Without those, suppliers are quoting different products under the same category name.' },
      { q: 'Should I approve a sample before ordering?', a: 'Yes, a physical one at the final board. Stiffness, crease behaviour and grip are judged by hand in seconds and cannot be assessed on screen. Load it to your heaviest build and hold it as long as an order realistically waits before signing anything off.' },
    ],
  },

  'TBS-008': {
    sections: [
      {
        heading: 'The Build This Sleeve Is Sized Around',
        blocks: [
          { t: 'p', html: 'A plain hamburger is the most predictable thing a sleeve ever has to hold. One patty, a bun, a modest set of cold toppings, and a finished height that barely moves from one order to the next.' },
          { t: 'p', html: 'That predictability is worth exploiting rather than ignoring. Where a menu varies wildly, a sleeve has to be specified with slack for the worst case, and everything smaller sits loose inside it. A standard build lets the fit be drawn tight, which removes rotation, keeps the printed face forward, and makes every order on the shelf look the same as the last.' },
          { t: 'p', html: 'The specification for this product reflects that: a classic fit sized for standard hamburger builds, at medium calipers, with alignment rather than reinforcement as the point. The four decisions behind any sleeve order still apply, and <a href="/product/burger-sleeves/">the overview of what a sleeve does and how to specify one</a> sets them out in the order they constrain each other; this page is what changes when the build barely varies.' },
        ],
      },
      {
        heading: 'Why A Tight Fit Is Available Here And Not Elsewhere',
        blocks: [
          { t: 'p', html: 'Fit tolerance is really a question about variance. Every sleeve has to accommodate the difference between the smallest and largest item it will hold, and that gap is what forces slack into the specification.' },
          { t: 'p', html: 'On a plain build the gap is small. The patty is a fixed weight, the bun comes from one supplier, and the toppings are cold and thin enough not to add height. A sleeve can be cut close to those dimensions with confidence, because there is very little for it to be wrong about.' },
          { t: 'p', html: 'The moment melted cheese, a second patty or a hot topping enters the build, that assumption breaks and the fit has to open up. Which is why this page is about dimensional discipline and the specialised builds are handled separately.' },
        ],
      },
      {
        heading: 'Measuring A Standard Hamburger Properly',
        blocks: [
          { t: 'p', html: 'Even a consistent build gets measured badly, usually by measuring the wrong object at the wrong moment.' },
          {
            t: 'ol',
            items: [
              'Assemble a burger exactly as service produces it, including the wrap',
              'Let it stand for a minute or two so the bun settles under its own weight',
              'Measure the width at the widest point of the wrapped item, not the bun',
              'Measure the height at the tallest point, which is rarely the centre',
              'Repeat on three separate burgers and take the largest of the three figures',
            ],
          },
          { t: 'p', html: 'Step two is the one people skip. A burger measured straight off the pass is taller than the same burger ninety seconds later, and a sleeve cut to the freshly-assembled figure will sit loose on everything that reaches a customer.' },
        ],
      },
      {
        heading: 'Board And Caliper For A Predictable Load',
        blocks: [
          { t: 'p', html: 'A standard hamburger is not a heavy item, which changes the board conversation. The stock options here are SBS and kraft board at medium calipers, and medium is genuinely the right answer rather than a compromise.' },
          { t: 'p', html: 'The sleeve needs enough rigidity to hold the wrap edges down and survive a one-handed grip. It does not need to hold square under a build that compresses and settles, because this build does neither. Specifying heavier here buys nothing except cost, shipping weight and shelf volume.' },
          { t: 'p', html: 'Where the material itself is the deciding factor rather than the thickness — a warmer paper tone, a different hand-feel, ink behaviour on unbleached fibre — <a href="/product/kraft-burger-sleeves/">kraft stock and its absorbent or barrier builds</a> is the other direction to look, and it is a stock decision rather than a sizing one.' },
          {
            t: 'table',
            caption: 'Standard hamburger fit: what to hold constant and what to allow to move',
            headers: ['Dimension', 'Hold constant', 'Allow for', 'Symptom if wrong'],
            rows: [
              ['Internal width', 'Widest point of the wrapped item', 'Bun-to-bun supplier variation', 'Rotation; the printed face turns away'],
              ['Internal height', 'Tallest point after settling', 'A minute or two of settle time', 'Sleeve sits loose and slides down'],
              ['Panel depth', 'How much of the burger is covered', 'Where a hand naturally grips', 'Fingers meet food instead of board'],
              ['Clearance', 'Stated separately from the measurement', 'A change in board thickness', 'Buckled corners on a tight fit'],
              ['Board caliper', 'Medium for a standard build', 'Nothing — this build does not settle', 'Needless cost and shelf volume'],
              ['Opening tolerance', 'Consistent across the run', 'Humidity in the kitchen', 'Some sleeves fight the wrap, others slip'],
            ],
          },
        ],
      },
      {
        heading: 'Consistency Is The Whole Argument',
        blocks: [
          { t: 'p', html: 'The visible payoff of a well-fitted standard sleeve is a staging shelf where every order looks identical. Face panels line up, nothing has rotated, and no sleeve has slid down to expose the wrap.' },
          { t: 'p', html: 'That is worth more than it sounds. A shelf of matched orders reads as competence to anyone waiting beside it, and it is the cheapest presentation improvement available on a menu that already has a consistent build. It costs a properly measured sleeve and a fixed application routine, and nothing else.' },
          { t: 'p', html: 'It also makes faults obvious. When every sleeve should look the same, one that does not is visible immediately, which turns quality control into something staff do by glancing rather than by checking.' },
        ],
      },
      {
        heading: 'A Close Fit Is Harder To Apply Quickly',
        blocks: [
          { t: 'p', html: 'There is a cost to the tight specification this page argues for, and it lands on the person applying the sleeve rather than on the person buying it.' },
          { t: 'p', html: 'A generous sleeve forgives an approximate hand. A close one does not: it has to go on square, and an item presented at a slight angle catches instead of sliding. On a slow counter that is invisible. Under pressure it turns into a fumble, and a fumbled sleeve is either applied crooked or applied twice.' },
          { t: 'p', html: 'The fix is a fixed approach angle rather than more care. Staff who bring the sleeve onto the item along the same line every time stop catching, because the motion becomes muscle memory instead of a judgement made freshly on each order. That takes one training session to establish and holds indefinitely.' },
          { t: 'p', html: 'It is worth checking during the sample stage rather than after committing. If someone working at normal pace catches on more than the occasional order, the fit is a fraction too tight for the variation your kitchen actually produces, and opening it slightly costs less than living with the fumbles.' },
        ],
      },
      {
        heading: 'Where The Standard Build Stops Being Standard',
        blocks: [
          { t: 'p', html: 'Two things break the assumption this page rests on, and both are worth watching for rather than learning about through complaints.' },
          {
            t: 'ul',
            items: [
              'A bun supplier change, which can move the width enough to make a tight sleeve fight the wrap',
              'A seasonal or promotional variant assembled on the same line as the standard item',
              'Staff building the item taller than the spec when the kitchen is busy',
              'A topping moving from cold to hot, which adds moisture the fit never accounted for',
              'A second patty offered as an upsell on the same bun',
            ],
          },
          { t: 'p', html: 'A tight fit is the benefit and the exposure at once. Where variants are becoming common, it is worth re-measuring rather than assuming the original figures still describe what the kitchen produces.' },
        ],
      },
      {
        heading: 'Hamburger Sleeves Beside The Rest Of The Range',
        blocks: [
          { t: 'p', html: 'This product sits at the settled middle of the catalogue: a standard build, a medium board, a close fit. Most of the other pages are departures from it in one direction or another.' },
          { t: 'p', html: 'If the build is larger or carries more, the sizing question moves and <a href="/product/medium-burger-sleeves/">a sleeve specified around a mid-range footprint</a> is the closer starting point. If the operation rather than the burger is the problem, the answer is about throughput instead.' },
          { t: 'p', html: 'Being the default is not a weakness on a menu that genuinely has a default build. It is the case where a sleeve can be specified tightly and left alone.' },
        ],
      },
    ],
    faqs: [
      { q: 'What counts as a standard hamburger build for sizing?', a: 'One patty, a bun and a modest set of cold toppings, with a finished height that changes little between orders. The defining property is low variance rather than any particular dimension, because that is what allows the sleeve to be cut close to the measurement.' },
      { q: 'Why can a hamburger sleeve be fitted more tightly than others?', a: 'Because fit tolerance is driven by the gap between the smallest and largest item a sleeve must hold. On a plain build that gap is small, so the sleeve can be drawn close with confidence. Variable builds force slack into the specification and everything smaller sits loose.' },
      { q: 'Should I measure the bun or the finished burger?', a: 'The finished burger, wrapped, as it leaves the kitchen. A bare bun on a tray is narrower and taller than the item that actually reaches a customer, and a sleeve cut to bun dimensions will fit nothing the kitchen produces.' },
      { q: 'Why let the burger settle before measuring?', a: 'A burger measured straight off the pass is taller than the same burger ninety seconds later, once the bun has compressed under its own weight. A sleeve cut to the freshly-assembled height sits loose on every order that reaches a customer.' },
      { q: 'What board weight suits a plain hamburger?', a: 'Medium caliper is genuinely right here rather than a compromise. The sleeve needs to hold the wrap edges down and survive a one-handed grip, not hold square under a build that compresses. Heavier board adds cost, shipping weight and shelf volume without addressing anything.' },
      { q: 'How many burgers should I measure before ordering?', a: 'At least three, assembled separately by service rather than for the purpose, and take the largest of the figures. One measurement captures one burger; three capture the variation your kitchen actually produces on an ordinary shift.' },
      { q: 'What happens if my bun supplier changes?', a: 'A tight sleeve can start fighting the wrap, because even a small width change removes the clearance the fit relied on. A supplier change is worth treating as a trigger to re-measure rather than assuming the original figures still describe the build.' },
      { q: 'Can the same sleeve handle a promotional variant?', a: 'Often not, and that is the exposure that comes with a close fit. A variant assembled on the same line with an extra patty or a hot topping changes height and moisture in ways the original measurement never accounted for. Measure the variant separately.' },
      { q: 'Why does a consistent fit matter for presentation?', a: 'It produces a staging shelf where every order looks identical — face panels aligned, nothing rotated, no sleeve slipped down. That reads as competence to anyone waiting, and it makes faults obvious at a glance rather than requiring anyone to check.' },
      { q: 'Should clearance be included in the measurement I send?', a: 'No, state it separately. A supplier needs to know which part of the figure is the burger and which is allowance, because that determines how a change in board thickness gets absorbed. A single combined number hides the information they need.' },
      { q: 'Does kitchen humidity affect how these sleeves fit?', a: 'It affects how they fold rather than their dimensions. Uncoated board takes up ambient moisture, so stock that has sat open in a kitchen creases differently from board out of a sealed carton. Run any pre-service check on kitchen stock rather than a fresh sample.' },
      { q: 'What should I send to get an accurate quotation?', a: 'The width and height of three separately assembled wrapped burgers, the largest figure of each, your intended clearance stated separately, the board surface you want, and a photograph of the assembled item beside a ruler. The photograph resolves more ambiguity than the figures alone.' },
    ],
  },

  'TBS-009': {
    sections: [
      {
        heading: 'Melted Cheese Changes Three Things At Once',
        blocks: [
          { t: 'p', html: 'A cheeseburger is not a hamburger with an extra ingredient as far as packaging is concerned. Melting changes the build in three ways simultaneously, and a sleeve that ignores any of them will disappoint.' },
          { t: 'p', html: 'Cheese spreads, so the finished item is wider than the bun suggests. It stays hot and wet, so it puts more moisture into the wrap than a cold topping does. And it becomes adhesive, so it sticks to whatever it touches and tears when that surface is pulled away.' },
          { t: 'p', html: 'The specification for this product names exactly this: a fit sized for cheeseburgers with thicker wraps, and moisture options that reduce softening from melted cheese. Those are the two things this page is about.' },
        ],
      },
      {
        heading: 'The Spread Nobody Measures',
        blocks: [
          { t: 'p', html: 'Melt spread is the most commonly missed dimension in burger packaging. A slice sitting square on a patty in the kitchen has run past the bun edge by the time the order reaches a customer, and it does not run evenly.' },
          { t: 'p', html: 'The consequence is a wrapped item that is wider on one side than the other and wider overall than anything measured at assembly. A sleeve cut to the bun will bind on the spread side, and forcing it produces exactly the failure everyone is trying to avoid: the wrap pulls, the cheese tears, and the burger arrives looking handled.' },
          { t: 'p', html: 'Measure a cheeseburger that has been standing for a minute, not one straight off the grill. That one change is worth more than any board decision on this page, because it is the difference between a figure describing the item you assemble and a figure describing the item a customer receives.' },
        ],
      },
      {
        heading: 'Cheeseburger Sleeves And Wrap Adhesion',
        blocks: [
          { t: 'p', html: 'The second problem is stickiness, and it is a wrap problem before it is a sleeve problem — but the sleeve determines how badly it shows.' },
          { t: 'p', html: 'Molten cheese bonds to the inner wrap as it cools. When a customer opens the item, some of the cheese stays on the paper. Nothing in the sleeve prevents that, but a sleeve that grips the wrap tightly makes it worse, because unwrapping now requires pulling against a sleeve as well as against the cheese.' },
          { t: 'p', html: 'The workable answer is a sleeve that slides off cleanly rather than one that has to be fought. That means a fit that is snug across the width but not gripping the wrap along its length, and it argues against the tightest possible specification even though the build is otherwise predictable.' },
        ],
      },
      {
        heading: 'Moisture, Softening And The Board Underneath',
        blocks: [
          { t: 'p', html: 'A hot cheeseburger releases steam into the wrap for several minutes. Some of that reaches the sleeve, and uncoated board takes it up.' },
          { t: 'p', html: 'The visible result is a panel that has gone slightly limp by the time an order has been staged and bagged, which reads as poor quality even when the food is fine. The specification here offers grease-resistant board and barrier coating for exactly this, alongside medium to heavy calipers where extra material helps the panel hold its shape through the damp period.' },
          {
            t: 'table',
            caption: 'What melted cheese does, and which decision answers it',
            headers: ['Effect of the melt', 'Shows up as', 'Decision that addresses it'],
            rows: [
              ['Spread past the bun edge', 'Sleeve binds on one side; wrap pulls', 'Measure after a minute of standing, at the widest point'],
              ['Uneven spread', 'Fit works on some orders and not others', 'Take the largest of three separately built items'],
              ['Adhesion to the inner wrap', 'Cheese tears when the customer unwraps', 'A sleeve that slides off rather than grips along its length'],
              ['Steam into the wrap', 'Panel goes limp before the order is collected', 'Grease-resistant board or a barrier coat'],
              ['Extra weight in the build', 'Base bows on a long hold', 'Medium to heavy caliper rather than medium'],
              ['Oil released as cheese melts', 'Marks on a pale face panel', 'A more forgiving surface, or a barrier build'],
            ],
          },
        ],
      },
      {
        heading: 'Absorbent Or Barrier For A Cheese Build',
        blocks: [
          { t: 'p', html: 'Both options exist here and they behave differently under the same conditions, so the choice deserves a moment rather than a default.' },
          { t: 'p', html: 'Absorbent board takes the moisture up, which keeps the outer surface from feeling wet but softens the panel over time. A barrier build keeps the panel firm and dry but does nothing about steam already trapped between wrap and sleeve. For a cheese-heavy menu with long staging times the barrier usually wins; for fast handover on a modest melt, absorbent board is often sufficient and cheaper.' },
          { t: 'p', html: 'Where oil rather than steam is the dominant complaint — visible staining, marks reaching hands — the answer moves to <a href="/product/grease-resistant-burger-sleeves/">a construction built around a low-absorb inner liner</a>, which is engineered for that specific failure rather than adapted to it.' },
        ],
      },
      {
        heading: 'Choosing A Face That Forgives Marks',
        blocks: [
          { t: 'p', html: 'Cheese menus mark packaging more than plain ones, so the surface decision carries more weight here than on a drier item.' },
          { t: 'p', html: 'A bright coated face reproduces artwork accurately and reports every spot of grease that lands on it. An unbleached or textured stock hides marks well and shifts printed colour in exchange. Neither is correct in general; the question is whether the artwork or the appearance after five minutes of handling matters more.' },
          { t: 'p', html: 'Where a lighter paperboard is preferred for cost or handling reasons, <a href="/product/paper-burger-sleeves/">a lighter board chosen by how it is applied</a> covers the slide-on and wrap-close choices, though a cheese build makes the grease-resistant variant of it worth pricing at the same time.' },
        ],
      },
      {
        heading: 'Where A Cheese Build Becomes A Different Product',
        blocks: [
          { t: 'p', html: 'Adding cheese to a standard burger is a modest change. Adding cheese to something already large is not, and the point at which the sleeve specification should change is worth recognising.' },
          {
            t: 'ul',
            items: [
              'Two patties with cheese between them puts melt in the middle of the stack, where it spreads furthest',
              'A build that settles as it stands needs clearance the measurement has to allow for',
              'Weight past a certain point bows the base panel regardless of how well the width fits',
              'Longer holds give steam more time to reach and soften the sleeve',
              'Heavier builds are gripped differently, which changes where the panel needs to cover',
            ],
          },
          { t: 'p', html: 'Where several of those apply at once, the sizing rather than the moisture is the binding constraint, and <a href="/product/double-patty-burger-sleeves/">a sleeve cut for two patties and the settling that follows</a> is the more direct answer than adapting a standard cheeseburger sleeve upward.' },
        ],
      },
      {
        heading: 'Comparing This With The Plain Build',
        blocks: [
          { t: 'p', html: 'It is worth being explicit about what separates this product from the standard one, because the difference is easy to underestimate on a menu where the two sit side by side.' },
          { t: 'p', html: 'A plain build is a dimensional problem with a stable answer: measure it, cut close, leave it alone. A cheese build is a moisture and adhesion problem where the dimensions themselves move as the item stands. Both can run through the same line and both can look identical on a menu board, and they do not want the same sleeve.' },
          { t: 'p', html: 'Where the menu is genuinely plain and consistent, <a href="/product/hamburger-sleeves/">a sleeve fitted tightly to a standard build</a> is the better specification and the cheaper one. Where cheese is on most orders, the fit has to open up and the board has to handle moisture, and paying for that on the plain items too is usually still cheaper than running two lines.' },
        ],
      },
    ],
    faqs: [
      { q: 'Why does a cheeseburger need a different sleeve from a hamburger?', a: 'Melting changes three things at once: the cheese spreads past the bun so the item is wider, it stays hot and wet so more moisture reaches the wrap, and it becomes adhesive so it sticks to whatever it touches. A sleeve sized and specified for a plain build addresses none of those.' },
      { q: 'How much wider does melted cheese make the build?', a: 'That varies with the cheese, the patty and the hold time, which is why it has to be measured rather than estimated. The practical instruction is to measure a cheeseburger that has been standing for a minute at its widest point, and to take the largest of three separately built items.' },
      { q: 'Why does the cheese stick to the wrap when customers open it?', a: 'Molten cheese bonds to the inner wrap as it cools. The sleeve cannot prevent that, but a sleeve gripping the wrap tightly makes it worse, because unwrapping means pulling against the sleeve as well as the cheese. A sleeve that slides off cleanly reduces the tearing.' },
      { q: 'Should a cheeseburger sleeve be a tight fit?', a: 'Snug across the width but not gripping along its length. The width needs to accommodate melt spread, and the length needs to let the sleeve slide off without fighting the wrap. This is one case where the tightest possible specification is not the best one.' },
      { q: 'Why does my sleeve go limp before the order is collected?', a: 'A hot cheeseburger releases steam into the wrap for several minutes and uncoated board takes it up. Grease-resistant board or a barrier coat addresses it, as does a heavier caliper that has more material to soften before the panel loses shape.' },
      { q: 'Absorbent or barrier board for a cheese menu?', a: 'Absorbent takes moisture up, keeping the surface from feeling wet but softening over time. Barrier keeps the panel firm and dry but does nothing about steam already trapped inside. Long staging times favour the barrier; fast handover on a modest melt often does not need it.' },
      { q: 'Which surface hides cheese grease marks best?', a: 'Unbleached or textured stock hides marks well and shifts printed colour in exchange. A bright coated face reproduces artwork accurately and reports every spot. The question is whether artwork accuracy or appearance after five minutes of handling matters more on your menu.' },
      { q: 'What caliper suits a cheeseburger sleeve?', a: 'The specification offers medium to heavy calipers here rather than medium alone. The extra material helps the panel hold shape through the damp period after assembly and under the additional weight, both of which a plain build does not produce.' },
      { q: 'At what point should I move to a larger sleeve instead?', a: 'When several factors stack: cheese between two patties, a build that settles as it stands, weight that bows the base panel, and longer holds. At that point sizing rather than moisture is the binding constraint, and a sleeve designed around a stacked build is more direct than adapting this one upward.' },
      { q: 'Does the sleeve stop grease reaching a customer\'s hands?', a: 'Not on its own, and it should not be specified as though it will. Grease-resistant board and barrier coatings slow oil moving into and through the board; they do not make the sleeve a container. The inner wrap is doing the containment work.' },
      { q: 'Can I run one sleeve across both plain and cheese builds?', a: 'Usually yes, by specifying for the cheese build and accepting that plain items sit slightly looser. That is generally cheaper than running two lines, and the looser fit on a plain burger is a smaller problem than a tight fit on a cheese one.' },
      { q: 'What should I send a supplier for a cheeseburger sleeve quotation?', a: 'The width and height of three separately assembled cheeseburgers, each measured after standing for a minute, with the largest figure of each. State your clearance separately, say how long orders typically stage before collection, and note whether staining or softening is the recurring complaint.' },
    ],
  },
};
