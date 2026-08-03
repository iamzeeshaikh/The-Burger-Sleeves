/**
 * Usage group, part two.
 *   TBS-010 Fast Food  — throughput. Owns seconds-per-unit, stacking and a mixed
 *                        size range on one line. Says nothing about what a
 *                        sleeve is or about food contact.
 *   TBS-011 Takeaway   — the journey after handoff. Owns carry, fold style and
 *                        the label space its spec uniquely names ("Area for
 *                        stamps and notes", "uncoated outer option").
 *   TBS-012 Disposable — single-use economics and dispensing. Owns ABSORBENT
 *                        paper ("Oil Absorption — paper absorbs surface oils")
 *                        and pull-from-stack dispensing. Deliberately the
 *                        absorbent counterpart to TBS-013's barrier build.
 *
 * TBS-011 and TBS-012 shared a metaDescription, and TBS-012's described
 * takeaway sleeves — a copy-paste fault inherited from WordPress. TBS-012's is
 * rewritten in scripts/fix-usage-metadata.mjs; TBS-011's is left alone.
 *
 * No FDA, certification, microwave, oven, leakproof, greaseproof-guarantee,
 * recycling, compostability, MOQ, price, shipping or turnaround claim is made.
 */

export const usage2 = {
  'TBS-010': {
    sections: [
      {
        heading: 'Seconds Per Order Is The Whole Specification',
        blocks: [
          { t: 'p', html: 'On a fast line the packaging question is not how the sleeve looks or what it is made of. It is how long it takes one person to get it onto a burger and how often that goes wrong.' },
          { t: 'p', html: 'The arithmetic is unforgiving. A sleeve taking four seconds instead of two costs two seconds on every order; at four hundred covers a day that is over twenty minutes of labour, every day, for a difference nobody notices at approval. A sleeve that occasionally snags costs more than the delay, because it breaks the rhythm of a line that runs on rhythm.' },
          { t: 'p', html: 'The specification here reflects that: a sleeve style built for quick slide-on application, anti-scuff options for fast stacking, and multiple sizes for a varied menu. Everything on this page follows from throughput rather than from the burger.' },
        ],
      },
      {
        heading: 'Timing A Sleeve Properly Before You Buy It',
        blocks: [
          { t: 'p', html: 'Assembly time is the one property that cannot be assessed from a sample sitting on a desk, and it is the one that matters most here.' },
          {
            t: 'ol',
            items: [
              'Give the samples to someone who actually works the line, not to whoever is evaluating them',
              'Have them sleeve ten burgers in sequence without pausing between them',
              'Time the whole ten and divide, rather than timing a single careful attempt',
              'Repeat it at the end of a shift when hands are tired and the bench is cluttered',
              'Count the snags and fumbles separately from the time — they cost more than the seconds',
            ],
          },
          { t: 'p', html: 'A format that wins on a clean bench and loses at the end of a shift will lose in service, because service is mostly the second condition. This test takes fifteen minutes and settles an argument that otherwise runs for months.' },
        ],
      },
      {
        heading: 'Why Fast Food Burger Sleeves Live Or Die On Dispensing',
        blocks: [
          { t: 'p', html: 'Most of the time lost to packaging is not spent applying it. It is spent getting the next one out of the stack.' },
          { t: 'p', html: 'Sleeves that cling to each other force a second hand into the job, which on a busy line means putting something down first. Sleeves stored too far from the wrap station add a turn or a step to every order. A carton on a high shelf costs more per shift than any difference in board.' },
          { t: 'p', html: 'The fixes are dull and effective: a shallow open case at the pass rather than a tall stack, working quantities brought out rather than a bulk carton opened, and stock positioned within the reach of the hand that is already moving. Coated faces release from a stack more cleanly than uncoated ones, which is a real if unglamorous argument for the surface.' },
        ],
      },
      {
        heading: 'Handling A Mixed Menu On One Line',
        blocks: [
          { t: 'p', html: 'A varied menu creates a choice that quietly decides throughput: one sleeve size that fits everything loosely, or several sizes that fit properly and have to be selected between.' },
          { t: 'p', html: 'Every additional size adds a decision to every order, and decisions are where a fast line slows down. Two sizes is usually manageable because the choice is binary and obvious. Four is where staff start reaching for the wrong one under pressure, and a wrong sleeve costs more than a loose one. Deciding how many should exist at all is a separate exercise from choosing any one of them, and <a href="/product/fast-food-sleeves-packaging/">standardising a sleeve family across a whole menu</a> is where that question belongs.' },
          {
            t: 'table',
            caption: 'Where the seconds go, and what recovers them',
            headers: ['Stage', 'Typical loss', 'What recovers it', 'What it costs'],
            rows: [
              ['Getting the sleeve', 'Stack clings; reaching too far', 'Shallow case at the pass; coated face', 'Restocking more often through a shift'],
              ['Choosing a size', 'Hesitation on a mixed menu', 'Two sizes rather than four', 'A looser fit on some items'],
              ['Applying it', 'Fighting an untidy wrap', 'Slide-on format; wrap discipline first', 'Depends on the wrap being tidy'],
              ['Correcting it', 'Sleeve on crooked, redone', 'A fit with enough clearance to forgive', 'Slightly less tight presentation'],
              ['Stacking the order', 'Scuffing against other items', 'Anti-scuff surface option', 'Added cost per unit'],
              ['Bagging', 'Sleeve snags on the bag or another item', 'Test insert-and-remove before committing', 'Nothing — this one is free'],
            ],
          },
        ],
      },
      {
        heading: 'Scuffing Is A Volume Problem',
        blocks: [
          { t: 'p', html: 'At low volumes sleeves are handled gently and individually. At high volumes they are pulled from stacks, stacked against each other on a shelf and pushed into bags beside other items, and the surface takes abrasion the whole way.' },
          { t: 'p', html: 'This is why the anti-scuff option exists in the specification and why it is worth pricing rather than dismissing. Scuffing shows most on dark or heavily printed faces, so the operations that invested most in the artwork are the ones that see it degrade fastest.' },
          { t: 'p', html: 'A cheaper answer is sometimes available: a lighter or less densely printed face shows abrasion far less, which is an argument for design restraint on a high-volume item rather than for a surface upgrade.' },
        ],
      },
      {
        heading: 'The Wrap Underneath Sets The Ceiling',
        blocks: [
          { t: 'p', html: 'A slide-on sleeve is faster than any alternative, but it depends entirely on the item being wrapped tidily first. Applied over a loose or bulky wrap it snags going on, and the time saved by the format is lost fighting it.' },
          { t: 'p', html: 'That makes wrap consistency the real constraint on how fast the packaging step can be. Where wraps vary, a format that is formed around the item forgives it at a cost of a second or two, and that trade is worth making deliberately rather than by accident.' },
          { t: 'p', html: 'Fixing the wrap is usually the better investment. It is free, it speeds up the sleeve step, and it improves how every order looks without changing anything you buy.' },
        ],
      },
      {
        heading: 'Sizing Fast Without Sizing Badly',
        blocks: [
          { t: 'p', html: 'Speed pressure pushes operations toward one generously sized sleeve, and past a point that stops being a shortcut. A sleeve much larger than the item rotates, hides the printed face and slides down on a shelf, which produces exactly the untidy staging shelf the packaging was meant to prevent.' },
          { t: 'p', html: 'The workable compromise is sizing to the larger end of what the menu actually sells rather than to its extreme. Where the biggest item on the menu is a genuine outlier, giving it <a href="/product/large-burger-sleeves/">a sleeve sized for a heavier build</a> and running everything else on one standard size keeps the decision binary while still fitting both ends.' },
          { t: 'p', html: 'Two sizes and one obvious rule beats four sizes and a judgement call at every order.' },
        ],
      },
      {
        heading: 'Where Speed Is Not The Binding Constraint',
        blocks: [
          { t: 'p', html: 'It is worth checking that throughput is genuinely the problem before optimising for it, because several other constraints look similar from the pass.' },
          {
            t: 'ul',
            items: [
              'If orders are waiting on the kitchen rather than the packing step, faster sleeves change nothing',
              'If items are failing after handoff rather than during packing, the issue is carry rather than speed',
              'If staff are correcting sleeves rather than applying them slowly, the fit is wrong, not the format',
              'If the delay is finding the right size, the answer is fewer sizes rather than a faster format',
              'If bags are the bottleneck, the sleeve is not involved at all',
            ],
          },
          { t: 'p', html: 'Where the pressure comes from the setting rather than the volume — service through a hatch, outdoors, or away from a fixed kitchen — the constraints are different again, and <a href="/product-category/special-sleeves-uses/">packaging matched to a specific service situation</a> is the more useful place to start than a throughput optimisation.' },
        ],
      },
      {
        heading: 'Structure Adds Time, So Buy It Deliberately',
        blocks: [
          { t: 'p', html: 'Shaped sleeves with tabs and locks present better and assemble slower, and on a fast line that trade needs stating in seconds rather than in opinions.' },
          { t: 'p', html: 'A form that takes six seconds instead of two costs four seconds an order, which at volume is a part-time wage. That can still be the right decision for a signature item or a limited run where presentation carries weight. It is rarely the right decision across a whole high-volume menu, and <a href="/product/die-cut-burger-sleeves/">a sleeve formed from a shaped cutting tool</a> is worth timing on the line before it is approved rather than after.' },
          { t: 'p', html: 'Run the same ten-burger test with the structured sample. The number it produces ends the discussion faster than any argument about how it looks.' },
        ],
      },
    ],
    faqs: [
      { q: 'How much does sleeve assembly time actually cost?', a: 'Two seconds per order at four hundred covers a day is over twenty minutes of labour daily. The delay itself matters less than the interruption: a sleeve that occasionally snags breaks the rhythm of a line that runs on rhythm, which costs more than the seconds do.' },
      { q: 'How should I test a sleeve for speed?', a: 'Give samples to someone who works the line, have them sleeve ten burgers in sequence without pausing, and time the whole ten rather than one careful attempt. Repeat it at the end of a shift with tired hands and a cluttered bench, and count snags separately from the time.' },
      { q: 'Why does my line lose time on packaging even with a fast format?', a: 'Most of the loss is in getting the next sleeve out of the stack, not in applying it. Sleeves that cling force a second hand into the job, and stock stored out of easy reach adds a step to every order. A shallow open case at the pass fixes most of it.' },
      { q: 'How many sleeve sizes should a fast food menu run?', a: 'Two is usually manageable because the choice stays binary and obvious. Four is where staff reach for the wrong one under pressure, and a wrong sleeve costs more than a slightly loose one. Every additional size adds a decision to every single order.' },
      { q: 'Why do my sleeves scuff so much?', a: 'Volume. At high throughput sleeves are pulled from stacks, stacked against each other and pushed into bags beside other items, taking abrasion at every stage. It shows most on dark or heavily printed faces, so the artwork investment degrades fastest.' },
      { q: 'Is the anti-scuff option worth the cost?', a: 'It depends on how much of your face panel is dark or heavily printed, since that is where abrasion shows. A cheaper alternative is design restraint — a lighter or less densely printed face shows scuffing far less without any surface upgrade.' },
      { q: 'Why does a slide-on sleeve snag on some orders?', a: 'Because it depends on the item being wrapped tidily first. Applied over a loose or bulky wrap it catches going on, and the time the format saves is lost fighting it. Wrap consistency is the real ceiling on how fast the packaging step can run.' },
      { q: 'Should I use one oversized sleeve to avoid choosing?', a: 'Past a point that stops being a shortcut. A sleeve much larger than the item rotates, hides the printed face and slides down on a staging shelf. Size to the larger end of what the menu actually sells rather than to its extreme outlier.' },
      { q: 'Do shaped or die-cut sleeves work on a fast line?', a: 'They present better and assemble slower. A form taking six seconds instead of two costs four seconds an order, which at volume is a part-time wage. It can be right for a signature item or a limited run, and is rarely right across a whole high-volume menu.' },
      { q: 'How do I know if packaging is really my bottleneck?', a: 'Check what people are waiting on. If orders queue behind the kitchen, faster sleeves change nothing. If staff are correcting sleeves rather than applying them slowly, the fit is wrong rather than the format. If the delay is finding a size, run fewer sizes.' },
      { q: 'Does a coated surface help on a fast line?', a: 'It releases from a stack more cleanly than an uncoated face, which is a small but genuine speed argument. Coated stock also resists the light abrasion of repeated stacking better. Neither effect is dramatic, but both act on every order.' },
      { q: 'What should I tell a supplier about a high-volume order?', a: 'Your covers per day, how many sizes you are willing to run, the finished dimensions at both ends of the menu, and whether the anti-scuff option is being priced. Ask for enough samples to run a real timing test on the line before approving anything.' },
    ],
  },

  'TBS-011': {
    sections: [
      {
        heading: 'The Packaging Is Judged After You Stop Watching',
        blocks: [
          { t: 'p', html: 'Counter packaging is assessed at the moment of handover. Takeaway packaging is assessed ten or twenty minutes later, in a car, on a bike, at a desk or on a sofa, by someone you cannot see and who will not tell you if it went wrong.' },
          { t: 'p', html: 'That gap is the entire subject of this page. Everything that matters happens during it: the item is carried, jostled, set down, possibly stacked under something, and opened by a person whose expectations were set when they paid.' },
          { t: 'p', html: 'The specification here is built for that journey — walk-and-eat handling, an open-end or half-wrap fold, grip that reduces heat feel, and a label area for order marking. Those are journey features rather than counter features.' },
        ],
      },
      {
        heading: 'What Actually Happens Between The Counter And The Meal',
        blocks: [
          { t: 'p', html: 'It helps to be specific about the stages, because each one breaks something different and a sleeve that survives one can fail another.' },
          {
            t: 'table',
            caption: 'The journey in stages, and what fails at each',
            headers: ['Stage', 'What the packaging meets', 'Failure it produces'],
            rows: [
              ['Handover', 'A warm hand, an angled grip, one hand only', 'Heat felt through the panel; sleeve slips'],
              ['Into the bag', 'Other items, hard containers, drinks', 'Snagging, crushing, face panel scuffed'],
              ['The carry', 'Movement, tilting, being set down repeatedly', 'Sleeve rotates; wrap works loose'],
              ['Waiting', 'Trapped steam with nowhere to go', 'Panel softens; bun goes damp'],
              ['Arrival', 'Being lifted out beside other orders', 'Wrong order handed to the wrong person'],
              ['Opening', 'A customer with one hand and expectations', 'Sleeve has to be fought off; food looks handled'],
            ],
          },
          { t: 'p', html: 'The waiting row is the one counter-focused specifications miss. Nothing is happening to the packaging except time, and time with trapped steam is what softens a panel and disappoints someone who paid twenty minutes earlier.' },
        ],
      },
      {
        heading: 'Fold Style Changes How The Item Travels',
        blocks: [
          { t: 'p', html: 'Two formats are offered here and they behave differently once the order leaves. An open-end sleeve is a band the wrapped item sits inside, leaving both ends exposed. A half-wrap covers more of the item and encloses more of it.' },
          { t: 'p', html: 'The open end is faster to apply and lets steam escape, which keeps the bun from going damp on a longer journey. It also leaves more of the food exposed to whatever else is in the bag. The half-wrap protects more and holds heat in, which suits a short carry and works against a long one.' },
          { t: 'p', html: 'Delivery distance is therefore the deciding factor rather than preference. A ten-minute walk and a forty-minute drive want different answers, and an operation doing both may reasonably run one format and accept the compromise at one end.' },
          { t: 'p', html: 'There is a second consideration where the same kitchen also serves a counter queue. The open end is quicker to apply, so a format chosen for the journey is also the format the line has to live with at peak, and the seconds it costs or saves are covered under <a href="/product/fast-food-burger-sleeves/">packaging chosen around throughput rather than the burger</a>. Where delivery and counter trade compete for the same hands, that trade is worth timing rather than assuming.' },
        ],
      },
      {
        heading: 'Takeaway Burger Sleeves And The Label Space Nobody Plans For',
        blocks: [
          { t: 'p', html: 'The specification names something the other products in the range do not: an area for stamps and notes, with an uncoated outer option, useful for order marking.' },
          { t: 'p', html: 'This matters more for takeaway than anything else on the page, because takeaway is where orders get confused. Several bagged items look identical, a driver cannot open them to check, and the customer finds the error after everyone has left. A panel that takes a handwritten mark or a stamp solves this for the cost of leaving part of the face unprinted.' },
          { t: 'p', html: 'The practical requirement is an uncoated area. A coated or laminated face resists ink, so a marker smears and a stamp does not take. This has to be planned into the artwork, because a fully printed glossy panel forecloses it entirely and the sticker workaround is slower and falls off warm packaging.' },
        ],
      },
      {
        heading: 'Heat In The Hand And Steam In The Bag',
        blocks: [
          { t: 'p', html: 'Two different heat problems arrive together and they pull in opposite directions.' },
          { t: 'p', html: 'The first is heat reaching the hand at handover, which a sleeve helps with simply by adding a layer between palm and food. The second is heat that cannot escape once the item is bagged, which turns into steam, and steam is what makes a bun damp and a panel limp.' },
          { t: 'p', html: 'Solving the first by enclosing more of the item makes the second worse. The reasonable position for a long journey is to accept slightly more heat at the counter in exchange for somewhere for the steam to go, since the customer feels the handover for two seconds and eats the consequences of the steam for the whole meal.' },
        ],
      },
      {
        heading: 'Bag Discipline Does More Than Board Choice',
        blocks: [
          { t: 'p', html: 'Most takeaway packaging failures are packing failures, and they cost nothing to fix.' },
          {
            t: 'ul',
            items: [
              'Heavier items go in first and at the bottom; a burger should never carry the weight of anything else',
              'Drinks travel separately where possible, because condensation reaches everything near them',
              'Sauce cups go against the bag wall rather than against a printed face panel',
              'Do not overfill — pressure from a stuffed bag creases sleeves and pushes wraps open',
              'Hot and cold items in one bag produce condensation on both, so separate them when the order allows',
            ],
          },
          { t: 'p', html: 'None of that requires a purchasing decision. It requires deciding the packing order once and having everyone follow it, which is the cheapest improvement available to any takeaway operation.' },
        ],
      },
      {
        heading: 'Standing Up Versus Sitting Down',
        blocks: [
          { t: 'p', html: 'Takeaway divides into two situations that want different things, and operations often serve both without noticing.' },
          { t: 'p', html: 'Food carried home and eaten at a table survives a lot, because the customer unpacks it onto plates and the packaging has only to arrive intact. Food eaten immediately and one-handed is a different requirement: the sleeve is the plate, the grip zone has to stay dry, and there is no second chance to tidy anything up.' },
          { t: 'p', html: 'Where most orders are eaten within a few minutes of collection while the customer is still moving, the constraints tighten considerably and <a href="/product/street-food-burger-sleeves/">packaging built for a hand-to-mouth trade</a> covers that case more directly than a general takeaway specification does.' },
        ],
      },
      {
        heading: 'When Rigidity Becomes The Answer',
        blocks: [
          { t: 'p', html: 'Board choice matters less on this journey than fit and fold do, with one exception: distance combined with stacking.' },
          { t: 'p', html: 'A sleeve that holds shape on a five-minute walk can arrive bent after a long drive with a bag tipping in a footwell, and no amount of fitting prevents that. Where orders travel far and arrive visibly bent, the failure is rigidity rather than sizing, and <a href="/product/corrugated-burger-sleeves/">a structured build that resists bending</a> is the direct answer, at the cost of noticeably more storage volume per case.' },
          { t: 'p', html: 'Check the failure first. Bent packaging points to rigidity; loose or rotated packaging points to fit; damp packaging points to steam. They are three different problems and only one of them is solved by a stiffer board.' },
        ],
      },
      {
        heading: 'Getting The Right Order To The Right Person',
        blocks: [
          { t: 'p', html: 'The last thing a takeaway sleeve does is identify what it contains, and the design decisions that make a face look good often make it useless for this.' },
          { t: 'p', html: 'A fully printed panel with no clear zone leaves nowhere to write. Variants that look identical in a bag get mixed up. Where a menu has several similar-looking items, printing distinct sleeves per variant is faster and more reliable than marking them by hand, and <a href="/product/logo-printed-burger-sleeves/">a clearly placed mark with proper clear space around it</a> is what makes the difference readable at a glance in a dim car.' },
          { t: 'p', html: 'Either approach works. Choosing neither, and relying on staff memory at the point of bagging, is what produces the complaints.' },
        ],
      },
    ],
    faqs: [
      { q: 'What makes takeaway packaging different from counter packaging?', a: 'When it is judged. Counter packaging is assessed at handover; takeaway packaging is assessed ten or twenty minutes later by someone you cannot see. Everything that matters happens in that gap — the carry, the wait with trapped steam, and the unwrapping.' },
      { q: 'Open-end sleeve or half-wrap for delivery?', a: 'Distance decides it. An open end applies faster and lets steam escape, which keeps buns from going damp on a long journey, but leaves more exposed in the bag. A half-wrap protects more and holds heat in, which suits a short carry and works against a long one.' },
      { q: 'Why do buns go damp during delivery?', a: 'Trapped steam. A hot item releases moisture for several minutes, and once bagged that has nowhere to go. Enclosing more of the item to reduce heat at handover makes this worse, which is why a longer journey favours letting steam escape over holding heat in.' },
      { q: 'Can I write order details on the sleeve?', a: 'Only if part of the face is left uncoated. A coated or laminated panel resists ink, so markers smear and stamps do not take. The specification offers an uncoated outer option for exactly this, but it has to be planned into the artwork rather than added later.' },
      { q: 'Why does order marking matter so much for takeaway?', a: 'Because takeaway is where orders get confused. Several bagged items look identical, a driver cannot open them to check, and the customer finds the error after everyone has left. A markable panel solves it for the cost of leaving part of the face unprinted.' },
      { q: 'How should a takeaway bag be packed?', a: 'Heavier items first and at the bottom, drinks separately where possible, sauce cups against the bag wall rather than a printed panel, and no overfilling. Separate hot and cold items when the order allows, since together they produce condensation on both.' },
      { q: 'My orders arrive bent. Is that a board problem?', a: 'Probably yes, if the journey is long and bags are stacked or tipping. Bent packaging points to rigidity; loose or rotated packaging points to fit; damp packaging points to steam. Identify which failure you actually have before changing the board.' },
      { q: 'Does a sleeve keep food warm during transport?', a: 'It adds a layer, but no thermal performance is claimed here and it should not be relied on as insulation. What a sleeve reliably does is give a clean grip, hold the wrap closed and present a face. Heat retention over a journey depends far more on bagging.' },
      { q: 'Should I use different sleeves for different menu items?', a: 'It helps considerably where variants look alike in a bag. Printing distinct sleeves per variant is faster and more reliable than marking each by hand, though either approach works. Relying on staff memory at bagging is what produces the complaints.' },
      { q: 'Is takeaway the same as food eaten on the move?', a: 'No, and the difference matters. Food carried home and unpacked onto plates only has to arrive intact. Food eaten immediately and one-handed makes the sleeve the plate, so the grip zone has to stay dry and there is no chance to tidy anything up.' },
      { q: 'Does a sleeve stop grease reaching hands on a long carry?', a: 'It reduces contact, and an optional inner barrier layer slows oil moving through the board. Neither makes the sleeve waterproof or removes the need for an inner wrap on a sauced build, particularly over a journey long enough for oil to migrate.' },
      { q: 'What should I tell a supplier about a delivery-heavy operation?', a: 'Typical journey time from handoff to eating, whether items are eaten on the move or unpacked at home, whether you need an uncoated area for order marking, and whether orders currently arrive bent, damp or loose. Each of those points at a different part of the specification.' },
    ],
  },

  'TBS-012': {
    sections: [
      {
        heading: 'Single Use Is An Economic Decision Before A Practical One',
        blocks: [
          { t: 'p', html: 'A single-use sleeve is bought and thrown away on every order. That sounds obvious and it changes how the product should be evaluated, because every characteristic gets multiplied by volume and nothing gets amortised.' },
          { t: 'p', html: 'A sleeve that costs a fraction more is a fraction more on every order forever. A sleeve that takes two seconds longer to pull from the stack costs those seconds on every order forever. There is no version of this where a marginal difference is absorbed somewhere, which makes the small numbers unusually worth caring about.' },
          { t: 'p', html: 'The specification here is built around that: a single-use format, easy pull from a stack, absorbent paper, and a barrier as an option rather than a default.' },
        ],
      },
      {
        heading: 'Absorbent Paper Is A Choice, Not A Compromise',
        blocks: [
          { t: 'p', html: 'The most important line in this product\'s specification is easy to skim past: the paper absorbs surface oils. That is a different approach from stopping oil, and it is deliberate.' },
          { t: 'p', html: 'Absorbent stock takes up the light film of oil that ends up on the outside of a wrap during handling. The customer\'s hand meets dry paper rather than a slick surface, and the sleeve looks used rather than greasy. What it does not do is hold that oil indefinitely — over a long hold the fibre softens as it takes more up, and on a very wet build it will eventually mark through.' },
          { t: 'p', html: 'For fast service that is a good trade. The sleeve only has to perform for the few minutes between handoff and eating, and absorbent paper does that at a lower cost than a barrier construction while feeling drier in the hand than an untreated coated board would.' },
        ],
      },
      {
        heading: 'Disposable Burger Sleeves And The Stack They Come From',
        blocks: [
          { t: 'p', html: 'Dispensing gets almost no attention at purchase and consumes real time in service, which makes it the most underrated line in this specification.' },
          { t: 'p', html: 'Paper stock in flat stack packs releases differently from coated board. It grips slightly against itself, which is good when a stack should stay put and bad when a single sleeve needs to come off it one-handed. The difference between a stack that gives up one sleeve and a stack that gives up three is a genuine operational property, and it is worth testing with the actual product rather than assuming.' },
          { t: 'p', html: 'Test it the way it will be used: one hand, no looking, ten times in a row, from a stack that is half depleted rather than full. A stack behaves differently at the bottom, which is where the fumbles happen.' },
        ],
      },
      {
        heading: 'Hygiene Without Overstating It',
        blocks: [
          { t: 'p', html: 'The hygiene argument for single use is real and narrower than it is usually made. What can honestly be said is that each item is used once and discarded, so there is no cleaning step, no reuse and no washing equipment involved.' },
          { t: 'p', html: 'That removes a category of risk and a category of labour. It does not make the packaging sterile, it is not a substitute for hand hygiene at the pass, and it says nothing about what the paper is made from or how it should be thrown away. Those are separate questions with separate answers.' },
          { t: 'p', html: 'The specification does note direct contact with the burger, which matters here more than on sleeves that sit outside a wrap. What the paper is rated for still has to be confirmed for the exact construction ordered rather than assumed from a category description.' },
        ],
      },
      {
        heading: 'Costing A Sleeve Properly Across A Year',
        blocks: [
          { t: 'p', html: 'The unit price is the number everyone compares and it is rarely the number that decides the total.' },
          {
            t: 'ol',
            items: [
              'Start with unit price multiplied by realistic annual volume, not by the best month',
              'Add the cost of stock discarded — damaged in storage, humidity-affected, crushed at the top of stacks',
              'Add the labour of dispensing, measured as seconds per order across the year',
              'Add the cost of the failures each option produces, such as re-sleeving or complaints',
              'Compare only then, and expect the ranking to have changed',
            ],
          },
          { t: 'p', html: 'Step two catches out operations that buy to a price break. Ordering a quantity beyond what turnover supports reliably produces write-offs, and paper stock in a humid kitchen degrades faster than coated board does.' },
          {
            t: 'table',
            caption: 'Absorbent single-use against the barrier alternative',
            headers: ['Property', 'Absorbent paper (this product)', 'Barrier construction'],
            rows: [
              ['How oil is handled', 'Taken up into the fibre', 'Slowed from passing through a liner'],
              ['Feel in the hand', 'Dry to touch; paper-like', 'Dry and slightly sealed'],
              ['Over a long hold', 'Softens as it absorbs more', 'Holds the panel firmer for longer'],
              ['On a very wet build', 'Can mark through eventually', 'Resists marking noticeably longer'],
              ['Relative cost', 'Lower', 'Higher'],
              ['Best suited to', 'Fast service, short time to eating', 'Sauced menus and longer holds'],
            ],
          },
        ],
      },
      {
        heading: 'Storage Is Where The Savings Leak Away',
        blocks: [
          { t: 'p', html: 'Paper stock is more sensitive to storage than coated board, and single-use volumes mean a lot of it sits waiting.' },
          {
            t: 'ul',
            items: [
              'Sealed cartons until needed — open packs take up kitchen humidity within a shift',
              'Flat, never on edge, or the stack takes a set and stops dispensing cleanly',
              'Away from fryers and prep benches where airborne oil settles on the top of a stack',
              'Older cartons rotated to the front rather than left at the back to degrade',
              'Working quantities at the pass rather than a bulk carton opened and left',
            ],
          },
          { t: 'p', html: 'These are the same habits any paperboard wants, and they matter more here because the volumes are larger and the stock is less forgiving. An operation losing a small percentage of every order to storage damage has erased whatever the unit price saved.' },
        ],
      },
      {
        heading: 'Print Restraint On A Throwaway Item',
        blocks: [
          { t: 'p', html: 'Heavy coverage costs more per unit and the unit is discarded within minutes, which makes print one of the easier places to reduce cost on this product without anyone noticing a loss.' },
          { t: 'p', html: 'A design built around the paper colour with one or two strong inks reads as deliberate and costs less than full coverage. Absorbent uncoated stock also softens fine detail, so an intricate layout is paying more to reproduce less well. The saving compounds across every order, in the same direction as <a href="/product/eco-friendly-burger-sleeves/">the wider set of decisions that reduce material rather than change it</a>, where coverage and right-sizing are treated as the levers with the most leverage.' },
          { t: 'p', html: 'Where the face genuinely has to carry a lot — allergen information, campaign artwork, several variants — that is an argument for a coated board rather than for pushing this stock past what it does well.' },
        ],
      },
      {
        heading: 'When A Single-Use Paper Sleeve Is The Wrong Product',
        blocks: [
          { t: 'p', html: 'Three situations point elsewhere, and recognising them early avoids buying volume that will not perform.' },
          { t: 'p', html: 'A build heavy enough to bow a paper sleeve needs stiffness, and <a href="/product/cardboard-burger-sleeves/">a solid board chosen by caliper</a> is the direct answer rather than a heavier paper. A menu wet enough that absorbency is overwhelmed needs a barrier rather than more absorption. And service where the item is not eaten promptly gives the paper time to soften regardless of how well it started.' },
          { t: 'p', html: 'None of those is a fault in the product. They are the boundaries of what an absorbent single-use paper sleeve is built to do, and staying inside them is what makes the economics work.' },
        ],
      },
      {
        heading: 'Confirming Contact Suitability Before Volume',
        blocks: [
          { t: 'p', html: 'Because this product is specified for direct contact with the burger, one confirmation is worth getting in writing before a large order rather than after.' },
          { t: 'p', html: 'Ask the supplier to state the intended contact type for the exact construction being supplied, including the paper, any barrier layer and the inks used. Contact suitability is a property of the finished build rather than of a category name, and it is not something a product title settles. Where contact is central to how the item is used, <a href="/product/food-grade-burger-sleeves/">stock selected around contact and ink migration</a> treats that as the primary specification rather than an attribute.' },
          { t: 'p', html: 'Getting this in writing costs an email. Getting it wrong at volume costs the volume.' },
        ],
      },
    ],
    faqs: [
      { q: 'What makes a sleeve "disposable" rather than just cheap?', a: 'It is specified for one-time service and discarded after a single use, with no cleaning or reuse step. That changes how it should be evaluated: every characteristic is multiplied by volume and nothing is amortised, so marginal differences in cost and handling time matter more than they would elsewhere.' },
      { q: 'Does absorbent paper mean the sleeve gets greasy?', a: 'The opposite, for a short hold. Absorbent stock takes the light oil film into the fibre so the hand meets dry paper rather than a slick surface. Over a long hold it softens as it absorbs more, and on a very wet build it can eventually mark through.' },
      { q: 'How is this different from a grease resistant sleeve?', a: 'Two different approaches to the same problem. This product absorbs surface oil into the paper; a barrier construction slows oil passing through a liner. Absorbent is cheaper and suits fast service; a barrier holds the panel firmer for longer and suits sauced menus and long holds.' },
      { q: 'Why does dispensing matter so much on this product?', a: 'Because it happens on every order and paper grips against itself more than coated board does. The difference between a stack releasing one sleeve and releasing three is a real operational property. Test it one-handed, without looking, from a half-depleted stack rather than a full one.' },
      { q: 'What can I honestly say about the hygiene benefit?', a: 'That each item is used once and discarded, so there is no cleaning step, no reuse and no washing equipment. It does not make the packaging sterile, it does not replace hand hygiene at the pass, and it says nothing about material or disposal, which are separate questions.' },
      { q: 'How should I compare this against a more expensive option?', a: 'Unit price times realistic annual volume, plus stock discarded through storage damage, plus dispensing time across the year, plus the cost of the failures each option produces. The ranking often changes once those are added, particularly for operations that buy to a price break.' },
      { q: 'Why is storage more critical for paper stock?', a: 'Paper is more sensitive to humidity than coated board, and single-use volumes mean a lot of it sits waiting. Open packs take up kitchen moisture within a shift, stacks on edge take a set and stop dispensing cleanly, and airborne oil settles on the top of open stacks.' },
      { q: 'How much printing should a disposable sleeve carry?', a: 'Less than most people specify. Heavy coverage costs more per unit on an item discarded within minutes, and absorbent uncoated stock softens fine detail, so an intricate layout pays more to reproduce less well. One or two strong inks on the paper colour reads as deliberate.' },
      { q: 'Is this sleeve suitable for direct contact with food?', a: 'The specification describes direct contact with the burger and food-safe paper, but suitability is a property of the finished construction rather than the category. Ask your supplier to confirm the intended contact type in writing for the exact paper, barrier layer and inks being supplied.' },
      { q: 'When should I choose something other than a paper sleeve?', a: 'When the build is heavy enough to bow paper, when the menu is wet enough to overwhelm absorbency, or when items are not eaten promptly. The first needs stiffness, the second needs a barrier, and the third gives paper time to soften regardless of how it started.' },
      { q: 'Can I get a barrier layer on a disposable sleeve?', a: 'The specification lists an optional grease barrier layer, which improves the dry feel. It raises the cost, and at that point it is worth comparing against a construction designed around a barrier from the start rather than one added to an absorbent paper.' },
      { q: 'What should I confirm before placing a large order?', a: 'The intended contact type in writing for the exact construction, how the stack dispenses when half depleted, how the paper holds up after sitting in your kitchen for a week, and your realistic annual volume rather than an optimistic one. The last prevents write-offs from over-ordering.' },
    ],
  },
};
