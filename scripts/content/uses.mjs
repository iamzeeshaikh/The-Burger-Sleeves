/**
 * Special Uses group, part one.
 *
 * The inherited copy repeated the same structural template as the Sizes group:
 * "[Use] Burger Sleeves For/That … " followed by "[Use] Sleeves That … ".
 * All six rewritten around a different operational problem.
 *
 *   TBS-035 Restaurant  — pass-to-table flow, order identification, multi-site
 *   TBS-036 Food Truck  — cubic space, hatch assembly, weather, small runs
 */

export const uses = {
  // ----------------------------------------------------------- RESTAURANT
  'TBS-035': {
    sections: [
      {
        heading: 'From The Pass To The Table',
        blocks: [
          { t: 'p', html: 'In a restaurant the sleeve is handled three or four times before anyone eats. It is formed at the station, loaded at the pass, lifted onto a tray or plate, carried across a floor, and set down in front of a customer. Each of those is a chance for the build to shift, and the sleeve either survives that journey looking deliberate or it arrives skewed.' },
          { t: 'p', html: 'That is a different requirement from takeaway packaging, which only has to survive a bag. A restaurant sleeve is looked at closely, in good light, from a seated position, for the length of a meal. Small defects that nobody notices in a paper bag — a crease across the face panel, a tab not seated fully, the burger sitting off-centre — are all visible on a table.' },
          { t: 'p', html: 'The practical consequence is that seating and centring matter more than raw strength here. A sleeve that grips well enough to hold the build square through a floor walk is doing the job. One that lets the burger rotate ten degrees on the way out looks careless when it lands.' },
        ],
      },
      {
        heading: 'Telling Orders Apart On A Loaded Tray',
        blocks: [
          { t: 'p', html: 'A server carrying four burgers has to know which is which without opening anything. In a kitchen running six or seven builds that look broadly similar once sleeved, that becomes a real source of mistakes, and the usual fix — a paper ticket tucked under the sleeve — falls out or gets greasy.' },
          { t: 'p', html: 'Sleeves can carry the identification themselves. The methods vary in cost and in how well they survive a busy service, and picking one is worth doing deliberately rather than defaulting to whatever the kitchen improvises.' },
          {
            t: 'table',
            caption: 'Ways to identify an order at a glance',
            headers: ['Method', 'Cost to set up', 'Holds up in service', 'Limitation'],
            rows: [
              ['Different sleeve colour per build', 'Separate stock line each', 'Very well', 'Multiplies stock and storage'],
              ['Printed icon or symbol on one panel', 'Artwork variants', 'Well', 'Needs staff to learn the key'],
              ['Sticker applied at the pass', 'Low, ongoing consumable', 'Moderate', 'Adds a step and can peel on grease'],
              ['Marker pen on a blank panel', 'None', 'Poorly', 'Looks improvised on a table'],
              ['Tucked paper ticket', 'None', 'Poorly', 'Falls out, absorbs grease'],
            ],
          },
          { t: 'p', html: 'Whichever route is taken, it needs to be readable from above, because that is the angle a server sees on a tray. A mark on the face panel is invisible when the sleeve is lying flat. Restaurants using printed identification usually build it into the same artwork run as their branding, which is easier to manage through <a href="/product/logo-printed-burger-sleeves/">single-mark printing where the logo placement is the whole job</a> than through separate label stock.' },
        ],
      },
      {
        heading: 'One Specification Across Several Sites',
        blocks: [
          { t: 'p', html: 'A single restaurant can tolerate a certain amount of drift. A group cannot. Once the same burger is produced in four kitchens, the packaging has to fit a build that varies slightly between them, and the sleeve becomes the thing that either absorbs that variation or exposes it.' },
          { t: 'p', html: 'Variation creeps in from bun supply, patty forming, and how heavily each kitchen dresses a build. None of those is worth policing to the millimetre, so the sleeve specification should be set against the widest version rather than the head-office standard. A sleeve sized to a perfectly built burger will be too tight in the busiest site.' },
          {
            t: 'ol',
            items: [
              'Ask each site to assemble the same menu item at a normal service pace',
              'Measure all of them wrapped, rather than taking one site as representative',
              'Set the specification against the largest, not the average',
              'Record which sites sit at the extremes so future drift is easy to spot',
              'Re-check whenever a bun or patty supplier changes at any location',
            ],
          },
          { t: 'p', html: 'Colour consistency needs the same treatment. A brand red approved at one site and reprinted a year later for another can drift enough to be visible when the two appear in the same marketing photograph. Keeping a retained physical sample as the reference, rather than a digital swatch, is what keeps a multi-site set looking like one brand.' },
        ],
      },
      {
        heading: 'Standardising Dimensions Across A Menu',
        blocks: [
          { t: 'p', html: 'Most restaurant menus can run on fewer sleeve sizes than they think. Every additional size is another stock line, another storage slot, another decision at the pass and another thing to run out of mid-service. The question worth asking is not what fits each item best, but how few sizes the menu can be served with acceptably.' },
          { t: 'p', html: 'The answer usually comes from grouping builds by their limiting dimension rather than by menu category. A chicken sandwich and a beef burger may sit in the same sleeve despite being different products, while two beef burgers of different heights may not. Grouping by what constrains the fit produces a smaller set than grouping by what is on the menu.' },
          { t: 'p', html: 'There is a floor to this. Pushing a tall build into a sleeve sized for a standard one crushes it, and a small item swimming in an oversized sleeve reads as short measure. Where the range genuinely will not compress, the standard house size is the one to get exactly right first, and everything else is specified around it. Most groups settle on <a href="/product/medium-burger-sleeves/">the everyday size that carries most of the menu</a> and then decide how many exceptions they can justify.' },
          {
            t: 'ul',
            items: [
              'Group builds by their limiting dimension, not by menu category',
              'Every extra size adds a stock line, a storage slot and a decision at the pass',
              'Get the highest-volume size exactly right before specifying any others',
              'Write the sleeve size into each item spec so nobody guesses during a rush',
              'Review the grouping whenever the menu changes rather than annually',
            ],
          },
        ],
      },
      {
        heading: 'Where A Bespoke Specification Pays Off',
        blocks: [
          { t: 'p', html: 'Restaurants are the setting where a bespoke sleeve most often justifies itself, because the packaging is on the table rather than in a bag. The customer has time to look at it, and it sits inside a room the operator has already spent money designing.' },
          { t: 'p', html: 'That said, bespoke should mean specified rather than elaborate. The decisions that matter most are dimensional fit to the actual build, a board that holds shape through a floor walk, and print that matches the rest of the room. Structural features and finishing effects come after those, not before.' },
          { t: 'p', html: 'Working out the specification is mostly a measuring and grouping exercise, and it is worth completing before asking for prices, because the answers change what is being quoted. Groups usually start from <a href="/product/custom-burger-sleeves/">the full bespoke specification process, covering dimensions, board, print and structure together</a> rather than pricing individual features in isolation.' },
        ],
      },
      {
        heading: 'Assembly At The Station, Not At The Pass',
        blocks: [
          { t: 'p', html: 'In most restaurant kitchens the sleeve is formed some distance from where the burger is finished, and by a different person. That separation is worth designing around, because a sleeve formed early and left waiting behaves differently from one formed at the moment of loading.' },
          { t: 'p', html: 'Pre-forming is efficient during a rush and it depends entirely on whether the structure holds its shape once open. A sleeve that springs back has to be re-formed at the pass, which puts the slowest step at the busiest point. One that stays open can be lined up in advance and filled in a single motion.' },
          { t: 'p', html: 'Where sleeves are pre-formed, they also need somewhere to wait that keeps them clean. Open sleeves stacked beside a grill collect airborne grease, and a sleeve that has been sitting open for an hour under a heat lamp is drier and more brittle at the folds than one taken from a sealed case.' },
          { t: 'p', html: 'Set a limit on how far ahead the station forms them and stick to it. Forming to the next twenty covers rather than the whole service keeps the stack fresh, and it avoids the end-of-night waste of breaking down sleeves that were never used.' },
        ],
      },
    ],
    faqs: [
      { q: 'How is a dine-in sleeve different from a takeaway one?', a: 'It is inspected far more closely. A dine-in sleeve is looked at in good light, from a seated position, for the length of a meal. Creases, an unseated tab or a burger sitting off-centre are all visible on a table and invisible in a paper bag. Seating and centring matter more than raw strength.' },
      { q: 'How can servers tell burgers apart on a tray?', a: 'The reliable methods are a different sleeve colour per build or a printed icon on a panel readable from above. Stickers applied at the pass add a step and can peel on grease. Marker pen and tucked paper tickets both look improvised and fail in service. Whatever you choose has to be readable looking down at a tray.' },
      { q: 'Should each menu item have its own sleeve size?', a: 'Usually not. Every additional size is another stock line, storage slot and decision at the pass. Group builds by their limiting dimension rather than by menu category — a chicken sandwich and a beef burger may share a sleeve while two beef burgers of different heights may not.' },
      { q: 'How do I specify a sleeve across several restaurant sites?', a: 'Ask each site to assemble the same item at normal service pace, measure all of them wrapped, and set the specification against the largest rather than the average. A sleeve sized to a perfectly built burger will be too tight in the busiest kitchen.' },
      { q: 'Why do burgers arrive at the table sitting crooked?', a: 'Usually the fit is loose enough to allow rotation during the floor walk. Test by loading a build, holding the sleeve horizontally and turning it slowly. If the burger stays put while the sleeve rotates around it, the clearance at the bottom of your range is too generous.' },
      { q: 'How do I keep brand colour consistent across locations?', a: 'Keep a retained physical sample from the approved run as the reference rather than a digital swatch, and check every reorder against it. Colour approved at one site and reprinted a year later for another can drift enough to be visible when both appear in the same photograph.' },
      { q: 'Is a bespoke sleeve worth it for a restaurant?', a: 'More often than for takeaway-only operations, because the packaging sits on a table inside a room you have already spent money designing. Bespoke should mean specified rather than elaborate — dimensional fit, a board that holds shape through a floor walk, and print that matches the room come before structural features.' },
      { q: 'What should be written into a menu item specification?', a: 'The sleeve size, alongside the build itself. If staff have to judge which sleeve an item takes during a rush, they hesitate or reach for the larger one to be safe. Recording it when a dish is created costs nothing and removes the decision.' },
      { q: 'How often should sleeve sizing be reviewed?', a: 'Whenever the menu changes or a bun or patty supplier changes, rather than on a calendar. Drift comes from supply changes more than from time, and a sleeve approved against a build that has since altered will show the mismatch during service.' },
      { q: 'Do sleeves work for plated dine-in service?', a: 'They are used both ways. On a plate the sleeve keeps the build together while the customer picks it up and gives a clean grip surface. Whether it suits the presentation is a judgement about the room rather than a packaging question, so it is worth trialling on a few covers first.' },
      { q: 'What board suits a restaurant sleeve?', a: 'Enough stiffness to hold the build square through a floor walk without feeling heavy in the hand. Give the supplier your build dimensions, weight and how far the sleeve travels between pass and table, and ask what calipers they would recommend for that combination.' },
      { q: 'Can the same sleeve serve dine-in and takeaway?', a: 'Often yes, though the demands differ. Takeaway needs a closure that holds under a sideways load in a bag; dine-in needs a clean face panel and accurate centring. A sleeve meeting both is common, but test it in a bag as well as on a table before committing.' },
    ],
  },

  // ----------------------------------------------------------- FOOD TRUCK
  'TBS-036': {
    sections: [
      {
        heading: 'How Much Space Does A Case Actually Take',
        blocks: [
          { t: 'p', html: 'Storage on a truck is measured in cubic feet and every one of them is already allocated. Packaging competes directly with dry goods, gas, water and the space a person needs to turn around in. That makes the physical footprint of a case as important as what is inside it.' },
          { t: 'p', html: 'Flat-packed sleeves are efficient, but the efficiency depends on how they are supplied. A case of sleeves that ships pre-formed occupies several times the space of the same count shipped flat, and on a truck that difference decides whether a week of stock fits or does not.' },
          { t: 'p', html: 'It is worth measuring the actual case rather than working from a unit count. Ask for case dimensions and units per case at quotation, then check them against the space you have before agreeing a quantity. A better unit price on a larger case is not a saving if the case will not fit through the door. Where a menu can run on a shorter sleeve, <a href="/product/small-burger-sleeves/">the compact format that stacks deeper in the same slot</a> recovers space that nothing else on a truck will.' },
          {
            t: 'table',
            caption: 'What to check before agreeing a case quantity',
            headers: ['Question', 'Why it matters on a truck'],
            rows: [
              ['Case external dimensions', 'Decides whether it fits the storage space at all'],
              ['Units per case', 'Sets how often you restock mid-week'],
              ['Flat or pre-formed', 'Pre-formed can be several times the volume'],
              ['Case weight', 'Affects loading and where it can be stored safely'],
              ['Whether cases stack', 'Vertical space is usually the only space left'],
              ['Resealable or single-open', 'A part-used open case takes damage in transit'],
            ],
          },
        ],
      },
      {
        heading: 'Assembling At A Hatch During A Rush',
        blocks: [
          { t: 'p', html: 'Truck service happens in a narrow window with a queue watching. There is rarely a second pair of hands, and the person assembling is also taking payment and calling orders. A sleeve that needs two hands and full attention is a sleeve that will be abandoned by the third week.' },
          { t: 'p', html: 'Single-motion assembly is the thing to test for. Can the sleeve be opened and the burger loaded without setting anything else down? Can it be done while looking at a customer rather than at the packaging? Those two questions predict whether a sleeve gets used as intended far better than any specification does.' },
          { t: 'p', html: 'A second person changes the calculation, and trucks that run two staff at peak often over-specify because the test was done with help available. Assemble the samples the way the quiet hours actually run, with one person, and the structural options usually narrow quickly.' },
          {
            t: 'ol',
            items: [
              'Hand samples to the person who actually works the window, not the owner',
              'Have them assemble ten while talking to someone else',
              'Repeat with warm, greasy hands, which is the real condition',
              'Count how many need a second attempt to seat the closure',
              'If more than one in ten needs rework, simplify the structure before ordering',
            ],
          },
          { t: 'p', html: 'Where the closure keeps failing under those conditions, the answer is usually a simpler structure rather than a better-trained operator. Trucks running high volume through a single window tend to settle on the simplest sleeve that holds, and reserve engineered closures for items that genuinely need containment.' },
        ],
      },
      {
        heading: 'Wind, Rain And Direct Sun',
        blocks: [
          { t: 'p', html: 'A truck serves into whatever weather is happening. That affects packaging in ways a fixed kitchen never has to think about, and most of it comes down to how paperboard responds to moisture and heat.' },
          { t: 'p', html: 'Humidity softens board. A case left open in damp air loses stiffness, and a sleeve that folded crisply in the morning can feel limp by the evening. Direct sun on a service counter has the opposite effect on stored stock but heats the sleeve itself, which accelerates how quickly grease moves into the fibre once a burger is loaded.' },
          { t: 'p', html: 'Wind is the underrated one. Flat sleeves in an open tray on a counter will go over the side, and chasing packaging across a car park during a rush is time nobody has. A closed dispenser or a weighted tray solves it for the cost of nothing much.' },
          { t: 'p', html: 'For sauce-heavy menus in warm conditions, the barrier decision does more work than the board decision. Heat thins fat and speeds absorption, so a build that holds up indoors can mark a sleeve outdoors in half the time. Trucks running juicy builds through summer usually specify <a href="/product/grease-resistant-burger-sleeves/">stock specified to cope with heat-thinned fat</a> rather than simply going heavier.' },
        ],
      },
      {
        heading: 'Ordering In Small Quantities On The Road',
        blocks: [
          { t: 'p', html: 'A truck cannot hold what a restaurant can, so ordering patterns differ. Smaller, more frequent orders suit the space but usually carry a worse unit price, and delivery to a mobile business is its own problem when there is no fixed address to receive stock at.' },
          { t: 'p', html: 'Most operators solve the delivery question with a home or lock-up address and then move stock to the truck in weekly quantities. That works, but it means the packaging is handled and stored twice, so a case that survives being moved matters more than it would for a fixed site.' },
          { t: 'p', html: 'Branded stock adds a further constraint, because a minimum order for a printed run is usually larger than a truck wants to store at once. Where that is the case, the practical route is a plain sleeve for everyday service and a printed run reserved for events or a season. Unbleached board suits this well, since <a href="/product/kraft-burger-sleeves/">kraft stock with a single-colour mark</a> reads as intentional without needing full-coverage artwork.' },
          {
            t: 'ul',
            items: [
              'Smaller frequent orders fit the space but usually cost more per unit',
              'Delivery needs a fixed address, so stock is handled twice',
              'A printed run has a minimum that may exceed what a truck can store',
              'Plain stock for everyday service and printed stock for events is a common split',
              'Keep part-used cases sealed, because open cases take damage while driving',
            ],
          },
        ],
      },
      {
        heading: 'Keeping The Service Window Clean',
        blocks: [
          { t: 'p', html: 'A truck has one work surface and it is also the surface customers see. Anything that leaks, drips or transfers onto that counter is visible to the person waiting, and cleaning it properly mid-rush is not realistic.' },
          { t: 'p', html: 'Sleeves contribute to this more than operators expect. A sleeve that absorbs grease quickly transfers it to the counter when set down, and a stack of sleeves resting where sauce has been wiped picks it up on the outer faces. Both produce packaging that looks used before it has been used.' },
          {
            t: 'ul',
            items: [
              'Keep the sleeve stack away from the assembly zone, not beside it',
              'A sealed or barrier-treated face transfers less onto the counter',
              'Wipe and dry the surface rather than wiping alone, since damp board softens',
              'Never restock a dispenser with sleeves that have been set on a wet counter',
              'Check the outer faces of the whole stack at changeover, not just the top sleeve',
            ],
          },
          { t: 'p', html: 'Bin placement matters for the same reason. A waste bin sited where customers hand back trays keeps used packaging away from the service surface, and a stall without one ends up with wrappers accumulating on the counter edge through a rush. Sauce management is the other half. Where a build is dressed at the window rather than in the kitchen, the sleeve is often already on the burger when the sauce goes near it. Dressing before sleeving, even by a few seconds, keeps the outer face clean and costs nothing to change.' },
        ],
      },
    ],
    faqs: [
      { q: 'How much storage space do sleeves take on a truck?', a: 'It depends entirely on whether they ship flat or pre-formed — pre-formed cases occupy several times the volume of the same count shipped flat. Ask for case external dimensions and units per case at quotation and check them against your actual space before agreeing a quantity.' },
      { q: 'Should I order larger cases for a better unit price?', a: 'Only if the case physically fits and can be stored safely. A better price on a bigger case is not a saving if it blocks a walkway or will not go through the door. Case dimensions and stackability matter as much as the price break.' },
      { q: 'What makes a sleeve workable at a service hatch?', a: 'Single-motion assembly. The test is whether it can be opened and loaded without setting anything else down, and while looking at a customer rather than at the packaging. A sleeve needing two hands and full attention gets abandoned within a few weeks however good it looks.' },
      { q: 'How should I test a sleeve for truck service?', a: 'Give samples to the person who actually works the window, not the owner. Have them assemble ten while talking to someone, then repeat with warm greasy hands. If more than one in ten needs a second attempt at the closure, simplify the structure before ordering.' },
      { q: 'Does humidity affect sleeves on a truck?', a: 'Yes. Paperboard absorbs moisture from damp air, which softens it, so a sleeve that folded crisply in the morning can feel limp by evening. Keeping cases sealed until needed and storing them away from open vents reduces the effect considerably.' },
      { q: 'Does hot weather change how sleeves perform?', a: 'It speeds up grease absorption, because heat thins fat and it moves into the fibre faster. A build that holds up indoors can mark a sleeve outdoors in half the time. On sauce-heavy menus in summer, the barrier decision does more work than the board decision.' },
      { q: 'How do I stop sleeves blowing off the counter?', a: 'A closed dispenser or a weighted tray. Flat sleeves in an open tray go over the side in any wind, and retrieving packaging from a car park during a rush is time you do not have. It is a cheap fix for a problem that recurs constantly.' },
      { q: 'Can I get branded sleeves in small quantities?', a: 'Printed runs carry a minimum that is often larger than a truck can store at once. A common split is plain stock for everyday service and a printed run reserved for events or a season. Ask what the minimum is for your artwork before assuming either way.' },
      { q: 'Where should stock be delivered for a mobile business?', a: 'Most operators use a home or lock-up address and move stock to the truck weekly. That means packaging is handled and stored twice, so how well a case survives being moved matters more than it would for a fixed site.' },
      { q: 'Do part-used cases keep well on a truck?', a: 'Less well than in a stockroom, because an open case takes damage from movement while driving and is exposed to whatever humidity is in the vehicle. Reseal or transfer the remainder into a closed container rather than leaving a case open.' },
      { q: 'Is kraft board a sensible choice for a truck?', a: 'It suits the setting well. Handling marks, dust and light grease shadowing are all far less visible on brown board than on white, and a single-colour mark on kraft reads as deliberate without needing full-coverage artwork or a large printed run.' },
      { q: 'What is the most common food truck packaging mistake?', a: 'Choosing a sleeve on how it looks rather than on how it assembles. The structural version photographs better and takes twice as long to build at a hatch, and within a month the truck is using something simpler that was not specified for the job.' },
    ],
  },
};
