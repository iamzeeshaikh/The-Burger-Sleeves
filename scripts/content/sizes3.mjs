/**
 * Sizes group, part three.
 *   TBS-027 Slider       — a multiples problem; trays, batches, tiny artwork
 *   TBS-028 Double Patty — grease volume and compression from stacked patties
 */

export const sizes3 = {
  // --------------------------------------------------------------- SLIDER
  'TBS-027': {
    sections: [
      {
        heading: 'Sliders Arrive In Threes And Fours',
        blocks: [
          { t: 'p', html: 'A slider sleeve is rarely handled on its own. Sliders sell in multiples — three on a board, six in a box, twenty on a catering platter — and that changes what the packaging has to do. The question is no longer whether one sleeve fits one mini burger. It is how a dozen of them behave sitting next to each other.' },
          { t: 'p', html: 'Two things follow from that. Sleeves need to sit square so a row looks deliberate rather than scattered, and they need enough external clearance that adjacent sleeves do not press against each other. A sleeve sized only against the burger, with no thought to what sits beside it, produces a tray that looks crowded even when the count is right.' },
          { t: 'p', html: 'Counting is the quiet benefit. A platter of sleeved sliders can be checked at a glance, because each unit has a defined edge and sits in a row. The same platter of unsleeved minis has to be counted carefully, and miscounts on catering orders are both common and awkward to correct once a tray has left the kitchen.' },
          { t: 'p', html: 'The multiples also mean assembly happens in batches. Nobody makes one slider. Staff build six at a time, which rewards a sleeve that can be pre-formed and lined up before any food arrives, rather than one that has to be assembled around each item individually.' },
        ],
      },
      {
        heading: 'Laying Out A Tray Or Box',
        blocks: [
          { t: 'p', html: 'Once the sleeve dimension is set, the tray arithmetic follows from it. A sleeve a few millimetres wider than planned can drop a row from a platter, and that changes the portion count a caterer is selling. Working backwards from the tray is often more useful than working forwards from the burger.' },
          { t: 'p', html: 'Take the internal dimensions of the tray or box you already use, decide how many sliders should fit, and divide. That gives a maximum external sleeve width. Then check that width against the burger measurement plus clearance. If the two do not reconcile, the tray or the portion count has to move, and it is better to find that out on paper.' },
          {
            t: 'table',
            caption: 'Working backwards from the serving vessel',
            headers: ['Step', 'What you need', 'What it determines'],
            rows: [
              ['Tray internal width', 'Measured, not nominal', 'Total space available per row'],
              ['Target sliders per row', 'From the menu portion', 'Maximum external sleeve width'],
              ['Sleeve wall thickness', 'From the board caliper', 'Internal space left for the burger'],
              ['Burger width plus wrap', 'Measured when assembled', 'Whether the arithmetic closes'],
              ['Gap between sleeves', 'Chosen deliberately', 'Whether the row reads as tidy or crowded'],
            ],
          },
          { t: 'p', html: 'Caterers running fixed platter counts usually fix the tray first and treat sleeve width as the dependent variable. That approach pairs naturally with <a href="/product/event-burger-sleeves/">packaging planned around serving in batches</a>, where portion counts are agreed before anything is ordered.' },
        ],
      },
      {
        heading: 'Artwork At A Very Small Scale',
        blocks: [
          { t: 'p', html: 'A slider sleeve gives a designer a fraction of the printable area of a standard one, and most brand artwork does not survive the reduction. A logo that reads well at 90mm across can turn into a smudge at 40mm, particularly if it carries fine strokes, a tagline or a registered mark.' },
          { t: 'p', html: 'The usual solution is a reduced mark rather than a shrunk one. Many brands maintain a simplified version of their logo for small applications — the symbol without the wordmark, or the wordmark without the strapline. If yours does not, a slider run is a reasonable moment to create one.' },
          {
            t: 'ul',
            items: [
              'Fine strokes and thin serifs lose definition at small scale',
              'Taglines and registered marks usually become unreadable',
              'A simplified logo variant reads better than a proportionally shrunk one',
              'Solid shapes survive reduction better than outlined ones',
              'Two colours often read more clearly than four in a small area',
            ],
          },
          { t: 'p', html: 'Print at final size and look at it on paper before approving. A logo inspected at 200% on a screen will always look acceptable. Brands that arrive at a reduced mark for sliders frequently apply the same restraint elsewhere, and end up looking at <a href="/product/minimal-design-burger-sleeves/">layouts built around fewer inks and simpler marks</a> across the wider packaging set.' },
        ],
      },
      {
        heading: 'Grease And Handling On A Mini Build',
        blocks: [
          { t: 'p', html: 'Sliders are small, which leads people to assume they are cleaner. In practice a slider is often proportionally greasier than a full-size burger, because the patty-to-bun ratio is higher and there is less bread to absorb what renders out.' },
          { t: 'p', html: 'On a platter that becomes visible quickly. Several sleeves sitting together share what any one of them releases, and a single leaking mini can mark the sleeves either side of it. On a shared board or a catering tray, one soft sleeve makes the whole presentation look neglected.' },
          { t: 'p', html: 'Inner wrapping is more awkward at this scale. A wrap sized for a full burger is unwieldy around a slider, and a wrap that is too small leaves the base exposed exactly where fat collects. Getting the wrap size right is often more useful than upgrading the sleeve board.' },
          { t: 'p', html: 'Handling adds to it. Sliders are picked up in two fingers rather than a full hand, which concentrates pressure on a small area of the sleeve wall. A board that holds up fine under a full palm can crease under a pinch grip, and that crease is at eye level on a platter.' },
        ],
      },
      {
        heading: 'Batch Assembly Without Losing Time',
        blocks: [
          { t: 'p', html: 'Because sliders come in multiples, assembly time multiplies too. Four seconds per sleeve on a standard burger is four seconds per order. Four seconds on a slider is twenty-four seconds when six go out together, and it lands during the busiest part of a catering service.' },
          {
            t: 'ol',
            items: [
              'Time how long one sleeve takes to form from flat',
              'Multiply by your most common slider portion count',
              'Repeat the test with a second person to check the figure holds',
              'Try pre-forming a batch before service and see whether they hold shape',
              'If they collapse when stored formed, the closure needs revisiting',
            ],
          },
          { t: 'p', html: 'Pre-forming is the practical shortcut, and whether it works depends entirely on the closure. Some structures hold their shape once formed and can be stacked ready; others spring back and have to be assembled at the moment of use. That single property makes more difference to a catering service than any other feature of the sleeve. Where a menu also runs single mini burgers rather than platters, <a href="/product/small-burger-sleeves/">the compact single-serve format</a> is usually the closer match.' },
        ],
      },
      {
        heading: 'Ordering For Catering Rather Than Counter Volume',
        blocks: [
          { t: 'p', html: 'Slider demand behaves differently from counter demand. A burger bar uses a fairly steady number of standard sleeves each week. A caterer might use none for a fortnight and then two thousand in a weekend, and that pattern makes ordering and storage a different problem.' },
          { t: 'p', html: 'Lumpy demand pushes towards larger, less frequent orders, which suits pricing but ties up storage between events. It also means stock can sit for months, so storage conditions matter more than they would on a fast-moving line. Sealed cases kept away from damp keep board stiffness stable across that gap.' },
          { t: 'p', html: 'Lead time is the other consideration. Event work is often confirmed at short notice, and packaging ordered per booking will not arrive in time. Most caterers hold a buffer sized to their typical event rather than ordering against confirmed jobs.' },
          { t: 'p', html: 'Artwork stability is worth thinking about too. A sleeve carrying a dated campaign or an event-specific design cannot be carried over to the next booking, whereas an unbranded or lightly branded sleeve can. Whether that trade is worth making depends on how much the branding is doing at the event itself.' },
        ],
      },
    ],
    faqs: [
      { q: 'Why does sizing a slider sleeve differ from sizing a standard one?', a: 'Because sliders are handled in multiples. A sleeve sized only against one burger, with no thought to what sits beside it on a tray, produces a crowded-looking platter even when the count is correct. External clearance between adjacent sleeves matters as much as the internal fit.' },
      { q: 'Should I size the sleeve from the burger or the tray?', a: 'For catering work, from the tray. Measure the internal width of the tray you already use, divide by the sliders you want per row, and that gives a maximum external sleeve width. Then check it reconciles with the burger measurement plus clearance. Finding a conflict on paper is far cheaper than after a run.' },
      { q: 'How much gap should sit between sleeves on a tray?', a: 'Enough that adjacent sleeves do not press against each other and the row reads as deliberate. The exact figure depends on the tray and the portion count, so treat it as a value you choose during layout rather than a standard, and confirm it with a physical mock-up.' },
      { q: 'Will my logo work at slider size?', a: 'Often not without modification. A mark that reads at 90mm can smudge at 40mm, especially with fine strokes, a tagline or a registered symbol. Many brands keep a simplified variant for small applications — the symbol alone, or the wordmark without the strapline.' },
      { q: 'Is four-colour printing worth it on a small sleeve?', a: 'Frequently not. In a small printed area, two well-chosen colours often read more clearly than four, and registration between more colours is harder to hold at small scale. Solid shapes survive reduction better than outlined ones.' },
      { q: 'How should I proof artwork for sliders?', a: 'Print at final size and judge it on paper. A logo inspected at 200% on a screen will always look acceptable, which is why small-format artwork so often disappoints on delivery. Hold the printed proof at normal viewing distance rather than close up.' },
      { q: 'Does assembly time matter more on sliders?', a: 'Yes, because it multiplies. Four seconds per sleeve is four seconds per order on a standard burger and twenty-four seconds when six sliders go out together — during the busiest part of a catering service. Time one sleeve and multiply by your usual portion count.' },
      { q: 'Can slider sleeves be pre-formed before service?', a: 'It depends entirely on the closure. Some structures hold their shape once formed and can be stacked ready to use; others spring back and must be assembled at the moment of use. That single property affects a catering service more than any other feature, so test it on samples.' },
      { q: 'Do sliders need the same board weight as full-size burgers?', a: 'Usually less, because the span is shorter and the load lighter. A lighter caliper can stay stable at slider dimensions, which reduces cost and leaves more internal clearance. Ask what calipers are offered at your dimensions rather than defaulting to the standard board.' },
      { q: 'How do I stop sliders rotating inside the sleeve?', a: 'Mini builds have less surface contact, so they rotate more easily than full-size ones. Reduce clearance at the bottom of your size range, and test by holding the sleeve horizontally and turning it. If the burger stays still while the sleeve turns, the fit is too loose.' },
      { q: 'Are slider sleeves suitable for mixed platters?', a: 'They work well where portion counts are fixed and consistency matters, which is most catering. Where a platter mixes sliders with full-size items, check that both sleeve formats sit sensibly together on the same tray before ordering either.' },
      { q: 'What is the most common slider packaging mistake?', a: 'Sizing the sleeve against a single burger and never laying six of them out together. The individual fit is fine, the tray is crowded or a row short, and the problem only appears at the first catering service after the stock has arrived.' },
    ],
  },

  // --------------------------------------------------------- DOUBLE PATTY
  'TBS-028': {
    sections: [
      {
        heading: 'Two Patties Double The Grease Load',
        blocks: [
          { t: 'p', html: 'The obvious difference with a double is height. The one that causes more complaints is grease. Two patties render roughly twice the fat of one, and that fat has to go somewhere. It runs down through the build, collects at the base and reaches the board sooner and in greater volume than a single-patty burger ever produces.' },
          { t: 'p', html: 'Base panels take the worst of it. This is where oil pools, where an uncoated board darkens first, and where a saturated sleeve loses stiffness at exactly the point it is carrying the most weight. A sleeve that looks fine around the sides can be soft underneath.' },
          { t: 'p', html: 'Timing is what makes the difference visible. A single-patty burger eaten within a few minutes may never put enough oil into the board to show. The same board under a double, held while someone drives home, has considerably longer to absorb considerably more. Judging a sleeve on how it looks at the counter tells you very little about how it looks at the table.' },
          { t: 'p', html: 'The barrier decision therefore matters more here than on any other size. An inner greaseproof wrap is doing most of the work, and a barrier treatment on the board buys additional time. Neither makes a sleeve leakproof, and paperboard should not be described that way. Operators dealing with heavy renderers usually specify this deliberately rather than by default, alongside <a href="/product/grease-resistant-burger-sleeves/">board treated to slow oil reaching the surface</a>.' },
          {
            t: 'table',
            caption: 'Where grease shows up on a stacked build',
            headers: ['Location', 'Why it collects there', 'What it causes'],
            rows: [
              ['Base panel', 'Fat runs down and pools', 'Softening under the heaviest load'],
              ['Lower side walls', 'Wicks outward from the base', 'Visible darkening low on the sleeve'],
              ['Between the patties', 'Trapped by the middle bun layer', 'Steam and a wetter build overall'],
              ['Closure area', 'Handled with greasy fingers', 'Marks on the most visible panel'],
              ['Grip zone', 'Hand pressure squeezes fat outward', 'Transfers to the customer\'s hands'],
            ],
          },
        ],
      },
      {
        heading: 'Compression And Whether It Recovers',
        blocks: [
          { t: 'p', html: 'Stacked patties are heavy and they settle. A double that stands 120mm tall when it leaves the pass is shorter by the time it reaches a customer, because the weight of the upper patty compresses everything below it. The sleeve has to work at both heights.' },
          { t: 'p', html: 'That is a different problem from simply being tall. A sleeve sized for the assembled height will be loose by the time it is eaten; one sized for the settled height will not accept the build in the first place. The practical answer is to size for loading and accept that the fit relaxes, rather than trying to grip a moving target.' },
          { t: 'p', html: 'Grip is where this becomes noticeable. As the build settles it also spreads outward, so the sleeve gets shorter in one direction and wider in another. A sleeve with rigid walls resists that spread and keeps the burger together; a flexible one deforms with it and lets the build slump. Builds that are tall from piled toppings rather than stacked meat settle less, and <a href="/product/jumbo-burger-sleeves/">the oversized format aimed at height alone</a> is specified differently as a result.' },
          {
            t: 'ul',
            items: [
              'A double settles measurably between the pass and the customer',
              'Size for loading height, not for settled height',
              'Settling pushes the build outward as well as downward',
              'Rigid walls resist spread; flexible walls follow it',
              'Grease softening accelerates the loss of wall stiffness',
            ],
          },
        ],
      },
      {
        heading: 'Measuring A Build That Will Not Sit Still',
        blocks: [
          { t: 'p', html: 'Measuring a double is harder than measuring anything else on a menu, because the object changes while you measure it. Take the height straight off the pass and you record the tallest it will ever be. Take it two minutes later and you record something else. Neither number alone tells a supplier what they need.' },
          { t: 'p', html: 'The practical approach is to record both and label them. Loading height is what the sleeve has to accept without forcing. Settled height is what it will actually hold for most of the meal. A supplier who has both figures can size for the first and check grip against the second.' },
          {
            t: 'ol',
            items: [
              'Assemble a double exactly as it leaves the kitchen, wrap included',
              'Measure maximum height immediately and label it as loading height',
              'Leave it standing for the time between pass and customer',
              'Measure again and label that as settled height',
              'Measure width at the widest point on the settled build, since it spreads as it drops',
              'Weigh it, because board recommendations depend on load as much as dimension',
            ],
          },
          { t: 'p', html: 'Weight is the figure most often skipped and the one that most changes a board recommendation. Two sleeves at identical dimensions holding a light build and a heavy one are different specifications, and on a stacked-patty item the difference is substantial.' },
        ],
      },
      {
        heading: 'Holding A Heavy Burger Cleanly',
        blocks: [
          { t: 'p', html: 'The point of a sleeve on a double is that the customer can hold it without wearing it. That means the sleeve has to stay stiff enough to be squeezed without collapsing, and to keep grease off the hand for the length of the meal rather than the length of the walk to a table.' },
          { t: 'p', html: 'Hand pressure is the test that is almost never run. Loading a sample and admiring it on a bench tells you nothing about what happens when someone grips it firmly with warm hands for ten minutes. That is when a marginal board reveals itself.' },
          {
            t: 'ol',
            items: [
              'Assemble a full double with the sauces and toppings you actually serve',
              'Sleeve it and leave it standing for the time between pass and customer',
              'Pick it up the way a customer would and squeeze firmly',
              'Hold it for several minutes and check your hand afterwards',
              'Inspect the base panel for softening and the walls for deformation',
            ],
          },
          { t: 'p', html: 'If the base softens within that window, the answer is usually barrier and board rather than a bigger sleeve. If the walls deform under grip, it is structure. Where the closure is also working loose as the build settles, the fix tends to sit in the tooling, and it is worth reviewing against <a href="/product/die-cut-burger-sleeves/">structural sleeve forms with engineered tabs and locks</a> rather than adding board weight alone.' },
        ],
      },
      {
        heading: 'Matching Board And Barrier To A Stacked Build',
        blocks: [
          { t: 'p', html: 'Board choice on a double is a response to two loads at once: physical weight and grease volume. Treating them separately leads to the common mistake of specifying a heavier caliper to fix a problem that is actually saturation, which delays the failure without preventing it.' },
          { t: 'p', html: 'Work out which is dominant before changing anything. If a dry sleeve holds the build comfortably and only fails once it has been in service for a few minutes, the issue is grease reaching the board. If it flexes under the weight straight away, it is stiffness. The two need different answers and the tests take seconds.' },
          {
            t: 'table',
            caption: 'Reading the failure before changing the specification',
            headers: ['What you observe', 'Likely cause', 'Where to look first'],
            rows: [
              ['Flexes when lifted, even dry', 'Insufficient stiffness', 'Board caliper or construction'],
              ['Holds dry, softens after minutes', 'Grease reaching the board', 'Inner wrap, then barrier treatment'],
              ['Base darkens but stays firm', 'Cosmetic oil shadowing', 'Board colour, or accept it'],
              ['Closure loosens as it stands', 'Build settling and base bowing', 'Base support and tab geometry'],
              ['Creases where fingers grip', 'Wall stiffness under point pressure', 'Caliper, or a deeper wall'],
            ],
          },
          { t: 'p', html: 'Once the dominant cause is identified, change one thing and retest. Changing board and barrier together works often enough, but it leaves you without knowing which one mattered, which makes the next specification harder rather than easier.' },
        ],
      },
    ],
    faqs: [
      { q: 'What is the main difference between a double and a tall single build?', a: 'Grease volume. Two patties render roughly twice the fat, and it collects at the base of the sleeve rather than spreading evenly. A tall single build is a height problem; a double is a height problem and a saturation problem at the same time.' },
      { q: 'Where does grease cause the most trouble on a double?', a: 'The base panel. Fat runs down through the build and pools there, which is also where the sleeve carries the most weight. A sleeve can look clean around the sides while being soft underneath, and that softening is what leads to failure during carry.' },
      { q: 'Does a barrier coating make a double-patty sleeve leakproof?', a: 'No, and it should not be described that way. A barrier treatment slows oil reaching and passing into the board, which buys time. On a heavy renderer the inner greaseproof wrap is doing most of the work. Both together keep the sleeve presentable through a meal.' },
      { q: 'Why does the sleeve feel loose by the time the customer eats?', a: 'Because the build settles. The weight of the upper patty compresses everything below it, so a double that stands tall at the pass is shorter minutes later. Size the sleeve for loading height and accept that the fit relaxes, rather than trying to grip a height that keeps changing.' },
      { q: 'Should I size for the assembled or the settled height?', a: 'For loading. A sleeve sized to the settled height will not accept the build in the first place, which slows the line and damages buns. Sizing for loading and allowing the fit to relax is the practical route.' },
      { q: 'Does settling change the width as well as the height?', a: 'Yes. As a stacked build compresses it spreads outward, so the sleeve becomes relatively shorter in one direction and tighter in another. Rigid walls resist that spread and hold the burger together; flexible walls follow it and let the build slump.' },
      { q: 'How do I test whether a sleeve holds up under grip?', a: 'Assemble a full double with your actual sauces and toppings, sleeve it, leave it standing for the time between pass and customer, then pick it up as a customer would and squeeze firmly for several minutes. Check your hand, the base panel and the wall shape afterwards.' },
      { q: 'The base goes soft during service — board or barrier?', a: 'Usually both, but barrier first. If oil is reaching the board quickly, a heavier caliper only delays the same outcome. Address the inner wrap and any barrier treatment, then look at board weight if the sleeve still lacks stiffness when dry.' },
      { q: 'Why does the closure work loose on a double?', a: 'Commonly because the build settles and the base bows under the weight, which reduces tension at the tab. Adding board thickness sometimes helps, but where the geometry is the cause, the fix belongs in the tooling rather than the material.' },
      { q: 'Is a double-patty sleeve the same as an oversized sleeve?', a: 'Not quite. An oversized format is usually tall because of piled toppings, which is lighter and less greasy. A double is denser, heavier for its height and renders far more fat. The two need different board and barrier decisions even at similar dimensions.' },
      { q: 'Do I need a taller sleeve or a stiffer one?', a: 'Answer it by observation. If the build tips or the top sways, height is the issue. If the sleeve flexes when lifted or deforms under grip, stiffness is. Loading a sample and lifting it tells you which within a few seconds.' },
      { q: 'What should I give a supplier when specifying for doubles?', a: 'Loading height and settled height if you can measure both, width at the widest point including wrap, approximate weight, and an honest description of how greasy the build is. The grease description changes the barrier recommendation as much as the dimensions change the board one.' },
    ],
  },
};
