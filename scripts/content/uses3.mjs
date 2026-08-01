/**
 * Special Uses group, part three.
 *   TBS-039 Promotional — campaign windows, QR codes, artwork zoning, proofs
 *   TBS-040 Event       — guest counts, sponsors, stations, storage, leftovers
 */

export const uses3 = {
  // --------------------------------------------------------- PROMOTIONAL
  'TBS-039': {
    sections: [
      {
        heading: 'A Campaign Has An End Date',
        blocks: [
          { t: 'p', html: 'Everything about promotional packaging follows from one fact: it stops being useful on a known date. Standard sleeves get reordered indefinitely. A campaign sleeve is obsolete the morning after the offer closes, and any surplus is waste rather than stock.' },
          { t: 'p', html: 'That reverses the usual purchasing logic. On a standard line, ordering more improves the unit price and the surplus gets used eventually. On a campaign line, ordering more improves the unit price and the surplus goes in a bin. The cheapest option per unit is frequently the most expensive option overall.' },
          { t: 'p', html: 'Working backwards from the campaign length is the only reliable method. Estimate daily uptake honestly, multiply by the campaign days, and add a margin for the campaign performing better than expected — not a margin for a price break. Because the run cannot repeat cheaply, it is worth settling the whole specification early through <a href="/product/custom-burger-sleeves/">a bespoke brief covering board, print and quantity together</a>.' },
          {
            t: 'ol',
            items: [
              'Fix the campaign start and end dates before ordering anything',
              'Estimate daily uptake from a comparable past promotion, not from hope',
              'Multiply by campaign days and add a modest overage for stronger uptake',
              'Check that quantity against the printing minimum before designing',
              'Decide in advance what happens to surplus if uptake is lower than planned',
            ],
          },
        ],
      },
      {
        heading: 'Putting A QR Code On Paperboard',
        blocks: [
          { t: 'p', html: 'QR codes are the most common addition to a promotional sleeve and the most common thing to get wrong. A code that scans perfectly on a screen can fail on printed board, and the reasons are mechanical rather than digital.' },
          { t: 'p', html: 'Size is the first issue. A code needs enough physical area for a phone camera to resolve at arm\'s length, and shrinking it to fit a spare corner is how codes stop scanning. Contrast is the second: a code printed in a brand colour on a mid-tone board may not have enough separation for a camera to read reliably.' },
          { t: 'p', html: 'Placement is the third and the one nobody tests. A code positioned where a hand naturally grips, or across a fold, will be covered or distorted exactly when someone tries to scan it. A code that sits under grease after two bites is equally useless.' },
          { t: 'p', html: 'None of that says anything about what the code does after it is scanned. Whether scans can be counted, attributed to a campaign or tied to a redemption depends entirely on what sits behind the link, and that is a separate piece of work to arrange rather than something the printed sleeve provides on its own.' },
          {
            t: 'table',
            caption: 'Why a QR code fails on a printed sleeve',
            headers: ['Cause', 'What happens', 'How to avoid it'],
            rows: [
              ['Printed too small', 'Camera cannot resolve at arm\'s length', 'Test the printed proof at real viewing distance'],
              ['Low contrast against the board', 'Scanner cannot find the pattern', 'Use high contrast, not a brand tint'],
              ['Placed across a fold', 'Pattern distorts when assembled', 'Keep it inside one flat panel'],
              ['Placed in the grip zone', 'Covered by a hand or greasy after two bites', 'Position away from where the sleeve is held'],
              ['Printed on a dark ground without an underbase', 'Pattern too weak to read', 'Reverse the code out or add a light patch'],
            ],
          },
        ],
      },
      {
        heading: 'Zoning The Artwork Before Design Starts',
        blocks: [
          { t: 'p', html: 'A promotional sleeve carries more competing content than a standard one — offer wording, dates, terms, a code, a logo, sometimes a partner mark. Deciding where each of those lives before design begins prevents the usual outcome, which is a crowded panel where nothing is read.' },
          { t: 'p', html: 'Zoning starts with the physical realities. Which panel faces the customer when the sleeve is handed over. Which area disappears under a hand. Which parts fold. Which surface is likely to be marked by the food. Those four questions dictate placement more than any layout preference.' },
          { t: 'p', html: 'The offer itself should occupy the panel that faces outward at handover, because that is the only moment the packaging has undivided attention. Small print and terms can go anywhere legible; they are read after the decision, not before it.' },
          { t: 'p', html: 'Campaign artwork also tends to want full-bleed colour, which brings its own production considerations — heavy ink coverage on board, colour drift across a run, and folds through dense printed areas. Those are worth understanding before committing, and they sit alongside <a href="/product/full-color-burger-sleeves/">edge-to-edge process printing and what heavy coverage does on board</a>.' },
        ],
      },
      {
        heading: 'Approving A Proof Under Time Pressure',
        blocks: [
          { t: 'p', html: 'Campaign work runs to a launch date, and proofing is the stage that gets compressed when everything else slips. That is the wrong place to save time, because a campaign sleeve cannot be quietly corrected on the next reorder — there is no next reorder.' },
          { t: 'p', html: 'A screen proof is not sufficient for anything with a code, a colour match or fine terms text. Those three need to be seen printed, at size, on the intended board. A physical proof also catches the thing screens never show: how the artwork sits once the sleeve is folded, which is not how it looks flat.' },
          {
            t: 'ul',
            items: [
              'Check the offer wording and dates against the signed-off campaign brief',
              'Scan any code from the printed proof with more than one phone',
              'Read the terms text at arm\'s length rather than zoomed in',
              'Fold the proof and confirm nothing important lands on a crease',
              'Have someone outside the project read the offer and say what they think it means',
            ],
          },
          { t: 'p', html: 'That last check catches more problems than the technical ones. An offer that is obvious to the people who wrote it is regularly ambiguous to a customer reading it for two seconds at a counter, and ambiguity printed onto several thousand sleeves cannot be edited.' },
        ],
      },
      {
        heading: 'Keeping The Brand Recognisable Under Campaign Artwork',
        blocks: [
          { t: 'p', html: 'A promotion is temporary and the brand is not, so campaign artwork should sit on top of the identity rather than replace it. Sleeves that look entirely unrelated to the usual packaging read as a different business, which is a strange effect during the period you most want to be recognised.' },
          { t: 'p', html: 'The usual compromise is to keep the structural brand elements — the logo, the typeface, the base colour — and let the campaign own a defined zone. That keeps the set coherent when promotional and standard sleeves inevitably appear on the same table.' },
          { t: 'p', html: 'It also makes the return to standard packaging invisible. When the campaign ends, the difference should be a panel changing rather than the whole item looking different. Where a business runs frequent short promotions, that consistency is easier to maintain with a fixed logo treatment, which is what <a href="/product/logo-printed-burger-sleeves/">printing a single mark with defined placement</a> is designed around.' },
        ],
      },
      {
        heading: 'Running One Campaign Across Several Sites',
        blocks: [
          { t: 'p', html: 'A promotion that runs in one location is a print job. The same promotion across a group is a logistics problem, because every site needs stock on the same morning and none of them can start early or finish late without breaking the offer.' },
          { t: 'p', html: 'Splitting a single print run between sites is usually cheaper than separate runs, but it means one delivery has to be broken down and distributed, and that step is where campaigns slip. Deciding who splits it, when, and how it reaches each site belongs in the plan rather than in a conversation the week before.' },
          { t: 'p', html: 'Sites also sell at different rates, so an even split guarantees that one runs out while another has boxes left. Weighting the distribution towards the busier locations, using whatever sales data already exists, gets closer than dividing by site count.' },
          { t: 'p', html: 'Finally, agree what happens when a site does run out mid-campaign. Falling back to standard sleeves is usually acceptable; falling back with no plan means a manager improvising with a marker pen on the busiest day of the promotion.' },
        ],
      },
    ],
    faqs: [
      { q: 'How many promotional sleeves should I order?', a: 'Work from the campaign length rather than the price break. Estimate daily uptake from a comparable past promotion, multiply by campaign days, and add a modest margin for stronger performance. Surplus on a campaign line is waste rather than stock, so the cheapest unit price is often the most expensive total.' },
      { q: 'Why does my QR code fail to scan from the sleeve?', a: 'Usually size, contrast or placement. A code needs enough physical area to resolve at arm\'s length, enough separation from the board colour for a camera to find the pattern, and a position away from folds and the grip zone. Test from a printed proof, not a screen.' },
      { q: 'Can a QR code on a sleeve track campaign performance?', a: 'The printed code itself only carries a link. Whether scans can be counted, attributed or tied to redemptions depends entirely on what sits behind that link, which is a separate piece of work to set up. Do not assume the packaging provides measurement on its own.' },
      { q: 'Where should the offer wording sit on the sleeve?', a: 'On the panel facing outward at handover, because that is the only moment the packaging has undivided attention. Terms and small print can go anywhere legible — they are read after the decision rather than before it.' },
      { q: 'How do I decide artwork placement on a promotional sleeve?', a: 'Answer four physical questions first: which panel faces the customer at handover, which area disappears under a hand, which parts fold, and which surface the food is likely to mark. Those dictate placement more reliably than any layout preference.' },
      { q: 'Is a screen proof enough for campaign artwork?', a: 'Not for anything with a code, a colour match or fine terms text. Those need to be seen printed, at size, on the intended board. A physical proof also shows how artwork sits once the sleeve is folded, which is never how it looks flat on screen.' },
      { q: 'What should I check on a campaign proof?', a: 'Offer wording and dates against the signed brief, code scanning from the printed sheet with more than one phone, terms text read at arm\'s length, nothing important landing on a crease, and someone outside the project explaining what they think the offer means.' },
      { q: 'Should campaign artwork replace my usual branding?', a: 'Better to sit on top of it. Sleeves that look unrelated to your normal packaging read as a different business during the period you most want recognition. Keep the logo, typeface and base colour, and let the campaign own a defined zone.' },
      { q: 'What happens to leftover campaign stock?', a: 'It is generally unusable once the dates have passed, which is why quantity planning matters more here than on a standard line. Decide before ordering what you will do if uptake is lower than expected, rather than after the campaign ends.' },
      { q: 'Can a promotional run be reordered mid-campaign?', a: 'That depends on lead time and press availability, and on a short campaign the reorder may arrive after the offer closes. Ask about realistic turnaround before setting the quantity, and treat a mid-campaign top-up as something to confirm rather than assume.' },
      { q: 'Does full-coverage campaign artwork cause production issues?', a: 'It brings considerations rather than problems: heavy ink coverage over large solid areas shows mottling more readily, colour can drift across a long run, and folds through dense printed areas are more prone to visible cracking. All are reasons to review a full-size printed proof.' },
      { q: 'How far ahead should a campaign sleeve be ordered?', a: 'Far enough that a proof can be reviewed properly and a correction made without threatening the launch date. Proofing is what gets compressed when other things slip, and it is the worst stage to shorten because a campaign sleeve cannot be quietly fixed on the next reorder.' },
    ],
  },

  // ---------------------------------------------------------------- EVENT
  'TBS-040': {
    sections: [
      {
        heading: 'Counting Guests, Not Orders',
        blocks: [
          { t: 'p', html: 'Event catering plans from a guest number, which is a different quantity from an order count. Some guests eat twice, some eat nothing, and children eat differently from adults. Packaging ordered against a headcount alone is either short at the wrong moment or left over in quantity.' },
          { t: 'p', html: 'The useful figure sits between the two, and it depends on the format. A seated dinner where each guest receives one item is close to the headcount. A festival stand where people graze across an evening is nothing like it. A wedding where burgers arrive late as a second serving is different again.' },
          { t: 'p', html: 'Because the ordering happens weeks before the event, the estimate cannot be corrected later. That makes the overage decision a deliberate one rather than an afterthought — and unlike a restaurant, there is no next week in which to use the surplus. Events serving a burger alongside a side need both counted together, which is easier when the pairing uses <a href="/product/burger-and-fries-sleeves/">packaging designed to carry two items in one handoff</a>.' },
          {
            t: 'table',
            caption: 'How the format changes the quantity you need',
            headers: ['Event format', 'Relationship to headcount', 'What drives the variance'],
            rows: [
              ['Seated dinner, one service', 'Close to headcount', 'Only no-shows and dietary swaps'],
              ['Buffet or station service', 'Above headcount', 'Guests returning for a second item'],
              ['Late-night second serving', 'Well below headcount', 'Guests who have already left'],
              ['Festival or public stand', 'Unrelated to any headcount', 'Footfall, weather and pricing'],
              ['Corporate lunch', 'Close to headcount', 'Attendance confirmed in advance'],
            ],
          },
        ],
      },
      {
        heading: 'Whose Brand Goes On The Sleeve',
        blocks: [
          { t: 'p', html: 'Event packaging often carries more than one identity. The caterer has a brand, the venue may have one, and where there is a sponsor the sleeve becomes advertising space that somebody else has paid for. Sorting out whose mark sits where is a conversation to have before artwork, not during proofing.' },
          { t: 'p', html: 'The practical question is which mark occupies the panel facing outward at handover. That is the position with the most attention, and it is usually contested. A sponsor paying for the run will expect it; a caterer building their own reputation will want it.' },
          { t: 'p', html: 'A workable arrangement is one dominant mark on the customer-facing panel and secondary marks on a side or reverse panel. Splitting the main panel between two logos of equal weight generally serves neither, because at handover the customer registers one thing at most.' },
          { t: 'p', html: 'Temporary branding is also a quantity decision. A sleeve carrying a wedding date or a specific sponsor cannot be used at the next booking, which pushes towards ordering exactly enough. Caterers running frequent events often hold a plain stock and add branded runs only where the client is paying for them, working from <a href="/product/custom-burger-sleeves/">a bespoke specification agreed before each booking</a> rather than a standing design.' },
        ],
      },
      {
        heading: 'Serving From More Than One Station',
        blocks: [
          { t: 'p', html: 'Larger events run several serving points, and packaging that works at one counter can behave differently across four. Stock has to be split before the event, and once it is split, whichever station runs out first stops serving regardless of what the others are holding.' },
          { t: 'p', html: 'Splitting evenly is rarely right, because stations do not perform evenly. The one nearest the entrance, the bar or the seating usually moves more than the others, and that is knowable in advance from the floor plan rather than settled on the night.' },
          {
            t: 'ol',
            items: [
              'Mark the expected busy stations from the floor plan before the event',
              'Weight the initial split towards them rather than dividing equally',
              'Keep a central reserve rather than distributing every case at setup',
              'Agree who moves stock between stations and how they are contacted',
              'Count remaining stock at a set point mid-service, not when it runs out',
            ],
          },
          { t: 'p', html: 'Where the same event runs mixed portions — full burgers at one station and smaller items at another — the packaging split gets more complicated, because two sizes multiply the ways a station can run short. Events serving multiples per guest commonly pair a standard sleeve with <a href="/product/slider-burger-sleeves/">the mini format built for serving several items at once</a> and plan the counts separately.' },
        ],
      },
      {
        heading: 'Storing Stock Before The Day',
        blocks: [
          { t: 'p', html: 'Event packaging arrives well before it is used and is frequently stored somewhere unsuitable — a garage, a van, a corner of a venue store. Board absorbs whatever moisture is in that space, and stock that has sat in a damp garage for three weeks does not fold like the sample that was approved.' },
          { t: 'p', html: 'It is also handled more than restaurant stock. Cases are loaded into a vehicle, unloaded at a venue, moved to a station and often moved again. Each handling is a chance for a case to be crushed or opened, and a crushed case of sleeves is not recoverable on the morning of an event.' },
          { t: 'p', html: 'Keeping cases sealed until setup, storing them flat rather than on edge, and checking a sample from each case before the event starts are three habits that cost nothing. The check matters most: finding a problem at setup leaves time to adapt, finding it at first service does not.' },
        ],
      },
      {
        heading: 'Planning For What Is Left Over',
        blocks: [
          { t: 'p', html: 'Every event ends with surplus packaging, and how much of it is reusable depends entirely on decisions made before ordering. Plain stock rolls into the next booking. Stock printed with a date, a couple\'s names or a sponsor logo does not.' },
          { t: 'p', html: 'That argues for keeping branded quantities tight and unbranded quantities generous, rather than treating all packaging as one line. Running short of a branded sleeve mid-service is recoverable if there is plain stock behind it; running short with nothing behind it is not.' },
          { t: 'p', html: 'The same logic applies to storage after the event. Surplus that is going to be used again should be resealed and stored properly on the night rather than thrown into a van and dealt with later. Most event packaging that gets written off is written off because of how it was handled after the event, not because too much was ordered.' },
          {
            t: 'ul',
            items: [
              'Branded stock cannot roll forward, so order it tight',
              'Plain stock behind a branded run turns a shortage into an inconvenience',
              'Reseal surplus on the night rather than in the van a week later',
              'Store reusable stock flat and dry, not stacked on edge in a garage',
              'Record actual usage against guest count so the next estimate improves',
            ],
          },
        ],
      },
      {
        heading: 'Working Within A Venue\'s Rules',
        blocks: [
          { t: 'p', html: 'Venues frequently have their own requirements, and they are usually communicated late. Some restrict branding other than their own or a sponsor\'s. Some specify what waste streams are available on site. Some limit where stock can be stored and for how long before an event.' },
          { t: 'p', html: 'None of those is a problem if it is known before packaging is ordered, and all of them are a problem afterwards. A branded run that a venue will not allow through the door is a total loss, and there is rarely time to replace it.' },
          {
            t: 'ol',
            items: [
              'Ask the venue about branding restrictions before commissioning artwork',
              'Confirm what storage is available on site and for how long',
              'Check which waste streams the venue actually operates',
              'Establish delivery access and whether a loading window applies',
              'Get any restriction in writing rather than relying on a phone call',
            ],
          },
          { t: 'p', html: 'Waste rules deserve particular attention because they are increasingly specific and increasingly enforced. What a venue will accept is not the same question as what a material could theoretically be recycled into, and the venue\'s answer is the one that applies on the day.' },
        ],
      },
    ],
    faqs: [
      { q: 'How do I work out how many sleeves an event needs?', a: 'Start from the format rather than the headcount. A seated dinner with one service is close to the guest number; buffet and station service runs above it; a late-night second serving runs well below. A public festival stand has no relationship to a headcount at all.' },
      { q: 'How much overage should I order for an event?', a: 'Enough to cover stronger-than-expected uptake, decided deliberately before ordering. Unlike a restaurant there is no next week to absorb surplus, so the margin should reflect the risk of running short rather than a price break on a larger quantity.' },
      { q: 'Whose logo should go on the customer-facing panel?', a: 'One mark, not two. That panel is the position with the most attention and splitting it between equal logos generally serves neither, because at handover a customer registers one thing at most. Secondary marks belong on a side or reverse panel.' },
      { q: 'Can event-branded sleeves be reused at the next booking?', a: 'Not if they carry a date, a couple\'s names or a sponsor. That is why branded quantities should be ordered tight and plain quantities kept generous — plain stock behind a branded run turns a mid-service shortage into an inconvenience rather than a stoppage.' },
      { q: 'How should stock be split between serving stations?', a: 'Not evenly. Stations near the entrance, the bar or the seating usually move more, and that is knowable from the floor plan in advance. Weight the initial split towards them and keep a central reserve rather than distributing every case at setup.' },
      { q: 'What happens if one station runs out?', a: 'It stops serving regardless of what the others hold, which is why a central reserve and an agreed person to move stock matter. Counting remaining stock at a set point mid-service, rather than when it runs out, gives time to rebalance.' },
      { q: 'Does storing packaging before an event cause problems?', a: 'It can. Board absorbs moisture from wherever it sits, and stock kept in a damp garage or a van for weeks does not fold like the approved sample. Keep cases sealed until setup and store them flat rather than on edge.' },
      { q: 'Should I check stock before the event starts?', a: 'Yes, and it is the highest-value habit on this list. Open one case and form a sleeve at setup. Finding a problem then leaves time to adapt; finding it at first service does not.' },
      { q: 'How do mixed portions affect event planning?', a: 'They multiply the ways a station can run short, because each size has its own count. Events serving both full burgers and smaller items usually plan the two quantities separately rather than deriving one from the other.' },
      { q: 'Is event packaging handled differently from restaurant stock?', a: 'It is handled far more. Cases are loaded, unloaded, moved to a station and often moved again, and each handling risks a crushed or opened case. A crushed case on the morning of an event is not recoverable, so packing and transport deserve attention.' },
      { q: 'How far in advance should event sleeves be ordered?', a: 'Far enough that a proof can be checked and a correction made without risking the date, and with storage arranged for the interval. The interval itself is part of the plan, because where stock sits for those weeks affects what condition it arrives in.' },
      { q: 'How can I improve quantity estimates for future events?', a: 'Record actual usage against the guest count and the format after each booking. Two or three recorded events give a far better basis than any general rule, because uptake depends heavily on the specific style of service and the crowd.' },
      { q: 'What should be done with surplus on the night?', a: 'Reseal and store it properly before it goes into a van, not a week later. Most event packaging that gets written off is lost to handling after the event rather than to over-ordering.' },
    ],
  },
};
