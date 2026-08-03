/**
 * Combo group, part two.
 *   TBS-043 Burger Sandwich — FORMAT COMPATIBILITY. Owns the geometry problem of
 *        one sleeve across round buns and long rolls. Verified from its spec:
 *        "sleeve format planned for burger and sandwich sizes", "burgers and
 *        chicken sandwiches", slide-on and wrap-around styles, optional die-cut
 *        patterns. Not a generic all-food-packaging page.
 *   TBS-044 Fast Food Sleeves Packaging — THE RANGE AS A SYSTEM. Owns how many
 *        sizes to run, menu coding, counter storage, reordering and multi-site
 *        consistency. It carries the longest specification in the catalogue (10
 *        rows) and is the only product listing straight wrap / open end / pocket
 *        styles, custom width-height-depth, 250-400 GSM stocks and add-ons of
 *        cutouts, QR print and batch coding. Deliberately not the homepage
 *        pitch, and not the restaurant or food-truck setting pages.
 *
 * No leakproof, waterproof, guaranteed grease resistance, FDA, certification,
 * microwave, oven, compostability, recyclability, MOQ, price, shipping or
 * turnaround claim appears here. The only figures used are the 250-400 GSM band
 * and the style and add-on options named in TBS-044's own specification.
 */

export const combo2 = {
  'TBS-043': {
    sections: [
      {
        heading: 'One Sleeve, Two Different Geometries',
        blocks: [
          { t: 'p', html: 'A burger is round and tall. A sandwich is usually long and flat. Asking one sleeve to hold both is a geometry problem before it is a packaging problem, and it is the whole subject of this product.' },
          { t: 'p', html: 'The two shapes fail in opposite directions. A sleeve sized for a round bun is too short for a long roll, which then projects at both ends with nothing supporting it. A sleeve sized for the roll swallows the burger, which rotates inside it and turns its printed face away.' },
          { t: 'p', html: 'The specification acknowledges the range directly — a format planned for burger and sandwich sizes, covering burgers and chicken sandwiches, in slide-on and wrap-around styles. What follows is how to find the overlap where one sleeve genuinely serves both.' },
        ],
      },
      {
        heading: 'Measuring Across Formats Instead Of Items',
        blocks: [
          { t: 'p', html: 'The usual mistake is measuring the most popular item and hoping the rest fall inside it. Across mixed formats that does not hold, because the variation is in shape rather than in size.' },
          { t: 'p', html: 'Measure the widest item and the tallest item separately, and recognise they are probably not the same product. A stacked burger sets the height; a long roll sets the length; a grilled flatbread sandwich may set neither but be thinner than everything else, which is its own problem because a sleeve sized for thickness lets a thin item slide straight through.' },
          { t: 'p', html: 'Three figures rather than one, taken from three different menu items, is the honest starting point for a mixed-format sleeve.' },
        ],
      },
      {
        heading: 'Bread Behaves Differently From Bun',
        blocks: [
          { t: 'p', html: 'Beyond dimensions, the materials themselves respond differently to being held, and that changes what the sleeve has to do.' },
          { t: 'p', html: 'A burger bun is soft and compressible, so a close sleeve flattens it and the flattening shows. A crusty roll resists compression but flakes, leaving crumbs inside the sleeve and a rough edge where it was gripped. A grilled or toasted sandwich is rigid and holds its shape well but arrives hotter on the surface, putting more steam into the sleeve immediately.' },
          { t: 'p', html: 'A breakfast sandwich adds a further wrinkle: egg and cheese make it heavier for its size and stickier against the wrap than its dimensions suggest. Sizing from a photograph of the menu will miss all of this.' },
          {
            t: 'table',
            caption: 'How each format behaves in the same sleeve',
            headers: ['Format', 'Sets which dimension', 'Behaves how', 'Watch for'],
            rows: [
              ['Standard burger bun', 'Height, when stacked', 'Soft; compresses under a close fit', 'Flattening that does not recover'],
              ['Long roll or sub', 'Length', 'Rigid but projects past a short sleeve', 'Unsupported ends drooping'],
              ['Crusty roll', 'Neither, usually', 'Resists compression; flakes', 'Crumbs collecting inside the sleeve'],
              ['Grilled or toasted sandwich', 'Often the thinnest', 'Rigid; holds shape well', 'Sliding through a sleeve sized for thickness'],
              ['Breakfast sandwich', 'Weight rather than size', 'Heavy and sticky for its footprint', 'Adhesion to the wrap on opening'],
              ['Chicken sandwich', 'Width, when the fillet overhangs', 'Overhang past the bun edge', 'Binding on one side of the sleeve'],
            ],
          },
        ],
      },
      {
        heading: 'Finding The Tolerance That Covers Both',
        blocks: [
          { t: 'p', html: 'A mixed-format sleeve is an exercise in accepting imperfection deliberately rather than accidentally.' },
          {
            t: 'ol',
            items: [
              'List every item the sleeve must hold, not the three that come to mind',
              'Measure each one wrapped, after standing a minute, at its widest and tallest points',
              'Identify which single item sets each dimension — they will rarely be the same item',
              'Sleeve the extremes and decide which compromise you can live with in service',
              'Check the thinnest item cannot slide through, which is the failure people forget to test',
            ],
          },
          { t: 'p', html: 'Step five catches the case nobody anticipates. A sleeve sized generously enough for a stacked burger will let a flat grilled sandwich move freely inside it, and that shows on a staging shelf long before anyone complains about it.' },
          { t: 'p', html: 'Where the answer turns out to be two sleeves rather than one, the split is usually round against long rather than large against small, and <a href="/product/medium-burger-sleeves/">the standard round-bun size band</a> often covers the round side of the menu on its own.' },
        ],
      },
      {
        heading: 'Burger Sandwich Sleeves On A Mixed Counter',
        blocks: [
          { t: 'p', html: 'Operations running both formats usually do so at different times of day, which is an advantage worth using rather than a complication to absorb.' },
          { t: 'p', html: 'A breakfast sandwich service and a lunch burger service rarely overlap. That means the same shelf space can hold a different sleeve at each part of the day, and the selection decision staff face at any given moment stays binary rather than becoming a menu of options.' },
          { t: 'p', html: 'Where formats genuinely run side by side through one service, the argument for a single compromise sleeve gets much stronger, because a wrong-sleeve error costs more than a slightly loose fit does.' },
          {
            t: 'ul',
            items: [
              'Split by time of day first — a breakfast sleeve and a lunch sleeve never compete for the same hand',
              'Where formats overlap, keep the choice binary rather than offering three near-identical options',
              'Put the higher-volume format in the position closest to the wrapping hand',
              'Watch for the format that is quietly always sleeved wrong; that is the one the range has failed',
              'Retire any variant whose position stops depleting, rather than restocking it out of habit',
            ],
          },
          { t: 'p', html: 'The fourth point is the one worth acting on. A format that staff consistently sleeve in the wrong size is not a training problem; it is the range telling you the compromise does not reach that item.' },
        ],
      },
      {
        heading: 'Identification Matters More When Shapes Repeat',
        blocks: [
          { t: 'p', html: 'Once several menu items share one sleeve, the packaging stops telling anyone what is inside. A chicken sandwich and a beef burger in identical sleeves are indistinguishable at the pass and in a bag.' },
          { t: 'p', html: 'That is a solvable problem and worth solving at the point where the sleeve is specified rather than afterwards. Printed variant markers, a colour band per item, or a clear panel that takes a written mark all work, and each costs less than the remakes caused by handing over the wrong item.' },
          { t: 'p', html: 'Cafés and delis feel this most sharply, because their menus tend to carry several similar-looking handheld items across one counter. Anyone running <a href="/product/cafe-burger-sleeves/">a hot food line inside a drinks business</a> is likely to need identification built into the sleeve rather than added at the bag.' },
        ],
      },
      {
        heading: 'When Compromise Stops Being Worth It',
        blocks: [
          { t: 'p', html: 'There is a point where one sleeve across all formats costs more than it saves, and it is worth recognising rather than persisting through.' },
          { t: 'p', html: 'The signals are specific: items regularly sliding through the sleeve, ends projecting far enough to droop, buns visibly flattened at the fit that holds everything else, or staff routinely correcting sleeves after applying them. Any of those means the range has outgrown the compromise.' },
          { t: 'p', html: 'At that point the choice is two stock sizes or a shape drawn around your actual menu, and <a href="/product/custom-burger-sleeves/">a shape drawn around your own menu</a> becomes the sensible route once the tooling is spread across enough volume to justify it.' },
        ],
      },
      {
        heading: 'What To Send For A Mixed-Format Quotation',
        blocks: [
          { t: 'p', html: 'A quotation for this product needs more than one measurement, and saying so up front saves a round trip.' },
          { t: 'p', html: 'Send the widest item, the tallest item and the thinnest item, each measured wrapped and named. State which formats have to share a sleeve and which could take their own. Say whether the items run concurrently or at different times of day, because that changes whether a compromise or a second size is the better answer.' },
          { t: 'p', html: 'Photographs of the three extremes beside a ruler do more than the figures alone, because shape is the variable here and a number does not convey it. Where the sleeve also has to work over a wrap that varies by item, <a href="/product/burger-wrapping-sleeves/">the relationship between an inner wrap and the outer sleeve</a> is worth settling before the dimensions are fixed.' },
        ],
      },
    ],
    faqs: [
      { q: 'Can one sleeve really hold both burgers and sandwiches?', a: 'Often yes, but it is a geometry problem rather than a sizing one. A burger is round and tall, a sandwich long and flat, and they fail in opposite directions. Finding the overlap means measuring the widest, tallest and thinnest items separately, since they are rarely the same product.' },
      { q: 'What is the failure people forget to test?', a: 'The thinnest item sliding through. A sleeve sized generously enough for a stacked burger lets a flat grilled sandwich move freely inside it, and that shows on a staging shelf long before anyone complains. Test the thin end of the range, not just the bulky end.' },
      { q: 'Why does a crusty roll behave differently from a bun?', a: 'A bun is soft and compresses under a close fit, so flattening shows. A crusty roll resists compression but flakes, leaving crumbs inside the sleeve and a rough edge where it was gripped. The same sleeve produces two different complaints depending on the bread.' },
      { q: 'Do breakfast sandwiches need anything different?', a: 'They are heavier and stickier for their footprint than dimensions suggest, because egg and cheese add weight and adhesion. A sleeve sized purely from the outline will be under-specified for the load, and the stickiness shows when a customer opens the wrap.' },
      { q: 'What about a chicken fillet that overhangs the bun?', a: 'Measure the overhang rather than the bun. A fillet projecting past the bread sets the width even though the bread looks narrower, and a sleeve cut to the bun will bind on that side. It is the same trap as measuring a burger without its melted cheese.' },
      { q: 'How many items should I measure before ordering?', a: 'Every item the sleeve must hold, not the three that come to mind. Then identify which single item sets each dimension — width, height and thickness will usually be set by three different products, and that set of three is what the sleeve has to live between.' },
      { q: 'Should I run one sleeve or two across a mixed menu?', a: 'Depends on whether the formats run concurrently. If breakfast sandwiches and lunch burgers never overlap, the same shelf can hold a different sleeve at each part of the day and the choice stays binary. Running side by side strengthens the case for one compromise sleeve.' },
      { q: 'How do staff tell items apart when they share a sleeve?', a: 'Printed variant markers, a colour band per item, or a clear panel that takes a written mark. Once several items share one sleeve the packaging stops saying what is inside, and a chicken sandwich and a beef burger become indistinguishable at the pass and in a bag.' },
      { q: 'When has a mixed-format sleeve stopped being worth it?', a: 'When items regularly slide through, ends project far enough to droop, buns are visibly flattened at the fit that holds everything else, or staff routinely correct sleeves after applying them. Any one of those means the range has outgrown the compromise.' },
      { q: 'Does a toasted sandwich put more stress on the sleeve?', a: 'Differently rather than more. It is rigid and holds its shape well, which helps, but it arrives hotter on the surface and puts steam into the sleeve immediately. That affects how the panel feels after a few minutes rather than how it holds the item.' },
      { q: 'Are slide-on and wrap-around both available here?', a: 'The specification lists both styles, with die-cut patterns as an option. Slide-on is faster but needs the item wrapped tidily first; wrap-around forgives a rougher wrap at the cost of a second or two per order. Mixed formats often favour the more forgiving style.' },
      { q: 'What should a mixed-format quotation include?', a: 'The widest, tallest and thinnest items, each measured wrapped and named, plus which formats must share a sleeve and whether they run at the same time of day. Photographs of the three extremes beside a ruler convey shape in a way figures alone cannot.' },
    ],
  },

  'TBS-044': {
    sections: [
      {
        heading: 'Buying A Range Rather Than A Product',
        blocks: [
          { t: 'p', html: 'Every other page in this catalogue answers a question about one sleeve. This one answers a different question: how many sleeves should exist at all, and how they relate to each other across a menu.' },
          { t: 'p', html: 'That is the problem an operation runs into once it is past a single item. Each menu addition invites a new sleeve, each new sleeve adds a line to hold and reorder, and within a couple of years a business is carrying seven variants of which two do most of the work. Nobody decided that; it accumulated.' },
          { t: 'p', html: 'The specification here reflects the breadth — straight wrap, open-end and pocket styles, custom width, height and depth, 250 to 400 GSM stocks, with cutouts, QR print and batch coding available. Those are the components of a range, and <a href="/product-category/burger-sleeves-materials/">the stock options sitting behind the whole range</a> set the outer bounds of what can be assembled from them. This page is about assembling them into one deliberately.' },
        ],
      },
      {
        heading: 'How Many Sizes A Menu Actually Needs',
        blocks: [
          { t: 'p', html: 'The instinct is to fit every item properly. The cost of that instinct is a decision at every order, more shelf space, more part-used cartons and more chances to reach for the wrong one.' },
          { t: 'p', html: 'A useful discipline is to start from two and justify each addition. Two sizes covers a surprising amount of a handheld menu and keeps the selection binary. A third earns its place when a genuine outlier sells in real volume. A fourth almost never does, and by the fifth the staff-error cost usually exceeds whatever the tighter fit was worth.' },
          { t: 'p', html: 'The test is volume rather than fit. An item selling in small numbers can sit slightly loose in the size above it without anyone minding, and that is nearly always cheaper than a line of its own.' },
        ],
      },
      {
        heading: 'Menu Coding Across A Fast Food Sleeves Packaging Range',
        blocks: [
          { t: 'p', html: 'Once several sizes and several items exist, the sleeves have to say which is which — to the person assembling, the person bagging, and the person receiving.' },
          { t: 'p', html: 'Three mechanisms are available and they suit different scales. A distinct printed design per item is clearest and costs the most in setup. A shared design with a colour band or icon per variant is a middle path that keeps one artwork base. A clear panel that takes a stamp or a written mark is the cheapest and depends on staff doing it consistently.' },
          { t: 'p', html: 'The specification also lists batch coding and QR print as add-ons, which serve a different purpose — traceability and campaign mechanics rather than counter identification. Those are worth keeping separate in your thinking, because mixing them into the identification scheme tends to clutter the panel and weaken both.' },
          {
            t: 'table',
            caption: 'Standardising a sleeve range across a menu',
            headers: ['Decision', 'Start from', 'Add only when', 'What it costs'],
            rows: [
              ['Number of sizes', 'Two', 'An outlier sells in real volume', 'A decision at every order'],
              ['Number of printed designs', 'One base artwork', 'Items are being confused at the pass', 'Setup per additional design'],
              ['Identification method', 'Colour band or icon', 'Variants look alike in a bag', 'Panel space and artwork complexity'],
              ['Board weights', 'One', 'The heaviest item bows its sleeve', 'A second stock line to hold'],
              ['Barrier options', 'None', 'A specific item stains or softens', 'Cost applied across the range'],
              ['Add-ons such as codes', 'None', 'Traceability or a campaign requires it', 'Clutter competing with identification'],
            ],
          },
        ],
      },
      {
        heading: 'Storage Is A Constraint On The Range Itself',
        blocks: [
          { t: 'p', html: 'Every variant needs somewhere to live within reach of the packing station, and that space is finite in a way purchasing decisions rarely account for.' },
          { t: 'p', html: 'The failure is predictable: variants that will not fit at the pass get stored further away, staff stop walking to them, and the wrong sleeve gets used because the right one was six steps behind. A range that does not fit the bench is a range that will not be followed.' },
          {
            t: 'ul',
            items: [
              'Count the shallow open positions available at the pass before deciding how many variants to run',
              'Keep the two highest-volume sizes closest to the wrapping hand',
              'Store bulk cartons sealed elsewhere and bring working quantities forward through the shift',
              'Label positions rather than cartons, so the layout survives a restock by someone new',
              'Review which positions are actually depleting; an untouched one is a variant to retire',
            ],
          },
          { t: 'p', html: 'The last point is the useful one. Consumption data tells you which variants earn their place far more reliably than an opinion about which items need their own sleeve.' },
        ],
      },
      {
        heading: 'Keeping Several Sites On The Same Specification',
        blocks: [
          { t: 'p', html: 'A single site keeps a range consistent by habit. A group cannot, and drift appears the moment locations reorder independently.' },
          { t: 'p', html: 'The mechanism is always the same: one site runs low, substitutes whatever a local supplier can deliver, and the substitution becomes permanent because nobody compared it against the original. Six months later two locations are running visibly different packaging under one brand.' },
          { t: 'p', html: 'The control that works is a retained physical sample per line, held centrally, with reorders referenced against it rather than against a written specification. A colour reference describes an intention; a printed sleeve from the approved run describes what was actually accepted. The wider set of decisions around holding a brand together across locations sits with <a href="/product/branded-burger-sleeves/">a sleeve treated as one item in a larger set</a>.' },
        ],
      },
      {
        heading: 'Reordering Without Re-Specifying Each Time',
        blocks: [
          { t: 'p', html: 'A range only stays a range if reordering is easy. Where each reorder reopens the specification, variants drift apart and the standardisation quietly undoes itself.' },
          {
            t: 'ol',
            items: [
              'Record the full specification per line — dimensions, board, weight, finish, print, any barrier',
              'Keep an approved physical sample of each line, dated, in a sealed bag',
              'Set reorder points from real consumption rather than from a calendar',
              'Reorder related lines together so one variant is never reprinted alone against older stock',
              'Re-approve against the retained sample rather than against the previous invoice',
            ],
          },
          { t: 'p', html: 'Step four prevents the most visible failure. Drift becomes obvious when a single item is reprinted on its own and then sits on a shelf beside stock from an earlier run, and staggered reordering guarantees that happens eventually.' },
        ],
      },
      {
        heading: 'Matching Board Choice To The Whole Range',
        blocks: [
          { t: 'p', html: 'One decision worth taking across the range rather than per item is the stock, because a shared board is what makes several variants look like one family.' },
          { t: 'p', html: 'Mixing a bright coated board on some items with an unbleached stock on others reads as inconsistency even when each choice was sensible individually. Where items sit on the same tray or in the same bag, that difference is visible at exactly the moment the customer forms an impression.' },
          { t: 'p', html: 'The 250 to 400 GSM band quoted here gives room to vary weight for heavier items while keeping the same surface across the range, which is usually the better trade. Deciding the surface once, for the family, is what stops the range looking assembled from spare parts. The same logic applies to fibre source: <a href="/product/recycled-burger-sleeves/">reclaimed content and the evidence behind it</a> is a decision worth taking across the whole range rather than for one line, since a documented figure is easier to hold for a family than for a single item.' },
        ],
      },
      {
        heading: 'Where A Standard Range Meets Its Limits',
        blocks: [
          { t: 'p', html: 'Standardisation is not free and it is not always right. Two situations pull against it and both are legitimate.' },
          { t: 'p', html: 'The first is a service setting the range was not designed around — a hatch, an outdoor pitch, a venue with its own constraints — where the operating conditions matter more than menu consistency does, and <a href="/product-category/special-sleeves-uses/">sleeves matched to particular service settings</a> is a better starting point than a menu-wide scheme.' },
          { t: 'p', html: 'The second is a signature item whose presentation is doing marketing work that a standard sleeve dilutes. That is a real reason to break the range for one product. It is not a reason to break it for five, and the discipline is treating each exception as a cost rather than a preference.' },
        ],
      },
      {
        heading: 'Specifying A Range In One Conversation',
        blocks: [
          { t: 'p', html: 'The efficient way to buy this is to bring the whole menu rather than one item, because a supplier can see overlaps a buyer working item by item will miss.' },
          { t: 'p', html: 'Send the full list of handheld items with their wrapped dimensions, your monthly volume per item, how many storage positions exist at the pass, and how many sites will reorder independently. Those four together determine how many lines the range should have, and they answer it better than any single measurement does.' },
          { t: 'p', html: 'Ask for the outcome as a specification sheet per line rather than a single quotation total. That sheet is what makes reordering repeatable, and it is the deliverable that keeps a range standardised after the first order has been placed. Where one menu item turns out to need its own workflow rather than its own size, <a href="/product/burger-and-fries-sleeves/">a sleeve chosen around a combined order</a> is a separate conversation from the range itself.' },
        ],
      },
    ],
    faqs: [
      { q: 'How many sleeve sizes should a fast food menu carry?', a: 'Start from two and justify each addition. Two keeps the selection binary and covers a surprising amount of a handheld menu. A third earns its place when a genuine outlier sells in volume; a fourth rarely does. Past that, staff-error cost usually exceeds the value of a tighter fit.' },
      { q: 'Should an item get its own sleeve if it does not fit well?', a: 'Test volume rather than fit. An item selling in small numbers can sit slightly loose in the size above it without anyone minding, and that is nearly always cheaper than carrying a dedicated line for it. Reserve new lines for items moving real quantity.' },
      { q: 'How do I stop staff using the wrong sleeve?', a: 'Usually by reducing choices and improving placement rather than by training. Variants that will not fit at the pass get stored further away, and the wrong sleeve gets used because the right one was six steps behind. A range that does not fit the bench will not be followed.' },
      { q: 'What is the best way to code items across a range?', a: 'Three options at different scales: a distinct printed design per item is clearest and costs most in setup; a shared design with a colour band or icon per variant keeps one artwork base; a clear panel taking a stamp is cheapest but depends on staff consistency.' },
      { q: 'Are QR codes and batch coding part of the identification scheme?', a: 'They serve a different purpose and are worth keeping separate. Batch coding and QR print handle traceability and campaign mechanics; counter identification is about staff telling items apart quickly. Mixing them clutters the panel and tends to weaken both jobs.' },
      { q: 'How do I keep several locations on the same packaging?', a: 'A retained physical sample per line, held centrally, with reorders referenced against it. Drift starts when one site runs low, substitutes locally, and the substitution becomes permanent. A colour reference describes an intention; a printed sleeve from the approved run describes what was accepted.' },
      { q: 'Why does reordering cause variants to drift apart?', a: 'Because each reorder reopens the specification if nothing is recorded. Keep the full specification per line, an approved dated sample, and reorder related lines together — drift becomes visible when one item is reprinted alone and then sits beside stock from an earlier run.' },
      { q: 'Should board weight be the same across all sizes?', a: 'Surface should be; weight need not be. The 250 to 400 GSM band gives room to use heavier stock for larger items while keeping one surface across the range, which is what makes several variants read as a family. Mixing surfaces reads as inconsistency.' },
      { q: 'How do I decide which variants to retire?', a: 'Watch which storage positions actually deplete. Consumption data identifies the variants earning their place far more reliably than an opinion about which items need their own sleeve. An untouched position is a line to remove at the next reorder.' },
      { q: 'When is it right to break the standard range?', a: 'For a signature item whose presentation is doing marketing work a standard sleeve would dilute, or for a service setting the range was not designed around. Both are legitimate for one product. Neither is a reason to break the range for five.' },
      { q: 'What styles are available across this range?', a: 'The specification lists straight wrap, open-end sleeve and pocket styles, with custom width, height and depth. Which suits an item depends on how it is assembled and how tidily it is wrapped first, so it is worth deciding per format rather than across the whole menu.' },
      { q: 'What should I send to specify a whole range at once?', a: 'The full list of handheld items with wrapped dimensions, monthly volume per item, how many storage positions exist at the pass, and how many sites reorder independently. Those four determine how many lines the range needs better than any single measurement.' },
      { q: 'What deliverable should I ask for at the end?', a: 'A specification sheet per line rather than a single quotation total. That sheet is what makes reordering repeatable and what keeps the range standardised after the first order. Without it, the second order reopens every decision the first one settled.' },
    ],
  },
};
