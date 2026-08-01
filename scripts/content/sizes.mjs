/**
 * Sizes group, part one.
 *
 * The inherited copy scored low on word-overlap similarity but was templated at
 * the structural level: every page ran "[Size] Burger Sleeves That Keep …"
 * followed by "[Size] Sleeves That … Stations/Orders …", and four of six
 * carried a near-identical "size mapping" subsection. Rewritten so each page
 * argues about something the others do not:
 *
 *   TBS-023 Small        — measuring a small bun; portion control as pricing
 *   TBS-024 Medium       — fit tolerance maths; where one size stops working
 *   TBS-025 Large        — what extra weight demands of the board
 *
 * Heading grammar, section count, table subject and list type all differ.
 */

export const sizes = {
  // ---------------------------------------------------------------- SMALL
  'TBS-023': {
    sections: [
      {
        heading: 'Measuring A Small Bun Properly',
        blocks: [
          { t: 'p', html: 'Small sleeves fail more often than large ones, and almost always for the same reason: the burger was measured cold and unassembled. A 3.5-inch bun is 3.5 inches on a tray. Toasted, filled and pressed under a warm lid, it spreads. On a large build that spread is a small percentage of the total. On a small build it can be the difference between a sleeve that slides on and one that crushes the bun as it goes.' },
          { t: 'p', html: 'Measure the finished item, at service temperature, with the wrap already on it. Take the width across the widest point, which is usually the crown rather than the base, and take the height at the tallest point rather than the average. Then decide how much clearance you want on top of that, because a sleeve sized to the exact measurement will bind.' },
          { t: 'p', html: 'Small formats also have less margin for board thickness. A heavier caliper takes up internal space, and on a compact sleeve that reduction is proportionally larger than it would be on a wide one. Choosing a stiffer board for a small sleeve without adjusting the internal dimension is a common way to end up with stock that does not fit.' },
          {
            t: 'table',
            caption: 'What changes between a cold bun and a served build',
            headers: ['Measured at', 'Typical difference', 'Why it matters on a small sleeve'],
            rows: [
              ['Cold, unassembled', 'Baseline', 'Understates the finished size'],
              ['Toasted', 'Slight spread across the crown', 'Reduces side clearance'],
              ['Filled', 'Height increases, base widens', 'Consumes vertical clearance quickly'],
              ['Wrapped', 'Adds paper thickness on every face', 'Often overlooked entirely'],
              ['Held under a lid', 'Softens and settles outward', 'The condition the sleeve actually meets'],
            ],
          },
        ],
      },
      {
        heading: 'Portion Size Is A Pricing Decision',
        blocks: [
          { t: 'p', html: 'A small sleeve does more than hold a small burger. It signals the portion before the customer opens anything, and that signal has to agree with the price on the menu. A junior burger arriving in packaging clearly built for it reads as a deliberate portion. The same burger arriving loose inside a standard sleeve reads as short measure, whatever the menu said.' },
          { t: 'p', html: 'This matters most on kids\' items, value lines and lunch menus where the smaller size is the point. Packaging that visually matches the portion removes an argument at the counter that no operator wants to have during a busy service.' },
          { t: 'p', html: 'It also affects how a menu tiers. If small, standard and large builds all arrive in visually similar packaging, the price ladder between them is harder to justify. Operators running a graduated menu often step the packaging alongside the price, and check the step is visible by placing a small sleeve beside <a href="/product/medium-burger-sleeves/">the sleeve used for the standard house build</a> before finalising either.' },
          {
            t: 'ul',
            items: [
              'A visibly matched portion reduces size complaints at the counter',
              'Kids\' and value lines benefit most from packaging that reads as intentional',
              'A visible step between sizes supports the price ladder on the menu',
              'Mixed orders are easier to check when sizes are distinguishable by sight',
              'Staff assembling to a size chart make fewer wrong-sleeve errors',
            ],
          },
        ],
      },
      {
        heading: 'Counter Storage And Speed',
        blocks: [
          { t: 'p', html: 'Small sleeves take up less room per unit, which sounds like an advantage until they are stored badly. Because they are light and compact, they are frequently kept loose in a tray rather than in a dispenser, and loose small sleeves tangle. Staff reaching for one pull three, drop two and lose a second every time.' },
          { t: 'p', html: 'Keeping small sleeves flat and in a defined slot solves most of that. The compact footprint then becomes a genuine advantage, because a station can hold a deeper stack of them in the same space allocated to a larger size.' },
          { t: 'p', html: 'Speed of assembly is generally good on small formats, as there is less panel to fold and less distance for the tab to travel. The exception is anything with a tight closure, where small hands-on tolerances become fiddly during a rush. If assembly time is a concern on a compact format, <a href="/product/cafe-burger-sleeves/">the sleeves used for lower-volume counter service</a> tend to prioritise a simpler closure over a structural one.' },
        ],
      },
      {
        heading: 'Picking The Right Sleeve Under Pressure',
        blocks: [
          { t: 'p', html: 'Once a menu runs more than one sleeve size, the packaging stops being only a fit question and becomes a selection question. During a rush, the person assembling has a second to decide which sleeve a burger goes into, and if two sizes look alike from a stack that decision goes wrong regularly.' },
          { t: 'p', html: 'Wrong-sleeve errors are quiet. Nobody logs them. A small build goes out in a standard sleeve and the customer sees a portion swimming in packaging; a standard build gets forced into a small sleeve and the bun is crushed on the way in. Neither generates a complaint often enough to show up as a pattern, and both cost something every time.' },
          { t: 'p', html: 'The fix is making sizes distinguishable without reading anything. A visible difference in footprint is the cheapest route. A different board shade or a different print treatment works too, though it means separate artwork. Some operators simply store the two sizes at opposite ends of the station so the reach itself is different.' },
          { t: 'p', html: 'It is worth checking how a small sleeve behaves in a mixed bag as well. Lighter items travel differently: a small sleeved burger sitting beside a large one can be pushed sideways or tipped as the bag settles, and a build that was centred at the counter arrives leaning. Bagging order matters more with mixed sizes than with a uniform one.' },
          {
            t: 'table',
            caption: 'Making two sleeve sizes hard to confuse',
            headers: ['Method', 'Cost', 'How reliable it is in a rush'],
            rows: [
              ['Visibly different footprint', 'None beyond the size difference', 'High — judged by hand, not by eye'],
              ['Different board shade', 'Second board line to stock', 'High'],
              ['Different print treatment', 'Separate artwork and plates', 'Moderate — depends on how bold the difference is'],
              ['Separate storage positions', 'None', 'Moderate — depends on discipline'],
              ['Printed size label on the sleeve', 'Artwork change only', 'Low during a rush; nobody reads it'],
            ],
          },
        ],
      },
      {
        heading: 'Ordering A Small Format',
        blocks: [
          {
            t: 'ol',
            items: [
              'Assemble your smallest menu item exactly as it leaves the kitchen, wrap included',
              'Measure crown width and maximum height while it is still warm',
              'Add the clearance you want on top of those figures and record it separately',
              'Ask what board calipers are offered at that internal dimension',
              'Request samples and slide a real burger into one before signing off',
              'Confirm the small format is visibly different from your standard sleeve',
            ],
          },
          { t: 'p', html: 'Give both the measured figures and the intended clearance, not a single combined number. A supplier needs to know which part is the burger and which part is the allowance, because that determines how any board thickness change is absorbed. Handing over a photograph of the assembled item next to a ruler communicates more than measurements alone. If your menu also runs multi-item portions, it is worth checking those against <a href="/product/slider-burger-sleeves/">the format built for mini burgers served several at a time</a> before ordering two similar sizes.' },
        ],
      },
      {
        heading: 'When A Compact Sleeve Is The Wrong Answer',
        blocks: [
          { t: 'p', html: 'A small sleeve is not always the right response to a small burger. If the item is short but wide — a flat patty in a broad bun, for instance — the constraint is width, and a sleeve chosen for its compact height will bind at the sides while leaving vertical space unused.' },
          { t: 'p', html: 'The same applies to items that are small but wet. A slider-sized build with a generous sauce is producing the same amount of liquid in a smaller sleeve, so the board is proportionally more exposed. Reaching for a compact size to save cost on a messy item usually costs more in replaced sleeves than it saves.' },
          { t: 'p', html: 'Judge the format by which dimension is actually limiting and by how wet the build is, rather than by whether the burger reads as small on the menu. Those two questions decide the format more reliably than the portion name does.' },
        ],
      },
    ],
    faqs: [
      { q: 'How do I measure a small burger for a sleeve?', a: 'Measure the finished item at service temperature with its wrap already on. Take width across the widest point, usually the crown rather than the base, and height at the tallest point. A cold, unassembled bun understates the finished size, and on a compact build that gap is proportionally large enough to make a sleeve bind.' },
      { q: 'Why do small sleeves seem to fit badly more often?', a: 'Because there is less margin. The same absolute amount of bun spread, wrap thickness or board caliper takes up a much larger share of a small sleeve\'s internal space than a large one. A measurement error of a few millimetres that a large sleeve absorbs will crush a small bun.' },
      { q: 'Does board thickness affect the internal size?', a: 'Yes, and it catches people out on compact formats. A heavier caliper occupies internal space, so switching to a stiffer board without adjusting the internal dimension effectively shrinks the sleeve. On a small format that reduction is proportionally significant. Specify internal dimensions, not just external ones.' },
      { q: 'How much clearance should I allow on a small sleeve?', a: 'There is no single figure, because it depends on how much your build settles and how stiff the board is. Give the supplier your measured burger dimensions and your intended clearance as separate numbers rather than one combined figure, so they can see which part is food and which is allowance.' },
      { q: 'Are small sleeves suitable for kids\' menu items?', a: 'They are a common use. Packaging that visibly matches the portion reads as a deliberate size rather than a short measure, which removes a recurring counter conversation. The size step also helps staff pick the right item quickly when a mixed family order is being assembled.' },
      { q: 'Will a smaller sleeve save much storage space?', a: 'Per unit, yes, though the gain is often lost to poor storage. Small sleeves kept loose in a tray tangle, and staff pull several at once. Kept flat in a defined slot, the compact footprint lets a station hold a deeper stack in the same space allocated to a larger size.' },
      { q: 'Are small sleeves quicker to assemble?', a: 'Usually, because there is less panel to fold and a shorter distance for any tab to travel. The exception is a tight structural closure, where the small tolerances become fiddly during a rush. If speed matters, favour a simpler closure over a more engineered one on compact formats.' },
      { q: 'Can one sleeve cover both small and standard builds?', a: 'It can, but the small item will move inside it and will read as under-portioned. If the menu prices the two differently, a visible size step supports that difference. If the price is the same, a single size is simpler to stock and train around.' },
      { q: 'Does a small sleeve need a different board weight?', a: 'A smaller sleeve carries less weight and spans a shorter distance, so it can often use a lighter caliper than a large format while staying stable. That is worth asking about, because it changes both cost and internal clearance.' },
      { q: 'What should I send a supplier when ordering small sleeves?', a: 'The measured width and height of the finished, wrapped item at service temperature, your intended clearance stated separately, the board you have in mind, and a photograph of the assembled burger beside a ruler. The photograph resolves ambiguities that numbers alone leave open.' },
      { q: 'Should small sleeves look different from the standard size?', a: 'A visible difference helps in two ways. Customers read the portion correctly, and staff pick the right sleeve without checking. That can be a size step alone, or a colour or print variation, depending on how much you want to spend on separate artwork.' },
      { q: 'Do small sleeves need an inner wrap?', a: 'The wrap decision depends on the food rather than the sleeve size. A small burger with sauce or a juicy patty still benefits from a greaseproof inner layer. Remember to include the wrap thickness when measuring, because on a compact format it consumes noticeable clearance.' },
    ],
  },

  // --------------------------------------------------------------- MEDIUM
  'TBS-024': {
    sections: [
      {
        heading: 'One Size Carrying Most Of The Menu',
        blocks: [
          { t: 'p', html: 'The medium sleeve is rarely chosen for a single item. It is chosen because it has to cover the house burger, the cheeseburger, the chicken sandwich and whatever the special happens to be that week. That makes it a tolerance problem rather than a fit problem, and the two need different thinking.' },
          { t: 'p', html: 'A fit problem asks: does this sleeve suit this burger? A tolerance problem asks: what is the range of builds this sleeve must accept without either crushing the smallest or letting the largest slide out? Answering the second question well is what keeps an operator from stocking four sizes when two would do.' },
          { t: 'p', html: 'Working that range out starts with measuring the extremes, not the average. Take the smallest item the sleeve will hold and the largest, both assembled and wrapped, and treat those two figures as the boundaries the sleeve has to live between.' },
        ],
      },
      {
        heading: 'How Much Movement Is Acceptable',
        blocks: [
          { t: 'p', html: 'Some movement is fine. A burger that shifts a few millimetres inside its sleeve is not a defect, and a sleeve gripping tightly enough to eliminate all movement will be difficult to load quickly. The question is where movement stops being harmless and starts being visible to a customer.' },
          { t: 'p', html: 'Three thresholds usually matter. The first is rotation: if the burger can turn inside the sleeve, printed artwork no longer faces forward. The second is slide: if it can travel along the sleeve axis, the wrap edge starts to show. The third is tilt: if it can lean, the build settles unevenly and toppings migrate.' },
          { t: 'p', html: 'Rotation is generally the one customers notice first, because it puts your logo somewhere other than where you intended. Testing for it is simple — load the smallest item in the range, hold the sleeve horizontally and turn it slowly. Operators tightening this up often compare the medium against <a href="/product/large-burger-sleeves/">the wider format sized for heavier builds</a> to see whether splitting the range is cheaper than tolerating the movement.' },
          {
            t: 'table',
            caption: 'Movement thresholds and what each one causes',
            headers: ['Movement', 'Test', 'Visible result'],
            rows: [
              ['Rotation', 'Hold horizontally and turn', 'Artwork faces the wrong way'],
              ['Axial slide', 'Tilt end to end', 'Wrap edge becomes visible'],
              ['Tilt', 'Set down and observe', 'Toppings migrate, build settles unevenly'],
              ['Compression', 'Load the largest item in range', 'Bun deforms, sleeve bows outward'],
              ['Loose closure', 'Carry in a bag', 'Sleeve works open in transit'],
            ],
          },
        ],
      },
      {
        heading: 'Where A Single Size Stops Working',
        blocks: [
          { t: 'p', html: 'There is a point where stretching one sleeve across a range costs more than adding a second size. It arrives sooner than most operators expect, because the cost of a poor fit is spread thinly across many orders rather than appearing as one obvious expense.' },
          { t: 'p', html: 'The signals are consistent. Staff start double-wrapping certain items to stop them moving. Some builds get sleeved and then re-sleeved. Customers on delivery report packaging arriving open. Any of those is the range asking to be split.' },
          {
            t: 'ol',
            items: [
              'List every menu item the medium sleeve currently holds',
              'Assemble and measure the smallest and largest of them, wrapped',
              'Load each into the current sleeve and run the rotation and slide tests',
              'Note which items fail and how often they appear in orders',
              'Compare the cost of a second sleeve size against the handling loss on those items',
            ],
          },
          { t: 'p', html: 'Splitting the range does not always mean adding a bigger sleeve. Sometimes the outlier is at the small end, and the cheaper fix is a compact format for the two or three items that rattle. Reviewing <a href="/product-category/burger-sleeves-sizes/">how the sizes step against one another across the range</a> makes that call easier than looking at any single product in isolation.' },
        ],
      },
      {
        heading: 'Stocking The Highest-Volume Line',
        blocks: [
          { t: 'p', html: 'The medium sleeve is usually ordered in larger quantities than everything else combined, which changes the purchasing calculation. Unit price matters more here than on any other line, and so does storage, because a quantity that suits the price break may not suit the stockroom.' },
          { t: 'p', html: 'Two costs pull against each other. Ordering less often reduces the unit price and the administrative load. Ordering more often reduces the space tied up and the risk of holding a large quantity of packaging that a menu change makes obsolete. Neither is right in the abstract; it depends on how stable the menu is and how much dry storage exists.' },
          { t: 'p', html: 'Menu volatility is the factor most often left out. A business that reprints packaging artwork twice a year should not be holding nine months of stock, however good the price was. A business running the same build for years can safely take the larger quantity.' },
          {
            t: 'ul',
            items: [
              'Unit price improves with quantity, but so does the risk of obsolete stock',
              'Measure the cases physically before committing to a large delivery',
              'Artwork changes turn held stock into waste, so match quantity to menu stability',
              'Keep sleeves sealed and away from steam until the case is opened',
              'Rotate stock so older cases are used first and none sits exposed for months',
            ],
          },
          { t: 'p', html: 'Storage conditions deserve a mention because paperboard responds to its environment. Cases stored near a dishwasher, under a steam pass or against an external wall in a damp season absorb moisture, and board that has taken up moisture is less stiff and behaves differently at the closure. That is usually blamed on the supplier when it is a storage issue.' },
        ],
      },
      {
        heading: 'Keeping The Standard Size Consistent',
        blocks: [
          { t: 'p', html: 'A medium sleeve is usually the highest-volume line in a packaging programme, which means small variations get multiplied. A board caliper change between production runs alters internal clearance. A slight dimensional shift changes how a familiar build sits. Neither is dramatic on one unit and both are noticeable across a service.' },
          { t: 'p', html: 'Retain an approved physical sample from every run and check new stock against it before the old stock runs out. That gives you time to raise a discrepancy while you still have working packaging, rather than finding out mid-shift with nothing to fall back on.' },
          { t: 'p', html: 'It is also worth recording which menu items the size was signed off against. Menus change, patty weights drift, buns get swapped by a bakery, and a sleeve approved eighteen months ago may no longer match what the kitchen is producing. Front-of-house operators reviewing this periodically often align it with <a href="/product/restaurant-burger-sleeves/">the packaging used for seated and counter service</a> so the whole set is checked at once.' },
        ],
      },
      {
        heading: 'Training A Team Around One Standard',
        blocks: [
          { t: 'p', html: 'A standard size only saves time if everyone treats it as the default. Where a team is unsure which sleeve an item takes, they hesitate, check, or pick the larger one to be safe — and picking the larger one to be safe is how a standard size quietly stops being standard.' },
          { t: 'p', html: 'The clearest way to remove the hesitation is a short written rule tied to menu items rather than to dimensions. Staff should not be estimating whether a build looks like it needs the bigger sleeve; they should know that these six items take the standard and those two do not.' },
          { t: 'p', html: 'That list needs revisiting whenever the menu changes. A new special that nobody assigned a sleeve to becomes a judgement call at the pass, and judgement calls during a rush default to the largest available option. Adding the sleeve size to the item spec when a dish is created costs nothing and prevents it.' },
          { t: 'p', html: 'It is also worth watching what happens when the standard size runs out mid-service. If the fallback is the next size up, the fit problems that follow are worth anticipating rather than meeting unprepared. Knowing which items tolerate the substitution and which do not is useful information to have written down before it is needed.' },
        ],
      },
    ],
    faqs: [
      { q: 'What makes a medium sleeve different from just a mid-size sleeve?', a: 'It is usually specified to cover a range rather than a single item — the house burger, the cheeseburger, the chicken sandwich and rotating specials. That makes it a tolerance decision, defined by the smallest and largest builds it must accept, rather than a fit decision for one product.' },
      { q: 'How do I work out the range one sleeve should cover?', a: 'Measure the extremes rather than the average. Assemble and wrap the smallest item the sleeve will hold and the largest, take width and height on both at service temperature, and treat those two figures as the boundaries the sleeve has to live between.' },
      { q: 'Is some movement inside the sleeve acceptable?', a: 'Yes. A few millimetres of shift is normal, and a sleeve tight enough to prevent all movement is slow to load. What matters is which kind of movement it is: rotation turns your artwork away from the customer, axial slide exposes the wrap edge, and tilt lets toppings migrate.' },
      { q: 'How do I test whether a burger rotates inside the sleeve?', a: 'Load the smallest item in the range, hold the sleeve horizontally and turn it slowly. If the burger stays put and the sleeve turns around it, the fit is too loose at the bottom of your range. Rotation is usually the first fault a customer notices, because the printed face ends up somewhere unintended.' },
      { q: 'When should I add a second sleeve size?', a: 'When staff start double-wrapping certain items to stop them moving, when builds get sleeved and re-sleeved, or when delivery customers report packaging arriving open. Each of those is the range asking to be split, and the handling cost is usually already larger than the cost of a second size.' },
      { q: 'Is a bigger second size always the answer?', a: 'No. Sometimes the outlier sits at the small end and the cheaper fix is a compact format for the two or three items that rattle. Look at where the failures actually cluster before assuming you need to go up rather than down.' },
      { q: 'Does board caliper affect fit between production runs?', a: 'It can. A change in board thickness alters internal clearance even when the external dimensions are unchanged, and on a high-volume line that difference is noticeable across a service. Specify internal dimensions and confirm the caliper on each reorder.' },
      { q: 'How should I check new stock against old?', a: 'Retain an approved physical sample from every run, and compare new stock against it before the old stock runs out. Doing it early gives you time to raise a discrepancy while you still have working packaging rather than finding out mid-shift.' },
      { q: 'Should I re-check the size when the menu changes?', a: 'Yes. Patty weights drift, bakeries change bun specifications, and specials come and go. A sleeve approved against a menu eighteen months ago may no longer match what the kitchen produces. Record which items the size was signed off against so the review is quick.' },
      { q: 'Does a medium sleeve work for chicken and plant-based builds?', a: 'Often, but they should be measured rather than assumed. A chicken fillet can be wider and flatter than a beef patty, and some plant-based patties sit taller. Include them when you measure the extremes of the range instead of treating beef as representative.' },
      { q: 'Why does the same sleeve feel tighter in summer?', a: 'Paperboard responds to humidity, and a kitchen in warm weather is a more humid environment. Board that has absorbed moisture is slightly less stiff and can behave differently at the closure. Storing stock sealed and away from steam reduces the effect.' },
      { q: 'What is the most common medium-sleeve mistake?', a: 'Sizing it around the average build rather than the extremes. The average item fits perfectly, the smallest rattles and the largest crushes, and because most orders sit in the middle the problem is dismissed as occasional rather than structural.' },
    ],
  },
};
