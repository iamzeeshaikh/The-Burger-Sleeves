/**
 * Materials group, part one.
 *   TBS-001 Kraft     — kraft as a STOCK decision: absorbent vs barrier build,
 *                       weight band, crease behaviour. Deliberately not a colour
 *                       or printing page; TBS-029 Kraft Brown owns the brown
 *                       surface and ink-on-brown behaviour, and this page links
 *                       there rather than repeating it.
 *   TBS-002 Cardboard — rigid paperboard structure: caliper and stiffness
 *                       selection, scoring, grip features. Not corrugated.
 *
 * Every figure used here comes from the products' own specification tables
 * (Kraft 250-400 GSM, absorbent/barrier builds; Cardboard 250-450 GSM, SBS and
 * kraft board, reinforced scoring, thumb notch). Nothing is invented, and no
 * disposal outcome is asserted without a condition attached.
 */

export const materials = {
  'TBS-001': {
    sections: [
      {
        heading: 'What The Word Kraft Actually Specifies',
        blocks: [
          { t: 'p', html: 'Kraft describes how the pulp was made, not what the board looks like or how it performs. It is a chemical pulping process that leaves fibres longer and stronger than mechanical pulping does, which is why kraft stock tears less readily along a fold and holds a crease under load.' },
          { t: 'p', html: 'Two things follow that catch buyers out. The brown colour is a by-product of leaving the pulp unbleached rather than a specification in itself, so "kraft" on a quotation does not fix a shade. And kraft says nothing about fibre source: a kraft board may be virgin fibre, recycled fibre or a blend, and recycled content has to be asked for separately rather than inferred from the colour.' },
          { t: 'p', html: 'What kraft does reliably give you is fold strength for the weight. That is the practical reason it appears so often on sleeve stock, where the board has to take a crease, get handled warm, and stay rigid enough to hold a wrap in place. It is one of several boards that will do that job, and it is worth seeing it beside <a href="/product-category/burger-sleeves-materials/">the other stocks the range is built from</a> rather than choosing it on appearance alone.' },
        ],
      },
      {
        heading: 'Absorbent Build Or Barrier Build',
        blocks: [
          { t: 'p', html: 'This is the decision that actually changes the product, and it is the one most often left unspecified. Kraft sleeve stock is offered either as plain absorbent board or with a barrier treatment, and the two behave differently from the first minute of service.' },
          { t: 'p', html: 'Absorbent kraft takes oil into the fibre. On brown board that reads as a gradual deepening in tone rather than a defined stain, which is forgiving, but the board also softens as it absorbs and loses some rigidity through a long hold. A barrier build slows that migration and keeps the panel firmer for longer, at the cost of the dry papery hand-feel that is often the reason kraft was chosen.' },
          { t: 'p', html: 'Neither build makes a sleeve a container. A sleeve is a grip and presentation layer, and for sauced or juicy builds the inner greaseproof wrap remains the thing doing the real work.' },
          {
            t: 'table',
            caption: 'Kraft build options and what each one commits you to',
            headers: ['Build option', 'What it changes', 'Print consequence', 'Confirm at quotation'],
            rows: [
              ['Uncoated absorbent kraft', 'Oil moves into the fibre; board softens over a long hold', 'Ink sinks slightly, fine detail closes up', 'Whether an inner wrap is assumed in the specification'],
              ['Barrier-treated kraft', 'Slows oil migration into the board', 'Surface moves from dry to slightly sealed', 'Which treatment, and whether it covers one face or both'],
              ['Textured kraft', 'More grip in a warm hand', 'Small type and thin rules lose crispness', 'Whether the texture runs at your order size'],
              ['Smooth print-grade kraft', 'Flatter face for artwork', 'Holds detail better than textured stock', 'Whether the shade matches stock you already hold'],
              ['Heavier caliper within the 250-400 GSM band', 'More rigidity under a loaded burger', 'Heavy ink can crack on an under-creased fold', 'Crease depth specified for the chosen weight'],
            ],
          },
        ],
      },
      {
        heading: 'Reading The Weight Band Properly',
        blocks: [
          { t: 'p', html: 'Kraft sleeve stock is quoted across a 250 to 400 GSM band, and where you sit in it is a handling decision rather than a quality one. Heavier is not better; it is stiffer, bulkier in storage and more demanding of the crease.' },
          { t: 'p', html: 'The lower end suits light builds and short holds, where the sleeve needs to keep a wrap tidy and little else. The upper end earns its place when the burger is heavy, when the sleeve is gripped one-handed, or when orders sit staged on a shelf long enough for a lighter board to relax. Between those, the honest answer usually comes from handling a sample loaded rather than from a number on a sheet.' },
          { t: 'p', html: 'Weight also interacts with how much oil the board is meeting. A heavier absorbent board holds its shape longer simply because there is more material to soften, which sometimes removes the need for a barrier on a menu that is only moderately greasy.' },
        ],
      },
      {
        heading: 'Scoring Decides Whether Kraft Folds Or Cracks',
        blocks: [
          { t: 'p', html: 'Long kraft fibres fold well, but only along a crease cut deep enough for the board in front of it. Under-creasing is the single most common production fault on heavier kraft, and it shows as a pale broken line straight down the fold where the surface has split.' },
          {
            t: 'ul',
            items: [
              'Crease depth has to be specified against the actual caliper, not carried over from a lighter board',
              'A fold that needs force at the counter will crack in service even when it passed on a bench',
              'Board that has sat in kitchen humidity folds differently from board straight out of a sealed case',
              'Heavy ink coverage across a crease makes any split far more visible than bare board would',
              'A sample folded once tells you little; fold and unfold it several times as staff will',
            ],
          },
          { t: 'p', html: 'This is worth testing before a run rather than after. A cracked crease is a tooling and setup issue, and it is cheap to correct at sample stage and expensive to correct on delivered stock.' },
        ],
      },
      {
        heading: 'How This Page Differs From The Brown Style Option',
        blocks: [
          { t: 'p', html: 'The catalogue carries kraft in two places and they answer different questions, which is worth being explicit about rather than leaving buyers to guess.' },
          { t: 'p', html: 'This page is about kraft as a stock: how the fibre behaves, whether you take an absorbent or barrier build, where to sit in the weight band, and how the board takes a crease. It is a construction decision. If your question is instead about how the brown ground changes printed colour, which inks hold on unbleached fibre, and how to design a mark that reads against it, that is covered on <a href="/product/kraft-brown-burger-sleeves/">the brown surface option in the styles range</a>, where the appearance rather than the build is the subject.' },
          { t: 'p', html: 'In practice most orders touch both. The usual sequence is to settle the build and weight here, then take the shade and print questions separately, because a board decision constrains the artwork far more than artwork constrains the board.' },
        ],
      },
      {
        heading: 'Kraft On A Mobile Or Outdoor Service Line',
        blocks: [
          { t: 'p', html: 'Kraft holds up in settings that punish brighter stock. Marks that would be obvious on white board read as tonal variation on brown, which matters where packaging is handled in dust, wind or rain before it reaches anyone.' },
          { t: 'p', html: 'The trade is storage. Kraft absorbs ambient humidity like any uncoated paperboard, and a case left open beside a fryer will fold differently by the end of a shift than it did at the start. Operators working out of <a href="/product/food-truck-burger-sleeves/">a service window with no dry store behind it</a> tend to feel this first, and the workable answer is small sealed quantities brought out as needed rather than a bulk case left open at the pass.' },
          { t: 'p', html: 'Where the menu runs genuinely wet, a barrier build stops being an upgrade and becomes the specification. That decision belongs with the menu rather than with the setting, and it is worth deciding it on the sauciest item you sell rather than the average one.' },
        ],
      },
      {
        heading: 'Disposal Questions Worth Putting To A Supplier',
        blocks: [
          { t: 'p', html: 'Kraft looks like the environmentally straightforward option and is often assumed to be one. What can honestly be said is narrower: it is a paper-based board, and what happens to it afterwards depends on the finished construction and on the facilities where it is thrown away.' },
          {
            t: 'ol',
            items: [
              'Ask whether the board carries recycled content, and get the answer in writing rather than inferring it from the colour',
              'Ask what barrier treatment, if any, has been applied, and on which face',
              'Ask whether that treatment affects fibre recovery, because coatings and laminates behave differently from each other',
              'Check what your local collection actually accepts, since acceptance varies between facilities rather than following the material',
              'Factor in food residue, which can affect whether used packaging is recovered at all regardless of the board',
            ],
          },
          { t: 'p', html: 'None of that argues against kraft. It argues against putting an unconditional disposal claim on a printed sleeve, which is a claim about a facility rather than about a board, and one no supplier can make on your behalf.' },
        ],
      },
      {
        heading: 'Specifying Kraft Without Leaving Gaps',
        blocks: [
          { t: 'p', html: 'A quotation that says only "kraft sleeve" leaves the build, the weight, the barrier and the shade all open, and any of the four can come back different from what you pictured.' },
          { t: 'p', html: 'State the finished burger dimensions as it leaves the kitchen, the weight band you want, whether the build is absorbent or barrier-treated, and whether an inner wrap is part of the setup. If shade consistency across reorders matters, say so at quotation and retain an approved sample, because unbleached board varies between batches as a normal property of the material rather than as a fault.' },
          { t: 'p', html: 'For artwork, keep it simple on this stock. Solid marks and strong single colours hold well; the detail of what a brown ground does to printed colour is a separate conversation, and one worth having before the layout is signed off rather than after. Where the design is a single dark ink, <a href="/product/black-printed-burger-sleeves/">one-colour work laid onto a light board</a> is the least demanding thing kraft can be asked to carry, and the most forgiving of batch shade variation.' },
        ],
      },
    ],
    faqs: [
      { q: 'Does kraft mean the board is brown?', a: 'Not necessarily. Kraft describes the pulping process, and the brown colour comes from leaving that pulp unbleached. Bleached kraft board exists and is pale. Because the word does not fix a shade, a quotation should state the intended appearance separately rather than relying on the material name alone.' },
      { q: 'Is kraft board automatically recycled board?', a: 'No. Kraft describes how the fibre was pulped; recycled describes where the fibre came from. A kraft board may be virgin fibre, recycled fibre or a blend of both. If recycled content matters to your business, ask for it explicitly and ask for the answer in writing rather than inferring it from the brown appearance.' },
      { q: 'What is the difference between absorbent and barrier kraft?', a: 'Absorbent kraft lets oil move into the fibre, which shows as a gradual darkening and gradually softens the board. A barrier build slows that migration so the panel stays firmer for longer. The trade is hand-feel: barrier treatment moves the surface away from the dry papery texture that often motivates choosing kraft.' },
      { q: 'Will a barrier treatment make the sleeve leakproof?', a: 'No, and it should not be described that way. A barrier slows oil moving into the board. It does not make paperboard a container and does not hold liquid. For sauced or juicy builds an inner greaseproof wrap does the real work, with the sleeve acting as a grip and presentation layer around it.' },
      { q: 'Which weight should I choose within the 250 to 400 GSM range?', a: 'Heavier is stiffer rather than better. Lighter suits modest builds and short holds; heavier earns its place under a loaded burger, a one-handed grip or a long staging time. The reliable way to decide is to handle a loaded sample at each candidate weight rather than choosing from the figure alone.' },
      { q: 'Why did the printed surface crack along the fold?', a: 'Almost always because the crease was not cut deep enough for the board in front of it. Long kraft fibres fold well, but only along an adequate crease, and heavy ink across the fold makes any split far more visible. Crease depth should be specified against the actual caliper rather than carried over from a lighter stock.' },
      { q: 'How is this different from the kraft brown sleeve option?', a: 'This page covers kraft as a construction: the build, the weight band and how the board takes a crease. The brown style option covers appearance and printing — what unbleached fibre does to printed colour and how to design a mark that reads against it. Most orders settle the build first and the surface second.' },
      { q: 'Does kraft hide grease marks better than pale board?', a: 'Considerably better. Oil darkens fibre on any paperboard, but against an already warm brown ground the result reads as a slight deepening in tone rather than a defined stain. It is more visible than on a dark printed board and much less visible than on a bright white one.' },
      { q: 'Will the kraft shade be identical on every reorder?', a: 'Unbleached board varies slightly between production batches, and specks and small tonal shifts are normal in the material rather than defects. If close consistency matters, retain a sample from the approved run, raise the requirement at quotation, and ask whether the same board specification can be held across reorders.' },
      { q: 'Can kraft sleeves be recycled after use?', a: 'That depends on the finished construction and on local facilities rather than on the material name. Barrier treatments, laminates and heavy ink coverage can each affect fibre recovery, and food residue can affect whether used packaging is recovered at all. Check what your collection accepts for the specific build you order.' },
      { q: 'How should kraft stock be stored before use?', a: 'Keep cases sealed until needed and bring out working quantities rather than leaving a bulk case open. Uncoated board takes up ambient humidity, and stock that has sat open beside a fryer folds differently from stock straight out of a sealed carton. Store flat rather than on edge and rotate older cases first.' },
      { q: 'What should I send a supplier to get an accurate kraft quotation?', a: 'The finished burger dimensions measured as it leaves the kitchen, the weight band you want, whether the build should be absorbent or barrier-treated, whether an inner wrap is part of the setup, and your run size. A photograph of the assembled burger beside a ruler resolves more ambiguity than measurements on their own.' },
    ],
  },

  'TBS-002': {
    sections: [
      {
        heading: 'Cardboard Names A Family, Not A Board',
        blocks: [
          { t: 'p', html: 'In everyday use "cardboard" covers everything from a cereal carton to a shipping box, and that looseness causes real confusion at quotation. For sleeve work it means solid paperboard: a single layer of board, no fluting, cut and creased into shape.' },
          { t: 'p', html: 'That matters because it sets the boundary against the fluted option. Solid paperboard gets its stiffness from thickness and fibre; a fluted structure gets it from geometry. They are different products with different bulk, different cost behaviour and different print surfaces, and treating the words as interchangeable is how a specification ends up meaning nothing.' },
          { t: 'p', html: 'The boundary in the other direction is blurrier and worth knowing about. Both this product and <a href="/product/paper-burger-sleeves/">the paperboard option sold on format rather than stiffness</a> describe solid board across overlapping caliper ranges, so the difference between them is which question you are answering — how rigid the sleeve needs to be, or how it is applied and what sits underneath it.' },
          { t: 'p', html: 'Within solid board the practical choice on this product is between a white SBS surface and a kraft board, in a range quoted from roughly 250 to 450 GSM. Everything else on this page follows from where you land on those two axes.' },
        ],
      },
      {
        heading: 'What Board Weight Buys And What It Costs',
        blocks: [
          { t: 'p', html: 'Stiffness is the property people are usually buying when they ask for cardboard, and it rises with caliper. So does everything else: material cost, shipping weight, storage volume and the crease depth the board needs to fold cleanly.' },
          { t: 'p', html: 'The useful question is not how stiff the sleeve can be but how stiff it needs to be to stop doing the thing that is currently going wrong. A sleeve that bows under a loaded burger, one that collapses when lifted one-handed, or one that will not stay square on a staged shelf each point at a different part of the range.' },
          {
            t: 'table',
            caption: 'Choosing a board and a weight against the failure you are trying to fix',
            headers: ['Selection', 'Where it sits', 'Suits', 'What it costs you'],
            rows: [
              ['Lighter end of the 250-450 GSM range', 'Minimum rigidity for a tidy wrap', 'Modest builds, short holds, high volumes', 'Bows under weight and relaxes on a long hold'],
              ['Middle of the range', 'General-purpose sleeve stiffness', 'Mixed menus and typical counter service', 'Compromise at both extremes of the menu'],
              ['Heavier end of the range', 'Holds square under load', 'Loaded builds, one-handed grip, long staging', 'More bulk in storage and deeper creases needed'],
              ['White SBS surface', 'Bright, smooth print face', 'Detailed artwork, small text, photography', 'Shows marks and grease more readily'],
              ['Kraft board surface', 'Unbleached, more forgiving face', 'Simple strong marks, messier settings', 'Shifts printed colour and limits fine detail'],
              ['Reinforced fold scoring', 'Deeper creasing on heavier stock', 'Anything at the top of the weight range', 'Must be specified; not assumed at any caliper'],
            ],
          },
        ],
      },
      {
        heading: 'Why Heavier Board Needs The Scoring Rethought',
        blocks: [
          { t: 'p', html: 'Moving up a caliper is not a drop-in change. The same crease that folded a lighter board cleanly will leave a heavier one fighting back, and the sleeve either closes crooked or splits along the outside of the fold.' },
          { t: 'p', html: 'Reinforced scoring exists for exactly this and has to be asked for. It is not applied automatically because the board got thicker, and a quotation that raises the weight without mentioning the crease has changed one variable and left its consequence unaddressed.' },
          { t: 'p', html: 'The symptom to watch for on a sample is force. If closing the sleeve takes a deliberate press rather than a light fold, staff will apply that force several hundred times a day, and the failure will appear in service rather than at approval.' },
        ],
      },
      {
        heading: 'Grip Features Are A Structural Decision',
        blocks: [
          { t: 'p', html: 'A thumb notch is the common one, and it is worth treating as part of the structure rather than as a finishing detail. Cutting an opening removes material from a panel that is carrying load, and where it sits relative to the crease changes how much stiffness is lost.' },
          {
            t: 'ul',
            items: [
              'A notch near a crease weakens the fold more than the same notch in the middle of a panel',
              'Rounding the corners of any opening spreads stress rather than concentrating it at a point',
              'Textured kraft board adds grip without removing any material at all, which is sometimes the better answer',
              'On heavier stock the extra rigidity may already solve the grip problem the notch was meant to fix',
              'Any opening has to be checked with a loaded sleeve, because grip is a function of weight rather than shape',
            ],
          },
          { t: 'p', html: 'The test is quick and worth doing properly: load the sample, hand it across a counter at the height your service actually uses, and watch where the recipient puts their thumb. That tells you more than a drawing will.' },
        ],
      },
      {
        heading: 'Matching Board To A Loaded Build',
        blocks: [
          { t: 'p', html: 'Board selection goes wrong most often on the heaviest item rather than the typical one, because the specification was set against an average build that nothing on the menu actually is.' },
          {
            t: 'ol',
            items: [
              'Weigh the heaviest finished item the sleeve has to carry, wrapped as it leaves the kitchen',
              'Hold a candidate sample loaded to that weight for as long as an order realistically waits',
              'Lift it one-handed from a shelf, which is how it will be picked up rather than how it was tested',
              'Check whether the base panel has bowed enough to loosen the wrap underneath',
              'Repeat the whole sequence with a sample that has sat in kitchen humidity, not a fresh one',
            ],
          },
          { t: 'p', html: 'Where the heaviest item defeats a board that suits everything else, splitting the specification is usually cheaper than lifting the whole menu onto a heavier stock. Operators serving <a href="/product/large-burger-sleeves/">the upper end of a burger size range</a> often end up with two boards rather than one for that reason, and the arithmetic favours it as soon as the heavy item is a minority of volume.' },
        ],
      },
      {
        heading: 'The Point Where More Rigidity Stops Helping',
        blocks: [
          { t: 'p', html: 'Stiffness solves bowing and collapse. It does not solve height, and it does not solve a build that spreads. Past a certain point extra caliper adds cost and storage bulk without addressing what is actually going wrong.' },
          { t: 'p', html: 'The signal is which failure you keep seeing. If the sleeve holds its shape but the burger still moves inside it, the problem is dimensions rather than board. If the sleeve holds but the closure keeps popping, the problem is the structure. A tall, layered build that compresses and settles is a fit question before it is a stiffness question, which is why <a href="/product/double-patty-burger-sleeves/">a sleeve sized around a stacked build</a> often outperforms a heavier board cut to the wrong depth.' },
          { t: 'p', html: 'Working out which of the three you have costs one afternoon with samples and saves specifying the wrong upgrade.' },
        ],
      },
      {
        heading: 'Flat-Pack Storage And What It Does To Stock',
        blocks: [
          { t: 'p', html: 'Solid board ships and stores flat, which is one of its practical advantages over any structured alternative. A case takes little shelf depth and a stack releases cleanly under a hand.' },
          { t: 'p', html: 'The failure mode is storage rather than supply. Board stacked on edge takes a set and stops sitting square; board left open near a prep line picks up airborne flour and oil on the top few sleeves; board that has absorbed humidity creases differently from board that has not. None of that is a defect in the stock and all of it shows up as inconsistency at the counter.' },
          { t: 'p', html: 'Keeping cases sealed, storing flat, rotating older stock first and pulling working quantities to the pass covers essentially all of it, and costs nothing beyond deciding where the cases live.' },
        ],
      },
      {
        heading: 'Settling The Specification Before Quotation',
        blocks: [
          { t: 'p', html: 'A cardboard sleeve quotation needs four things fixed: the finished dimensions of the loaded item, the board surface, the weight, and whether reinforced scoring is included. Leaving any of them open means comparing quotations that are not describing the same product.' },
          { t: 'p', html: 'Ask for the crease specification alongside the caliper rather than separately, and ask whether a barrier treatment is included where the menu needs one — a print coating and a barrier coating are different things, and having one does not mean you have the other. If the structure is doing anything beyond a plain wrap, the cutting tool becomes part of the specification too, and <a href="/product/die-cut-burger-sleeves/">a shaped tool with tabs and locks</a> is priced and proofed differently from a straight rectangular cut.' },
          { t: 'p', html: 'Approve a physical sample at the final board rather than a visual on screen. Stiffness, crease behaviour and grip are all things the hand judges in seconds and a drawing cannot show at all.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is cardboard the same as corrugated board?', a: 'No, and the distinction matters at quotation. Cardboard here means solid paperboard, a single layer that gets its stiffness from thickness and fibre. Corrugated gets its stiffness from a fluted layer between liners. They differ in bulk, cost behaviour and print surface, so a specification should name which one it means.' },
      { q: 'What board weight should a cardboard burger sleeve be?', a: 'The range quoted for this product runs from roughly 250 to 450 GSM, and the right point depends on the failure you are fixing. Bowing under load points higher; adequate rigidity at high volume points lower. The reliable test is holding a loaded sample for as long as an order actually waits.' },
      { q: 'What is the difference between white SBS and kraft board here?', a: 'SBS gives a bright smooth face that reproduces detailed artwork and small text accurately but shows marks and grease readily. Kraft board is unbleached and more forgiving in messy settings, but it tints printed colour and limits fine detail. The choice is usually driven by artwork before it is driven by structure.' },
      { q: 'Why does my sleeve crack along the fold on heavier board?', a: 'Because the crease was not deepened when the caliper went up. Reinforced scoring exists for heavier stock and has to be specified rather than assumed. If closing a sample takes a deliberate press rather than a light fold, the crease is under-specified and the split will appear in service.' },
      { q: 'Does a thumb notch weaken the sleeve?', a: 'It removes material from a panel that is carrying load, so it can. Placement matters more than size: a notch near a crease weakens the fold more than the same notch mid-panel, and rounding the corners spreads stress rather than concentrating it. On heavier board the added rigidity sometimes removes the need for the notch entirely.' },
      { q: 'Can one board weight cover a whole burger menu?', a: 'Sometimes, but specifications go wrong most often on the heaviest item rather than the typical one. Where the heaviest build defeats a board that suits everything else, running two boards is usually cheaper than lifting the entire menu onto heavier stock, particularly when the heavy item is a minority of volume.' },
      { q: 'My sleeve holds its shape but the burger still moves. Is that a board problem?', a: 'No, that is a dimensions problem. Stiffness stops bowing and collapse; it does not stop an item shifting inside a sleeve that is too wide or too deep for it. Adding caliper adds cost and storage bulk without addressing the fit, so it is worth diagnosing which of the two you have before upgrading.' },
      { q: 'Is a print coating the same as a grease barrier?', a: 'No. A print coating improves how ink sits on the surface for density and sharpness. A barrier treatment is applied to slow oil moving into the board. A sleeve can have one without the other, so ask which treatments are included rather than assuming that a coated board resists grease.' },
      { q: 'How should cardboard sleeves be stored?', a: 'Flat, sealed and rotated. Stock stacked on edge takes a set and stops sitting square, stock left open near a prep line collects airborne flour and oil on the top sleeves, and board that has absorbed humidity creases differently from board that has not. Pulling working quantities to the pass covers most of it.' },
      { q: 'Do heavier sleeves cost more to ship and store?', a: 'Yes, on both counts. Caliper raises material cost, shipping weight and the shelf volume a given quantity occupies. That is a fair reason to specify the weight against the heaviest item rather than lifting the whole range, since the difference compounds across every case you hold.' },
      { q: 'Can cardboard sleeves be recycled?', a: 'It depends on the finished construction and on local collection rather than on the board alone. Barrier treatments, laminates and heavy ink coverage can each affect fibre recovery, and food residue can affect whether used packaging is recovered. Confirm the specific build with your supplier and check what your facility accepts.' },
      { q: 'What does a supplier need to quote cardboard sleeves accurately?', a: 'The finished dimensions of the loaded item as it leaves the kitchen, the board surface you want, the weight, whether reinforced scoring is included, and whether any barrier treatment is needed. Without all five, competing quotations are describing different products and cannot be compared on price.' },
    ],
  },
};
