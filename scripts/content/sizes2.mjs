/**
 * Sizes group, part two.
 *   TBS-025 Large        — what added weight demands of the board
 *   TBS-026 Jumbo        — height as the limiting factor; rigidity over size
 *   TBS-027 Slider       — a multiples problem; trays, batches, tiny artwork
 *   TBS-028 Double Patty — grease volume and compression from stacked patties
 */

export const sizes2 = {
  // ---------------------------------------------------------------- LARGE
  'TBS-025': {
    sections: [
      {
        heading: 'Weight Changes What The Board Has To Do',
        blocks: [
          { t: 'p', html: 'Scaling a sleeve up is not a drawing exercise. A larger sleeve spans a longer unsupported distance and carries a heavier item across it, and paperboard does not scale linearly. The same caliper that holds a standard burger without complaint will bow noticeably under a build half again as heavy.' },
          { t: 'p', html: 'Bowing matters because of where it happens. The base panel takes the load, and if it flexes downward the side walls pull inward at the top, which loosens the closure exactly when the weight is greatest. Customers experience this as a sleeve that felt fine on the counter and opened in the car.' },
          { t: 'p', html: 'The usual answer is a heavier caliper, but that is not the only lever. A shorter unsupported span, a deeper side wall or a scored fold that stiffens the base edge can all add rigidity without moving to thicker stock. Which route is available depends on the run, so it is worth asking rather than assuming a board change is the only option. Past a certain build weight the question stops being board and becomes structure, which is where <a href="/product/jumbo-burger-sleeves/">the oversized format built around wall height</a> takes over.' },
          {
            t: 'table',
            caption: 'Where a large sleeve takes load',
            headers: ['Area', 'What it carries', 'Failure sign'],
            rows: [
              ['Base panel', 'Full weight of the build', 'Visible downward bow'],
              ['Side walls', 'Lateral spread from a wide bun', 'Walls splay outward'],
              ['Closure', 'Tension from a bowing base', 'Works open during carry'],
              ['Fold lines', 'Repeated flex during assembly', 'Cracking along the crease'],
              ['Grip zone', 'Hand pressure during eating', 'Crushes where fingers close'],
            ],
          },
        ],
      },
      {
        heading: 'Wider Buns And Topping Overhang',
        blocks: [
          { t: 'p', html: 'Large builds are not just taller — they are usually wider, and the toppings frequently extend past the bun. A tomato slice or a lettuce leaf hanging over the edge is the thing that catches on a sleeve mouth during loading and tears either the leaf or the board.' },
          { t: 'p', html: 'Designing for overhang means allowing width beyond the bun measurement, and it means paying attention to the shape of the sleeve opening. A square-cut mouth catches; a slightly relieved or curved opening lets an overhanging topping slide past. That is a dieline decision more than a sizing one.' },
          { t: 'p', html: 'The other consequence is that a wide sleeve is harder to hold one-handed. Grip is a function of how far a hand can close around the sleeve, and past a certain width most people switch to two hands or support it from underneath. That changes how the packaging is used and is worth testing rather than predicting, ideally alongside <a href="/product/takeaway-burger-sleeves/">the formats intended for carrying away from the counter</a>.' },
          { t: 'p', html: 'Loading order helps more than most people expect. Sliding a wide build in from the side lets an overhanging leaf fold back naturally against the bun; dropping it in from above catches the same leaf on the sleeve edge and tears it. That is a training point rather than a packaging one, but it changes how often a sleeve is blamed for a problem it did not cause. Showing the loading direction once during a shift handover is usually enough for it to stick.' },
          {
            t: 'ul',
            items: [
              'Allow width beyond the bun for toppings that extend past the edge',
              'A relieved or curved sleeve mouth reduces catching during loading',
              'Grip becomes two-handed past a certain width',
              'Wider bases need more support to resist bowing',
              'Sauce is more likely to reach the sleeve edge on an overhanging build',
            ],
          },
        ],
      },
      {
        heading: 'More Surface Means More Design Decisions',
        blocks: [
          { t: 'p', html: 'A large sleeve gives a designer noticeably more printable area than a standard one, and that space gets filled whether it needs to be or not. The result is often a busy panel that looks cluttered in the hand even though it looked balanced on screen at reduced scale.' },
          { t: 'p', html: 'The area also sits differently in use. On a large sleeve the customer\'s hand covers a bigger absolute area but a smaller proportion of the panel, so more of the artwork stays visible while eating. Where the logo sits relative to a natural grip position is worth deciding deliberately rather than centring it by default.' },
          { t: 'p', html: 'Heavy ink coverage over a large panel introduces its own considerations. Large solid areas show mottling and colour drift more readily than small ones, folds through a dense printed area are more prone to visible cracking, and set-off between stacked sheets becomes more likely. None of these is a reason to avoid full coverage, but each is a reason to see a printed proof at full size rather than a scaled one.' },
          { t: 'p', html: 'Large formats also make the cut edge more visible, simply because there is more of it. On dark or heavily printed board the pale fibre at a cut edge reads as a line around the whole sleeve. Whether that is acceptable is a judgement to make from a physical sample, not from a drawing.' },
        ],
      },
      {
        heading: 'Getting A Heavy Build Out The Door',
        blocks: [
          { t: 'p', html: 'The handling problem shifts once a large burger leaves the counter. It goes into a bag with other items, it is carried at an angle, and it sits for the length of a journey. A sleeve that performs on a flat surface can behave quite differently when it is tilted inside a paper bag against a drinks cup.' },
          { t: 'p', html: 'Two things help. A closure that resists opening under a sideways load, and enough stiffness that the sleeve does not deform into whatever shape the bag imposes on it. Both come back to board choice and structure rather than to size.' },
          { t: 'p', html: 'Test it as it will actually travel. Load a real build, bag it with the rest of a typical order, carry it for the length of a normal delivery, then open it. That single test finds problems that no amount of counter-top inspection will. Operators specifying heavier board for this reason usually look at <a href="/product/cardboard-burger-sleeves/">the stiffer paperboard calipers available</a> before adding structural features.' },
        ],
      },
      {
        heading: 'Where The Large Size Sits On A Menu',
        blocks: [
          { t: 'p', html: 'A large sleeve is usually attached to a premium item, and that gives the packaging a commercial job as well as a physical one. The customer paying more for the bigger build is looking for a visible reason, and packaging that reads as identical to the standard option removes one of the easiest ways to provide it.' },
          { t: 'p', html: 'The step does not have to be dramatic. A visibly larger footprint is often enough on its own, particularly when the two sizes appear side by side on a shared table. Where the price difference is significant, some operators add a surface or print difference so the premium item is recognisable before it is opened.' },
          { t: 'p', html: 'There is a limit to this. Packaging that is much more elaborate than the standard line raises an expectation the food has to meet, and it introduces a second artwork and a second stock line for what may be a small share of orders. The step should be proportionate to the price difference and to how often the item actually sells.' },
          { t: 'p', html: 'Where the large size is a genuine premium line rather than simply a bigger portion, it is worth reviewing the whole presentation together — board, surface and print — rather than treating the size change as the only decision. That review is easier once the physical fit has been settled, because the structural requirements narrow the board options before any surface choice is made.' },
        ],
      },
    ],
    faqs: [
      { q: 'Can I just scale up a standard sleeve dimension?', a: 'Not reliably. A larger sleeve spans a longer unsupported distance and carries more weight across it, and paperboard does not scale linearly. The caliper that holds a standard burger without complaint will often bow under a build half again as heavy, which loosens the closure.' },
      { q: 'Why does my large sleeve open during delivery?', a: 'Usually because the base panel is bowing under the weight. As the base flexes downward the side walls pull inward at the top, releasing tension on the closure at the moment the load is greatest. It feels secure on the counter and opens in transit.' },
      { q: 'Is a heavier board the only way to add rigidity?', a: 'No. A shorter unsupported span, a deeper side wall or a scored fold that stiffens the base edge can all add stiffness without moving to thicker stock. Which options are available depends on the run and the tooling, so ask rather than assuming a board change is the only route.' },
      { q: 'How do I allow for toppings that hang over the bun?', a: 'Measure width at the widest point of the finished build including overhang, not at the bun. Then look at the sleeve mouth shape — a square-cut opening catches an overhanging leaf or tomato slice during loading, while a relieved or curved mouth lets it slide past.' },
      { q: 'At what point does a sleeve become two-handed?', a: 'It depends on hand size and on how deep the sleeve walls are, so there is no single figure. Test it with the people who will actually hand it over and the customers who will hold it, rather than predicting. If most testers support it from underneath, the grip zone needs rethinking.' },
      { q: 'What is the best way to test a large sleeve?', a: 'Load a real build, bag it with the rest of a typical order including a drink, carry it for the length of a normal delivery, then open it. Tilting inside a bag against other items is the condition that finds faults, and no amount of counter-top inspection reproduces it.' },
      { q: 'Do large sleeves crack along the folds more often?', a: 'They can, because heavier board needs deeper creasing to fold cleanly and the folds are longer. Insufficient crease depth shows as cracking along the outer surface, which is most visible on dark or heavily printed artwork. Board caliper and crease depth should be specified together.' },
      { q: 'Does a wider base need different support?', a: 'Yes. The base carries the full weight of the build across its span, and a wider base flexes more for the same board. That is where bowing starts, so if you are widening the sleeve, the base support is the first thing to review.' },
      { q: 'Should a large sleeve use a different closure?', a: 'It is worth reviewing. A closure that holds under a vertical load may release under a sideways one, and large builds spend more time tilted in bags. Test the closure in the carrying position rather than upright on a bench.' },
      { q: 'Is sauce more of a problem on large builds?', a: 'Often, because overhanging toppings and heavier fillings put sauce closer to the sleeve edge, and there is more of it. A greaseproof inner wrap does the barrier work; the sleeve is a grip and presentation layer and should not be treated as a container.' },
      { q: 'How much clearance should a large sleeve have?', a: 'Enough that the build loads without forcing, but not so much that it slides once bagged. Give your measured width and height including overhang and wrap, plus your intended clearance as a separate figure, so the supplier can see which part is food and which is allowance.' },
      { q: 'Will one large size cover all my premium builds?', a: 'Only if you measure the extremes rather than the average. Premium menus tend to vary more than standard ones, because specials and seasonal items change the build height. Measure the tallest and widest items you expect to run, not the typical one.' },
    ],
  },

  // ---------------------------------------------------------------- JUMBO
  'TBS-026': {
    sections: [
      {
        heading: 'Height Is The Limit, Not Width',
        blocks: [
          { t: 'p', html: 'At the top of the size range the constraint changes. Width can be extended fairly easily; height cannot. A tall build has a high centre of gravity, and a sleeve holding it is resisting a toppling force rather than simply containing a shape. That is a structural problem, and it does not improve by making the sleeve bigger.' },
          { t: 'p', html: 'Wall height is the main lever. A sleeve whose walls reach well up the side of the build supports it against tipping. A shallow sleeve on a tall burger acts as a band around the middle and lets the top half sway, which is how stacked toppings end up sliding out sideways.' },
          { t: 'p', html: 'The trade-off is that taller walls use more board, weigh more and cost more, and past a point they start to obscure the food entirely. Finding the height where support is adequate and the burger is still visible is the actual design question on a jumbo format.' },
        ],
      },
      {
        heading: 'Rigidity Matters More Than Dimension',
        blocks: [
          { t: 'p', html: 'Two sleeves with identical dimensions can behave completely differently depending on the board. On a jumbo build the difference is obvious in the hand: one holds its shape when lifted, the other flexes and lets the burger settle. Dimension gets specified carefully and rigidity often does not, which is why so many oversized sleeves disappoint.' },
          { t: 'p', html: 'Rigidity comes from caliper, from fibre structure and from geometry. A fluted construction adds stiffness at lower weight than solid board of the same thickness, which is why it appears on heavier formats. Scoring and fold placement also contribute, because a well-placed crease acts as a stiffening rib rather than just a hinge.' },
          { t: 'p', html: 'None of this can be judged from a specification sheet. It has to be handled, loaded and lifted. Where extra stiffness is needed without a large weight increase, operators generally look at <a href="/product/corrugated-burger-sleeves/">fluted board constructions that add stiffness for their weight</a> as an alternative to simply going thicker.' },
          {
            t: 'table',
            caption: 'What fails first on an oversized sleeve',
            headers: ['Failure', 'Cause', 'What to change'],
            rows: [
              ['Build tips sideways', 'Wall height too low for the centre of gravity', 'Raise the wall, not the width'],
              ['Sleeve flexes when lifted', 'Insufficient rigidity for the load', 'Caliper or fluted construction'],
              ['Closure releases', 'Base bowing under weight', 'Stiffen the base, review the tab'],
              ['Crease cracks', 'Crease depth too shallow for the board', 'Deepen the score'],
              ['Toppings slide out', 'Top of the build unsupported', 'Extend wall height'],
            ],
          },
        ],
      },
      {
        heading: 'Carrying Something Tall And Heavy',
        blocks: [
          { t: 'p', html: 'A jumbo build is awkward to carry and the packaging decides how awkward. Held from the middle, a tall sleeve wants to pivot. Held from the base, it is stable but the hand is under the weight. Most people settle on a two-handed carry, and packaging that assumes one hand will be handed back.' },
          { t: 'p', html: 'Bagging introduces the other problem. A tall item does not sit comfortably in a standard bag alongside fries and a drink, and it tends to lean. Leaning transfers the load onto one side wall, which is the least supported direction. Operators serving oversized builds for delivery often bag them separately for exactly this reason.' },
          {
            t: 'ol',
            items: [
              'Load a full-height build and lift the sleeve from the middle with one hand',
              'Repeat holding only the base and note whether the top sways',
              'Set it into a standard bag with a drink and observe how far it leans',
              'Carry the bag for a realistic distance, then inspect the closure and walls',
              'If it leans past a comfortable angle, test a taller wall before a thicker board',
            ],
          },
          { t: 'p', html: 'Where the build is tall because of stacked patties rather than piled toppings, the loading is different again and the sleeve has a different job to do. That case is worth reviewing against <a href="/product/double-patty-burger-sleeves/">sleeves shaped around stacked patty builds</a> before settling on an oversized format.' },
        ],
      },
      {
        heading: 'Cost Behaviour At The Top Of The Range',
        blocks: [
          { t: 'p', html: 'Oversized sleeves cost more per unit for reasons that compound. More board area, usually a heavier caliper, more ink if the artwork covers the panel, and fewer units per shipping case. Each is modest on its own and together they make jumbo the most expensive line in a size range by a clear margin.' },
          { t: 'p', html: 'That matters because oversized items are frequently a small share of orders. A signature build that sells a handful of times a day still needs its own packaging line, its own storage slot and its own minimum order. The packaging cost per unit sold can be several times the sleeve price once the holding cost of slow-moving stock is included.' },
          { t: 'p', html: 'Some operators respond by pushing a marginal build down into the next size and accepting a tighter fit. Others keep the oversized line but order it far less often. Both are reasonable; the mistake is treating the jumbo line as though it behaves like the standard one.' },
          {
            t: 'table',
            caption: 'Why unit cost rises faster than size',
            headers: ['Factor', 'Effect at oversized dimensions'],
            rows: [
              ['Board area', 'Rises with both width and wall height'],
              ['Caliper', 'Usually heavier to hold the load'],
              ['Ink coverage', 'More area if artwork covers the panel'],
              ['Units per case', 'Fewer, raising handling and shipping per unit'],
              ['Storage slot', 'Same slot occupied for far lower turnover'],
              ['Minimum order', 'Applies regardless of how few you sell'],
            ],
          },
        ],
      },
      {
        heading: 'What A Supplier Needs From You',
        blocks: [
          { t: 'p', html: 'Oversized formats are the least standardised part of a range, so a quotation depends more heavily on what you provide. Give the maximum height of the finished build, the width at its widest point, the approximate weight, and how it will be carried.' },
          { t: 'p', html: 'Weight is the figure most often left out and the one that most affects the board recommendation. A tall sleeve holding a light build and a tall sleeve holding a heavy one are different specifications even at identical dimensions.' },
          { t: 'p', html: 'Ask what board options exist at your dimensions and what each does to unit cost, then request samples in at least two of them. Judging rigidity from a description is not possible, and the difference between adequate and inadequate on a jumbo format is something you feel immediately when you lift a loaded sample. Bring the measurements and the weight to the <a href="/get-free-quote/">quotation stage where board and structure are matched to the build</a> rather than after ordering.' },
        ],
      },
      {
        heading: 'Whether The Build Should Be Sleeved At All',
        blocks: [
          { t: 'p', html: 'At the very top of the size range it is worth asking whether a sleeve is the right format. A sleeve holds a build together and gives a clean grip surface. It does not enclose the item, and past a certain height and weight the things a customer needs from the packaging start to look more like containment than grip.' },
          { t: 'p', html: 'The signals are practical. If the build has to be eaten with a fork, if it cannot be lifted without support underneath, or if toppings routinely escape during the first bite, the packaging is being asked to do a job a sleeve is not shaped for.' },
          { t: 'p', html: 'None of that means an oversized sleeve is wrong. Plenty of tall builds are held perfectly well by one, and a sleeve keeps the food visible in a way an enclosed format does not. The point is that the question should be asked deliberately at the top of the range rather than assumed away because the rest of the menu uses sleeves.' },
          { t: 'p', html: 'Testing it is straightforward. Give a finished build to several people, sleeved, and watch how they handle it. If most of them support it from underneath with a second hand or set it down to eat, the format is being stretched past what it does well.' },
        ],
      },
    ],
    faqs: [
      { q: 'Why is height harder to design for than width?', a: 'A tall build has a high centre of gravity, so the sleeve resists a toppling force rather than simply containing a shape. Width can usually be extended without changing the structural problem; height changes what the sleeve is being asked to do, and making the sleeve bigger does not fix it.' },
      { q: 'How high should the sleeve walls come up the burger?', a: 'High enough that the top of the build is supported rather than swaying. A shallow sleeve on a tall burger acts as a band around the middle and lets the upper half move, which is how stacked toppings slide out. The trade-off is that taller walls use more board and begin to hide the food.' },
      { q: 'Can two sleeves with the same dimensions perform differently?', a: 'Yes, and on oversized formats the difference is obvious. Rigidity comes from caliper, fibre structure and geometry, not from dimension. One sleeve holds its shape when lifted, the other flexes and lets the build settle. Dimension gets specified carefully and rigidity often does not.' },
      { q: 'Is fluted board worth considering for jumbo sleeves?', a: 'It is a common route, because a fluted construction adds stiffness for its weight compared with solid board of the same thickness. Whether it suits your build depends on the surface finish you want and the run size, so request samples rather than deciding from a description.' },
      { q: 'Why does the closure release on a heavy build?', a: 'Usually because the base is bowing under the weight. As the base flexes, the side walls pull inward at the top and tension on the closure drops. Stiffening the base often solves it more effectively than redesigning the tab.' },
      { q: 'How should I test a jumbo sleeve before ordering?', a: 'Load a full-height build, lift from the middle with one hand, repeat holding only the base, then bag it with a drink and carry it a realistic distance. Inspect the closure and walls afterwards. If it leans past a comfortable angle, try a taller wall before a thicker board.' },
      { q: 'Do oversized builds need to be bagged separately?', a: 'Many operators do it. A tall item does not sit comfortably alongside fries and a drink and tends to lean, which transfers load onto one side wall — the least supported direction. Separate bagging avoids that at the cost of an extra bag per order.' },
      { q: 'What information does a supplier need for an oversized sleeve?', a: 'Maximum finished height, width at the widest point, approximate weight of the build, and how it will be carried. Weight is the figure most often omitted and the one that most affects the board recommendation, because two sleeves at identical dimensions holding different weights are different specifications.' },
      { q: 'Why does the board crack along the folds on thick stock?', a: 'Heavier board needs deeper creasing to fold cleanly. If the crease depth is set for a lighter caliper, the outer surface splits along the fold as it closes. This is most visible on dark or heavily printed artwork, so crease depth should be specified alongside the board.' },
      { q: 'Is a jumbo sleeve suitable for stacked-patty builds?', a: 'Sometimes, but the loading is different. A build that is tall because of piled toppings behaves differently from one that is tall because of stacked patties, which is denser and produces more grease. Review both formats before assuming the oversized option covers it.' },
      { q: 'Will a jumbo sleeve fit standard packaging trays?', a: 'That should be checked rather than assumed, because tray and bag dimensions are usually set around standard builds. Measure the assembled sleeve against the trays, bags and delivery boxes you already stock before committing to a run.' },
      { q: 'Does a taller sleeve always cost more?', a: 'More board area generally means more cost per unit, and heavier calipers add to that. Whether the increase is significant depends on run size and board choice. Ask for pricing on at least two board options at your dimensions so the rigidity gain can be weighed against the cost.' },
    ],
  },
};
