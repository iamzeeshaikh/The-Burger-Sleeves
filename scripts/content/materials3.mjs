/**
 * Materials group, part three — the two claim-sensitive pages.
 *
 *   TBS-005 Recycled     — the specification says only "built using recycled
 *                          content where suitable for sleeve board". There is no
 *                          documented percentage and no documented post-consumer
 *                          split, so neither appears here. The inherited short
 *                          description claims "post consumer recycled cardboard";
 *                          that is not supported by the spec table and is raised
 *                          in CONTENT_AUDIT.md rather than repeated.
 *   TBS-006 Eco Friendly — the specification offers nothing environmental beyond
 *                          "designed around responsible packaging preferences"
 *                          plus kraft and recycled board options. So this is
 *                          written as a selection framework, not a green-claims
 *                          page. The inherited short description's compostable,
 *                          biodegradable and "decomposes within weeks" claims are
 *                          unsupported by any available data and are flagged.
 *
 * The two pages are deliberately separated: Recycled is about fibre source and
 * the evidence behind it; Eco Friendly is about reducing material and choosing
 * between options. Neither asserts a disposal outcome.
 */

export const materials3 = {
  'TBS-005': {
    sections: [
      {
        heading: 'Recycled Content And Recyclability Are Different Claims',
        blocks: [
          { t: 'p', html: 'These two get conflated constantly, and keeping them apart is the single most useful thing on this page. Recycled content is about where the fibre came from before it became your sleeve. Recyclability is about what can happen to that sleeve after someone has eaten from it.' },
          { t: 'p', html: 'A board can score well on one and poorly on the other. Recycled fibre carrying a heavy barrier laminate and full-coverage ink may be harder to recover than a virgin-fibre board with none of that applied. Buying recycled content does not purchase a disposal outcome, and treating the two as one claim is how packaging ends up marketed in a way the material cannot support.' },
          { t: 'p', html: 'Both are worth pursuing. They are simply separate decisions with separate evidence, and a supplier who answers one when you asked the other has not answered you.' },
        ],
      },
      {
        heading: 'What This Product\'s Specification Actually States',
        blocks: [
          { t: 'p', html: 'Worth being precise, because the gap between what is documented and what buyers assume is where trouble starts.' },
          { t: 'p', html: 'The specification for this product describes board built using recycled content where suitable for sleeve stock, and lists recycled kraft and recycled paperboard as the options. It does not state a percentage. It does not distinguish post-consumer fibre from pre-consumer mill broke. Those are meaningful distinctions with genuinely different standing, and neither is documented here, so neither is claimed on this page.' },
          { t: 'p', html: 'If a percentage or a post-consumer split matters to your business — because you report on it, or because a customer asks — it has to be requested as a documented figure for the specific board being quoted, not inferred from the product name. "Where suitable" is doing real work in that sentence: it means the content varies with what the board has to do.' },
        ],
      },
      {
        heading: 'Questions That Get You An Answer Worth Holding',
        blocks: [
          { t: 'p', html: 'Vague questions get vague answers. These are specific enough that the reply is either useful or visibly evasive, which is itself informative.' },
          {
            t: 'table',
            caption: 'What to ask, and what a usable answer looks like',
            headers: ['Ask this', 'A usable answer', 'A warning sign'],
            rows: [
              ['What recycled content does this board carry?', 'A figure, or an honest "it varies by batch, typically within this range"', '"It\'s recycled" with no number offered'],
              ['Is that post-consumer or pre-consumer fibre?', 'A clear split, or a statement that it is not tracked', 'The distinction being treated as unimportant'],
              ['Can you put that in writing for this order?', 'Yes, on the specification or the invoice', 'Verbal assurance only'],
              ['Does the figure hold across reorders?', 'A stated tolerance, or a warning that it varies', 'An unqualified guarantee of exactness'],
              ['What barrier or coating is applied?', 'The treatment named, and which face it covers', '"Standard coating" with no detail'],
              ['How does that affect fibre recovery?', 'A qualified answer pointing to local facilities', 'A blanket recyclability claim'],
            ],
          },
          { t: 'p', html: 'The last row is the one to weigh most heavily. A supplier willing to make an unconditional recyclability claim about a coated, printed, food-contaminated sleeve is telling you something about how carefully the rest of their answers were arrived at.' },
        ],
      },
      {
        heading: 'How Recycled Fibre Behaves On Press And In The Hand',
        blocks: [
          { t: 'p', html: 'Recycled content is not visually neutral, and planning for that is easier than being surprised by it. Reclaimed fibre carries small specks and slight tonal variation, and the base shade sits a little greyer or warmer than an equivalent virgin board depending on the input stream.' },
          {
            t: 'ul',
            items: [
              'Batch-to-batch shade variation is normal in recycled stock rather than a defect, and it is wider than in virgin board',
              'Visible specks are inherent to the material and read as character on a plain design and as contamination on a clinical one',
              'Pale tints and delicate gradients lose definition against a slightly variable ground',
              'Solid marks, strong single colours and reversed-out shapes hold up well',
              'Fibre length is generally shorter, so crease depth deserves checking rather than carrying over from a virgin board',
            ],
          },
          { t: 'p', html: 'None of this argues against the material. It argues for designing with it rather than against it, which usually means fewer inks and bolder shapes — the same direction <a href="/product/minimal-design-burger-sleeves/">a deliberately restrained layout</a> takes for entirely separate reasons, and the two decisions reinforce each other more often than they conflict.' },
        ],
      },
      {
        heading: 'Strength Selection When The Fibre Is Reclaimed',
        blocks: [
          { t: 'p', html: 'Shorter fibres mean a recycled board of a given weight will not always behave identically to a virgin board of the same weight. The difference is usually modest and entirely manageable, but it is worth testing rather than assuming equivalence.' },
          { t: 'p', html: 'The two places it shows are the crease and a long hold. A crease depth tuned for virgin stock can leave a recycled board splitting slightly along the fold, and a loaded sleeve held for a long staging period can relax marginally sooner. Both are addressed by specifying against a sample rather than against a number carried over from a previous order.' },
          {
            t: 'ol',
            items: [
              'Take a sample at the weight you currently use and one a step heavier',
              'Crease both at your supplier\'s standard depth and fold each several times',
              'Load them to your heaviest build and leave them staged as long as an order really waits',
              'Compare how much each has relaxed at the base rather than how they looked at the start',
              'Settle the caliper against that result, then have the crease depth specified to match it',
            ],
          },
          { t: 'p', html: 'Where the menu is genuinely heavy, the honest answer is sometimes a step up in caliper to reach the same working stiffness. That has a cost, and it belongs in the comparison rather than surfacing later.' },
        ],
      },
      {
        heading: 'Food Contact Is A Construction Question',
        blocks: [
          { t: 'p', html: 'This is where recycled fibre needs more care than any other property, and where an assumption is least safe.' },
          { t: 'p', html: 'Direct-food-contact suitability depends on the specific board, the coatings, the inks and whether the sleeve touches food at all or sits outside a wrap. Recycled input streams differ from virgin fibre in what may be present, so contact suitability has to be confirmed in writing for the exact construction being ordered rather than inferred from the material or from a previous product.' },
          { t: 'p', html: 'In the common setup the sleeve sits outside an inner wrap and the question is narrower. But "we use a wrap" is an operational habit, not a specification, and if the sleeve may ever meet food directly the confirmation should be obtained explicitly. Where direct contact is part of the design rather than an accident, <a href="/product/food-grade-burger-sleeves/">stock specified for contact use</a> is the order line to be asking about, and the confirmation still has to name the finished construction.' },
        ],
      },
      {
        heading: 'Where Recycled Board Suits The Setting',
        blocks: [
          { t: 'p', html: 'The material rewards settings where its visual character is an asset rather than something to apologise for. A speckled, slightly variable ground reads as deliberate against a plain, text-led identity and reads as poor quality against a polished photographic one.' },
          { t: 'p', html: 'It also suits operations where packaging gets handled in less than pristine conditions, since a variable ground is more forgiving of marks than a bright uniform one. Where the packaging is part of a table presentation rather than a takeaway handoff — <a href="/product/restaurant-burger-sleeves/">a sleeve reaching a customer at a table rather than through a bag</a> — the shade consistency question gets sharper, because items are seen side by side under one light and small differences between batches become visible.' },
          { t: 'p', html: 'That is a reason to retain an approved sample, not a reason to avoid the material.' },
        ],
      },
      {
        heading: 'Specifying A Recycled Board Without Overstating It',
        blocks: [
          { t: 'p', html: 'Ask for the content as a documented figure, get the post-consumer position stated one way or the other, confirm what barrier is applied and to which face, and establish the shade tolerance you can expect across reorders.' },
          { t: 'p', html: 'Then be careful about what goes on the packaging itself. Printing a recycled-content figure you cannot evidence, or a recyclability claim that depends on facilities you do not control, creates exposure that has nothing to do with the quality of the board. Stating what is documented, and no more, is both safer and more credible than a general environmental claim.' },
          { t: 'p', html: 'Where the wider question is reducing material rather than sourcing it differently, that is a separate exercise with different levers, and <a href="/product/eco-friendly-burger-sleeves/">the lower-impact selection framework</a> covers the trade-offs involved in right-sizing, coverage and coating decisions.' },
        ],
      },
    ],
    faqs: [
      { q: 'What recycled content do these sleeves contain?', a: 'The specification states that board is built using recycled content where suitable for sleeve stock, and lists recycled kraft and recycled paperboard as options. It does not state a percentage. If a figure matters to your business, request it as documented information for the specific board being quoted rather than inferring it from the product name.' },
      { q: 'Is the recycled fibre post-consumer or pre-consumer?', a: 'That is not documented in the available specification, and the two are meaningfully different. Post-consumer fibre has been through a user; pre-consumer is typically mill offcuts. If the distinction matters for your reporting or your customers, ask for it explicitly and ask for the answer in writing.' },
      { q: 'Does recycled content mean the sleeve is recyclable?', a: 'No, and keeping these separate matters. Recycled content describes where the fibre came from; recyclability describes what can happen afterwards. A recycled board carrying a heavy laminate and full ink coverage may be harder to recover than a plain virgin one. They are separate claims with separate evidence.' },
      { q: 'Why does the board colour vary between orders?', a: 'Shade variation is wider in recycled stock than in virgin board because the input fibre varies. Small specks and tonal shifts are inherent to the material rather than defects. If close consistency matters, retain a sample from the approved run and raise the tolerance question at quotation.' },
      { q: 'Will recycled board be as strong as virgin board at the same weight?', a: 'Not always identically. Reclaimed fibres are generally shorter, which can show at the crease and over a long loaded hold. The difference is usually modest and manageable, but it is worth testing against a sample rather than assuming equivalence, and a step up in caliper is sometimes needed to reach the same working stiffness.' },
      { q: 'Can I print detailed artwork on recycled board?', a: 'Solid marks, strong single colours and reversed-out shapes hold up well. Pale tints, delicate gradients and fine photographic detail lose definition against a slightly variable, speckled ground. Designing with fewer inks and bolder shapes generally produces a better result than fighting the material.' },
      { q: 'Is recycled board suitable for direct food contact?', a: 'That has to be confirmed for the exact construction rather than assumed. Suitability depends on the board, coatings, inks and whether the sleeve touches food at all. Recycled input streams differ from virgin fibre in what may be present, so ask your supplier to confirm the intended contact type in writing.' },
      { q: 'Does a barrier coating affect the recycled credentials?', a: 'It does not change the recycled content of the board, but it can affect what happens at end of life, since coatings and laminates influence fibre recovery. These are two separate questions and a supplier should be able to answer both: what the board contains, and what has been applied to it.' },
      { q: 'Can I print a recycled percentage on the packaging?', a: 'Only if you can evidence it for the board actually supplied. Printing a figure you cannot document creates exposure unrelated to the quality of the material. Stating what is documented and no more is both safer and more credible than a general environmental claim on a printed sleeve.' },
      { q: 'How is this different from the eco friendly sleeve page?', a: 'This page is about fibre source and the evidence behind it. The other is about reducing impact through selection — right-sizing, print coverage, avoiding unnecessary coatings and planning inventory. Recycled content is one option within that wider framework rather than the same subject.' },
      { q: 'Will recycled sleeves be accepted by my local recycling collection?', a: 'That depends on the finished construction and on the facility rather than on the fibre source. Barrier treatments, ink coverage and food residue can all affect whether used packaging is recovered, and acceptance varies between collections. Check the specific build against your local rules rather than assuming.' },
      { q: 'What should a recycled board quotation state?', a: 'The recycled content as a documented figure or an honest range, the post-consumer position, the barrier or coating applied and to which face, the shade tolerance across reorders, and the caliper. Without those, competing quotations are describing different boards under the same label.' },
    ],
  },

  'TBS-006': {
    sections: [
      {
        heading: 'What This Page Is And Is Not',
        blocks: [
          { t: 'p', html: 'This is a selection page rather than a certification page, and being clear about that up front is more useful than a paragraph of environmental language.' },
          { t: 'p', html: 'No compostability, biodegradability or certified environmental performance is claimed here, because nothing in the available product documentation supports such a claim. What the specification does describe is a set of material choices — kraft board, recycled board, barrier options, finish options — and a general orientation towards responsible packaging. Those are real, and there is genuinely useful work to be done with them.' },
          { t: 'p', html: 'So the subject of this page is the decisions themselves: how to use less material, choose between the options honestly, avoid treatments you do not need, and get documentation for whatever you do claim. That is unglamorous and it is the part that actually reduces impact.' },
        ],
      },
      {
        heading: 'The Largest Lever Is Using Less',
        blocks: [
          { t: 'p', html: 'Before any material comparison, there is a bigger and duller question: how much packaging is going out that did not need to.' },
          { t: 'p', html: 'A sleeve sized to the largest item on the menu and used across the whole range wastes board on every smaller order. A caliper specified against a worst case that represents a fraction of volume does the same. Over-ordering that leads to damaged, humidity-affected stock being thrown away unused is material that was manufactured, shipped and binned without ever touching food.' },
          { t: 'p', html: 'None of that is a material choice, and all of it outweighs the difference between two boards. Right-sizing across a range is where most of the available reduction sits, and where <a href="/product/slider-burger-sleeves/">a smaller sleeve matched to a smaller build</a> pays back twice over — less board per unit, and a tidier presentation on the item it was actually cut for.' },
          {
            t: 'ul',
            items: [
              'One sleeve sized to the largest item wastes board on every smaller order you sell',
              'A caliper set against a worst case that is a fraction of volume overspecifies the rest',
              'Stock damaged in poor storage was manufactured and shipped for nothing at all',
              'Bulk orders beyond what turnover supports reliably produce write-offs rather than savings',
              'Two well-chosen sizes usually beat one compromise size and four rarely-used ones',
            ],
          },
        ],
      },
      {
        heading: 'A Decision Checklist That Does Not Require A Certificate',
        blocks: [
          { t: 'p', html: 'Each of these is something you can act on with information a supplier can actually provide, ordered roughly by how much difference it makes.' },
          {
            t: 'table',
            caption: 'Lower-impact decisions and what each one requires from you',
            headers: ['Decision', 'What it changes', 'What you need to establish'],
            rows: [
              ['Right-size across the menu', 'Less board per order, on every order', 'Measurements of the smallest and largest builds'],
              ['Order to actual usage', 'Less stock damaged or discarded unused', 'Honest consumption data, not an optimistic forecast'],
              ['Reduce print coverage', 'Less ink; sometimes a simpler press setup', 'Whether the design works with fewer inks'],
              ['Skip lamination where performance allows', 'Fewer layers complicating fibre recovery', 'Whether the menu genuinely needs the barrier'],
              ['Choose a documented recycled board', 'Lower demand for fresh fibre', 'A figure in writing for the board supplied'],
              ['Match barrier to the sauciest item only', 'Avoids treating a whole range unnecessarily', 'Which items actually cause the failures'],
              ['Keep claims to what is documented', 'Removes exposure from unsupported wording', 'What the supplier will confirm in writing'],
            ],
          },
          { t: 'p', html: 'The pattern across the table is that most of the leverage is operational rather than material. That is less satisfying than switching to a board with a better story, and it is where the actual reduction happens.' },
        ],
      },
      {
        heading: 'Lamination Is The Decision Worth Interrogating',
        blocks: [
          { t: 'p', html: 'Laminates and heavy coatings are applied for good reasons — durability, appearance, resistance to marking — and they are also the treatment most likely to complicate fibre recovery. That makes them the place where an unexamined default costs the most.' },
          { t: 'p', html: 'The question to put is narrow: what specifically fails without it? If the answer is a described, observed problem — sleeves marking before handoff, artwork scuffing in the case — then the treatment is doing work. If the answer is that the packaging looks less finished, that is a preference, and it is worth weighing against what it does at end of life.' },
          {
            t: 'ol',
            items: [
              'Identify what the coating is for: appearance, durability, or slowing oil migration',
              'Establish whether an uncoated sample actually fails at that job in your service',
              'Ask whether a lighter treatment achieves the same result as a bonded film',
              'Check what each option does to fibre recovery, rather than assuming they are equivalent',
              'Decide per menu item where the failure is limited to a few products',
            ],
          },
          { t: 'p', html: 'A print coating and a barrier coating are also different things, and having one does not mean you have the other. Buying a laminate for appearance and assuming it solves grease is a common and expensive misunderstanding.' },
        ],
      },
      {
        heading: 'Print Coverage As A Material Decision',
        blocks: [
          { t: 'p', html: 'Ink is material too, and coverage is one of the few levers that reduces cost and impact in the same move rather than trading one against the other.' },
          { t: 'p', html: 'Full-bleed colour across a face requires more ink, often a coated bright board to carry it, and a longer press setup. A design built around the board colour with one or two strong inks needs less of all three. The saving is real at any volume and compounds on a standing item reordered through the year.' },
          { t: 'p', html: 'This is worth deciding at the design stage, because it is nearly impossible to retrofit. Artwork conceived as full coverage rarely reduces gracefully; artwork conceived around a bare ground looks deliberate from the start.' },
        ],
      },
      {
        heading: 'Ordering Discipline Beats Material Choice',
        blocks: [
          { t: 'p', html: 'Packaging that is manufactured, shipped, stored badly and thrown away unused has the worst impact profile of anything discussed on this page, and it is entirely an operational failure rather than a material one.' },
          { t: 'p', html: 'The causes are familiar: bulk-buying to a price break beyond what turnover supports, storing uncoated board where it takes up humidity, leaving cases open near a prep line, and failing to rotate stock so older cartons sit at the back until they are unusable. Each is cheap to fix and none requires changing the product.' },
          { t: 'p', html: 'Where storage is genuinely tight, smaller and more frequent orders cost more per unit and waste less overall. Which of those two dominates is worth calculating rather than assuming, and the answer differs between operations.' },
        ],
      },
      {
        heading: 'Matching The Approach To How You Actually Serve',
        blocks: [
          { t: 'p', html: 'The right balance shifts with the setting, and copying another operation\'s answer rarely transfers.' },
          { t: 'p', html: 'A high-turnover counter with a dry store can right-size aggressively across several sleeve sizes because it moves enough volume of each. A small operation with one shelf cannot hold five variants and is better served by two sizes and less waste from damaged stock. Service that runs outdoors or through a hatch faces humidity and handling pressures that push back towards a barrier the indoor equivalent could skip. The specific demands of <a href="/product-category/special-sleeves-uses/">different service situations</a> change which trade-offs are available before any material question is reached.' },
          { t: 'p', html: 'The general principle holds regardless: decide against what your service actually does, and get documentation for whatever you intend to say about it.' },
        ],
      },
      {
        heading: 'Saying Only What You Can Evidence',
        blocks: [
          { t: 'p', html: 'The last decision is about wording, and it carries more risk than any of the material choices above.' },
          { t: 'p', html: 'Terms like compostable, biodegradable, plastic-free and recyclable describe outcomes that depend on the finished construction and on facilities you do not control. Printing them on a coated, printed, food-contaminated sleeve asserts something no supplier can guarantee on your behalf, and in several markets those terms carry specific regulatory meaning rather than being general descriptions.' },
          { t: 'p', html: 'A defensible position is narrower and reads better: state the recycled content you can document, describe what you have chosen not to apply and why, and point customers to local guidance for disposal rather than making the determination for them. That is honest, checkable, and it does not age badly when someone asks for evidence.' },
          { t: 'p', html: 'Getting to a documented figure is its own piece of work, and it is the one part of this page where a specific board choice carries the argument. The questions worth putting to a supplier, and what a usable answer to each looks like, are set out on <a href="/product/recycled-burger-sleeves/">the page dealing with reclaimed fibre and its evidence</a>.' },
        ],
      },
    ],
    faqs: [
      { q: 'Are these sleeves compostable?', a: 'No compostability is claimed, because nothing in the available product documentation supports it. Compostability depends on the specific board, coatings, inks and on an accepting facility existing locally. If it is a requirement rather than a preference, it needs certification for the exact construction, which should be requested and supplied in writing.' },
      { q: 'Are they biodegradable?', a: 'That is not claimed here for the same reason. Paper-based board behaves differently depending on what has been applied to it and on the conditions it ends up in, and general degradation language describes an outcome nobody can guarantee for a coated, printed, food-contaminated sleeve. Ask for documentation before relying on such a description.' },
      { q: 'What makes this option lower impact then?', a: 'The decisions rather than a certificate: sizing sleeves to the builds they actually hold, ordering to real usage so stock is not discarded, reducing print coverage, avoiding coatings the menu does not need, and choosing a documented recycled board where one is available. Most of the available reduction is operational.' },
      { q: 'How is this different from the recycled sleeve option?', a: 'The recycled page is about fibre source and the evidence behind it. This page is about reducing material and choosing between options — right-sizing, coverage, coatings and inventory discipline. Recycled content is one lever within that framework rather than the whole of it.' },
      { q: 'Does using less packaging really outweigh switching material?', a: 'In most cases yes. A sleeve sized to the largest item and used across a whole range wastes board on every smaller order, and stock damaged in storage was manufactured and shipped for nothing. Those quantities typically exceed the difference between two comparable boards.' },
      { q: 'Should I avoid lamination entirely?', a: 'Not automatically. Laminates and coatings do real work and are also the treatment most likely to complicate fibre recovery, so the useful question is what specifically fails without one. If the honest answer is that the packaging looks less finished, that is a preference to weigh rather than a performance requirement.' },
      { q: 'Is a print coating the same as a barrier coating?', a: 'No, and confusing them is common. A print coating improves how ink sits on the surface. A barrier treatment slows oil moving into the board. A sleeve can carry one without the other, so buying a laminate for appearance and assuming it solves grease will disappoint in service.' },
      { q: 'Can reducing print coverage save money as well?', a: 'Usually yes, which makes it one of the few decisions that does not trade cost against impact. Fewer inks mean less material, often a simpler press setup, and sometimes a wider choice of board because heavy coverage is not demanding a bright coated surface to sit on.' },
      { q: 'Is it better to order in bulk or more frequently?', a: 'It depends on your storage and turnover, and it is worth calculating rather than assuming. Bulk buying to a price break beyond what turnover supports produces damaged and humidity-affected stock that is discarded unused. Smaller, more frequent orders cost more per unit and often waste less overall.' },
      { q: 'What can I safely print about the environmental profile?', a: 'Whatever you can evidence for the board actually supplied — typically a documented recycled content figure and a description of what you have chosen not to apply. Point customers to local guidance for disposal rather than making the determination for them, since acceptance varies by facility.' },
      { q: 'Which board options are offered on this product?', a: 'The specification lists kraft board and recycled board, with medium caliper options, grease-resistant and barrier coat choices, and natural matte or coated finishes. Which combination suits you follows from the menu and the service rather than from which sounds more responsible.' },
      { q: 'Do I still need an inner wrap with these sleeves?', a: 'For sauced or juicy builds, generally yes. A sleeve is a grip and presentation layer rather than a container, and that does not change with the board chosen. The wrap does the containment, which is also what allows the sleeve itself to be specified more lightly.' },
    ],
  },
};
