/**
 * Styles group, part two. See styles.mjs for the differentiation plan.
 *   TBS-029 Kraft Brown — unbleached fibre as a printing ground
 *   TBS-033 Gloss       — coating as ink protection and its lighting problem
 *   TBS-034 Die Cut     — dieline engineering, tabs, tolerance, assembly
 */

export const styles2 = {
  // ----------------------------------------------------------- KRAFT BROWN
  'TBS-029': {
    sections: [
      {
        heading: 'What Unbleached Board Does To Printed Colour',
        blocks: [
          { t: 'p', html: 'Kraft brown board has not been bleached, so the natural colour of the wood fibre remains. That brown ground sits under every mark printed on it and acts like a warm filter. A blue prints greener. A red prints earthier. Pale tints — pastels, light greys, soft pinks — mostly vanish, because there is not enough ink density to overcome the substrate underneath.' },
          { t: 'p', html: 'The practical consequence is that kraft rewards designs built for it and punishes designs ported onto it. Artwork developed on white and then applied to brown board rarely survives the move intact. Designers who work with kraft regularly build in one or two strong colours, rely on solid shapes rather than gradients, and treat the brown itself as one of the palette colours rather than as blank space.' },
          { t: 'p', html: 'There is also visible variation in the board. Unbleached fibre carries specks, tonal shifts and occasional darker flecks. Between production batches the base shade can move slightly. For most operators this reads as character; for a brand with tight colour governance it is a genuine constraint that needs acknowledging before a first order.' },
          {
            t: 'table',
            caption: 'Ink behaviour on unbleached brown board',
            headers: ['Ink choice', 'Result on kraft', 'Reliability'],
            rows: [
              ['Solid black', 'Strong contrast, clean edges', 'High'],
              ['Opaque white', 'Reads clearly, the usual choice for reversed marks', 'High, needs adequate ink density'],
              ['Single strong spot colour', 'Shifts warm but stays legible', 'Good'],
              ['Full-colour photography', 'Muddied, tonal range collapses', 'Poor'],
              ['Pale tints and pastels', 'Largely absorbed into the brown', 'Poor'],
              ['Metallic', 'High contrast, works well as a small mark', 'Good, cost depends on run'],
            ],
          },
        ],
      },
      {
        heading: 'How Brown Board Handles Grease',
        blocks: [
          { t: 'p', html: 'Kraft sits in a useful middle position on grease. Oil migrating into the fibre darkens it, exactly as it does on any paperboard, but the starting colour is already dark and warm, so the resulting patch is far less conspicuous than on white. It is more visible than on black, and it tends to appear as a deepening of tone rather than a defined stain edge.' },
          { t: 'p', html: 'Uncoated kraft absorbs readily. If the menu runs to loaded builds, sauces or anything that sits under a lid and steams, a barrier treatment or an inner greaseproof wrap is doing the real work. A sleeve is a grip and presentation layer; it is not a container, and paperboard should never be described as leakproof.' },
          { t: 'p', html: 'One frequently missed point is that a barrier coating changes the look. Part of what buyers want from kraft is the dry, matte, papery hand-feel. Add a coating and that softens toward something slightly sealed and slightly sheened. If the natural feel is the reason for choosing kraft, it is worth asking to handle a coated sample before committing, and comparing it against <a href="/product/kraft-burger-sleeves/">the wider kraft board options across weights</a>.' },
          {
            t: 'ul',
            items: [
              'Oil shadowing reads as tonal deepening rather than an obvious stain',
              'Uncoated kraft absorbs faster than coated white board',
              'A barrier coating reduces absorption but alters the natural matte hand-feel',
              'Fingerprints and handling marks are largely invisible',
              'Flour and light dust do not show against a warm brown ground',
            ],
          },
        ],
      },
      {
        heading: 'Designing A Mark That Works On Brown',
        blocks: [
          { t: 'p', html: 'Most successful kraft artwork is deliberately simple. A single-colour logo, a line-drawn illustration, a stamped-looking mark. That is partly a stylistic convention and partly a technical response to what the board can hold.' },
          {
            t: 'ol',
            items: [
              'Reduce the palette to one or two inks before beginning layout',
              'Convert any gradient to a flat colour or a halftone pattern',
              'Increase stroke weights, because thin lines lose definition on absorbent fibre',
              'Test the logo in both solid ink and reversed-out white to see which holds better',
              'Set a minimum type size larger than you would use on coated white',
              'Approve a printed sample on the actual kraft board rather than a screen proof',
            ],
          },
          { t: 'p', html: 'Reversing artwork out to leave bare board is a particularly effective kraft technique. Instead of printing the mark, you print the area around it in a solid ink and let the brown show through as the logo. It costs one colour, holds crisp edges, and looks intentional rather than economical. Operators taking that approach usually end up looking at <a href="/product/minimal-design-burger-sleeves/">pared-back layouts that use fewer inks</a> across the rest of the packaging set too.' },
        ],
      },
      {
        heading: 'Service Settings Suited To Kraft',
        blocks: [
          { t: 'p', html: 'Brown board reads as informal, handmade and unfussy. That signals well in farmers-market stalls, independent burger bars, brewery kitchens, delis and any menu positioning itself around provenance rather than polish. It reads less well for a franchise operation that needs exact colour reproduction across hundreds of sites.' },
          { t: 'p', html: 'It is also forgiving in messy environments. A market stall in wind and dust, a festival pitch, a kitchen where sleeves are assembled next to a fryer — kraft absorbs these conditions visually in a way that bright white does not. Fewer sleeves get discarded for looking marked before they are even used.' },
          { t: 'p', html: 'Where a brand needs both the natural look and reliable colour reproduction, one common route is kraft for everyday service and a light board for campaign runs where photography or an exact palette matters. Comparing it directly against <a href="/product/white-burger-sleeves/">a bright ground that reproduces colour predictably</a> makes the trade-off concrete rather than theoretical.' },
        ],
      },
      {
        heading: 'Specifying Kraft Brown Sleeves',
        blocks: [
          { t: 'p', html: 'Kraft is sold in a range of shades and weights, and "kraft" alone is not a specification. Ask what base shade the board runs at, whether it is virgin or recycled fibre, what caliper is available, and whether a barrier option exists at your run size.' },
          { t: 'p', html: 'Set expectations on shade consistency in advance. If a reorder in six months needs to sit beside current stock without an obvious difference, say so at quotation and ask whether the same board can be reserved or matched. Batch variation in unbleached board is normal rather than a defect, so it is better handled as an expectation than as a complaint.' },
          { t: 'p', html: 'Recycled content is worth asking about separately rather than assuming it. Brown appearance and recycled fibre are two different things, and a board can be one without the other. Any disposal or recycling claim should be checked against the finished construction and local facilities rather than assumed from the colour.' },
        ],
      },
      {
        heading: 'Brown Rarely Arrives On The Counter Alone',
        blocks: [
          { t: 'p', html: 'A kraft sleeve is almost never the only brown item in the handover. It sits with a bag, a napkin, sometimes a cup carrier, and those items were probably bought from different suppliers at different times.' },
          { t: 'p', html: 'Because unbleached board carries its colour in the fibre rather than in a printed layer, the shades drift apart more visibly than white items do. One supplier runs a redder brown, another a greyer one, and the difference is obvious the moment the two are held together — far more obvious than the same variation would be on a printed surface.' },
          { t: 'p', html: 'Printing does not rescue this either. Ink laid on brown board takes a tint from whatever is underneath it, so the same artwork run on two slightly different browns comes back as two slightly different results, and the mismatch reads as a printing fault rather than a board one.' },
          { t: 'p', html: 'The fix is ordering sequence rather than specification. Pick whichever kraft item you buy in the largest volume, keep a piece of it, and match everything else to that physical reference. Counters built around a warm paper look — <a href="/product/cafe-burger-sleeves/">a hot food line running inside a coffee business</a> is the common case — usually already have a bag or cup sleeve that sets the shade before the burger packaging is chosen at all.' },
        ],
      },
    ],
    faqs: [
      { q: 'Why do my brand colours look different on kraft sleeves?', a: 'The brown fibre sits under every printed ink and acts as a warm filter. Blues shift green, reds shift earthy, and pale tints largely disappear because they lack the density to cover the substrate. Artwork designed on white and moved to kraft rarely reproduces as expected, so colours should be judged on a printed kraft sample.' },
      { q: 'Can I print full-colour photographs on kraft board?', a: 'It is possible but rarely satisfactory. Photographic images need a bright substrate to hold tonal range, and on brown fibre highlights collapse and the whole image muddies. If photography is central to the design, a light coated board is the practical choice. Kraft suits solid shapes and one or two strong inks.' },
      { q: 'Does kraft hide grease better than white?', a: 'Considerably better. Oil darkens the fibre on any paperboard, but on an already warm brown ground the result reads as a slight deepening in tone rather than a defined stain. It is more visible than on black board and much less visible than on white.' },
      { q: 'Is kraft board the same as recycled board?', a: 'No. Kraft describes an unbleached pulping process and the brown appearance that results; recycled describes where the fibre came from. A kraft board may be virgin fibre, recycled fibre, or a blend. If recycled content matters to you, ask for it specifically rather than inferring it from the colour.' },
      { q: 'Will the brown shade be identical on every order?', a: 'Unbleached board varies slightly between production batches, and specks and tonal shifts are normal in the material. Most buyers read this as character. If close consistency matters, retain an approved sample, mention the requirement at quotation, and ask whether the same board specification can be maintained across reorders.' },
      { q: 'What is the most reliable way to print a logo on kraft?', a: 'Solid black, opaque white or a single strong spot colour all hold well. Reversing the mark out — printing the surrounding area and letting the bare brown form the logo — is particularly effective, keeps edges crisp and uses only one ink. Avoid thin strokes and small light-weight type.' },
      { q: 'Does a grease barrier change how kraft feels?', a: 'Yes, and this catches buyers out. Much of kraft\'s appeal is a dry, matte, papery hand-feel, and a barrier coating moves that toward a slightly sealed, slightly sheened surface. Ask to handle a coated sample before ordering if the natural feel is the reason you chose kraft.' },
      { q: 'Should kraft sleeves be used with an inner wrap?', a: 'For juicy, sauced or steaming builds, yes. Uncoated kraft absorbs readily, and the sleeve is a grip and presentation layer rather than a container. A greaseproof inner wrap does the barrier work and lets the sleeve stay presentable through the meal.' },
      { q: 'What service settings suit kraft brown sleeves?', a: 'Independent burger bars, market stalls, brewery kitchens, delis and menus positioned around provenance rather than polish. It is also forgiving in dusty or messy environments where a white sleeve would show marks before it reached a customer.' },
      { q: 'Does kraft work for franchise operations?', a: 'It can, but batch shade variation makes exact colour governance harder across many sites. Franchises with strict palette rules often use a light board where reproduction has to be tightly controlled, and reserve kraft for specific menu lines or seasonal items.' },
      { q: 'What board weights are available in kraft?', a: 'Kraft is produced across a range of calipers, and what is available depends on the run size and the supplier. Rather than assuming a figure, give the finished burger dimensions and the handling conditions at quotation, and ask which weights can be offered for that specification.' },
      { q: 'Are kraft sleeves compostable?', a: 'That should not be assumed. Compostability depends on the specific board, any coatings, the inks used, and whether an accepting facility exists locally. Uncoated plain kraft and a coated printed kraft sleeve behave very differently. Ask for the finished construction to be confirmed rather than relying on the material name.' },
    ],
  },

  // ----------------------------------------------------------------- GLOSS
  'TBS-033': {
    sections: [
      {
        heading: 'A Gloss Coat Is Protection Before It Is Decoration',
        blocks: [
          { t: 'p', html: 'Gloss on a burger sleeve is usually described as a look. Functionally, it is a thin sealed film sitting over the printed ink, and what it mostly does is stop things reaching that ink. A smear of sauce on an uncoated printed surface soaks in and stays. The same smear on a gloss face sits on top and wipes off.' },
          { t: 'p', html: 'That sealing has a second effect that is easy to see side by side. Ink on an absorbent surface sinks slightly and dries lighter. Sealed under gloss, the same ink holds its density, so colours look deeper and blacks look blacker. Nothing has changed about the ink; the surface has stopped it dulling.' },
          { t: 'p', html: 'Gloss also resists light abrasion better than a bare printed surface. Sleeves stacked in a carton and dragged out one at a time rub against each other constantly, and a sealed face survives that better than raw printed board. On dark artwork especially, this is the difference between stock that stays presentable through a case and stock that arrives at the counter looking tired.' },
          {
            t: 'table',
            caption: 'What a gloss coating changes',
            headers: ['Property', 'Uncoated printed face', 'Gloss coated face'],
            rows: [
              ['Colour density', 'Slightly lighter, ink sinks in', 'Holds close to the proof'],
              ['Sauce and smear', 'Absorbs and marks', 'Sits on the surface, wipeable'],
              ['Light abrasion', 'Scuffs against stacked stock', 'More resistant'],
              ['Fingerprints', 'Rarely visible', 'Visible from warm hands'],
              ['Reflection', 'None', 'Noticeable under downlights'],
              ['Hand-feel', 'Dry, papery', 'Smooth, slightly slick'],
            ],
          },
        ],
      },
      {
        heading: 'The Lighting Problem Nobody Tests For',
        blocks: [
          { t: 'p', html: 'Gloss reflects, and burger counters are lit from above with hard downlights and heat lamps. A sleeve approved flat on a desk under diffuse office light can behave very differently sitting under a pass lamp, where a bright band of reflection can fall directly across the part of the artwork you most wanted read.' },
          { t: 'p', html: 'The same issue affects photography. Customer photos and delivery-app imagery are usually taken from above under whatever light is available, and a gloss face will bounce a hotspot back at the camera. Businesses that rely on customers photographing their food sometimes find a lower-sheen surface performs better commercially even though it looks less impressive in the hand.' },
          { t: 'p', html: 'A practical middle route is spot gloss over a matte base: the sleeve stays low-glare overall, with gloss applied only to a logo or a shape. That gives the tactile contrast without turning the whole face into a mirror. Operators weighing this up usually want to compare it against <a href="/product/matte-finish-burger-sleeves/">a non-reflective face that stays readable under hard lighting</a> before deciding.' },
          {
            t: 'ol',
            items: [
              'Take the printed sample into the actual service area, not a meeting room',
              'Hold it under the pass lamp at the angle a customer would see it',
              'Photograph it from directly above with a phone under the same light',
              'Handle it with warm hands for a minute and look for prints',
              'Only then decide between full gloss, spot gloss and matte',
            ],
          },
        ],
      },
      {
        heading: 'Where Gloss Earns Its Place',
        blocks: [
          { t: 'p', html: 'Colour-led artwork benefits most. If the design carries photography, saturated brand colours or large areas of flat colour, gloss keeps the printed result close to what was approved. On text-led or single-ink designs the benefit is far smaller and the reflection cost stays the same.' },
          { t: 'p', html: 'Sauce-heavy menus are the other clear case. Anywhere a sleeve is likely to receive a mark during assembly or eating, a wipeable face keeps the packaging presentable rather than recording every contact. That is worth more in dine-in and counter service, where the sleeve sits in front of a customer for the length of a meal, than in a delivery bag nobody sees.' },
          { t: 'p', html: 'Gloss pairs particularly well with bright board, because a coated white surface already reproduces colour accurately and the gloss layer preserves that accuracy through handling. If maximum colour fidelity is the goal, <a href="/product/full-color-burger-sleeves/">edge-to-edge process colour on a bright ground</a> is the combination usually specified.' },
        ],
      },
      {
        heading: 'What To Confirm Before Ordering',
        blocks: [
          { t: 'p', html: 'Gloss is achieved several ways and the differences matter. A gloss varnish is a thin coating applied inline on press. A UV coating is cured harder and shinier. A gloss laminate is a film bonded to the board, which is the most durable and the most likely to complicate fibre recycling. These are not interchangeable, and a quotation that just says "gloss" has not answered the question. The same question applies across <a href="/product-category/burger-sleeves-styles/">the other surface treatments offered in this range</a>, since each is quoted differently.' },
          { t: 'p', html: 'Ask which is being offered, whether it covers the full face or only one side, and how it interacts with any barrier treatment. A coating applied for appearance is not the same as one applied to slow grease migration, and having one does not mean you have the other.' },
          { t: 'p', html: 'Recycling should be checked against the finished construction rather than the board alone. Laminated faces in particular can affect fibre recovery, and local facilities vary, so treat disposal as something to verify for your specific build and location.' },
        ],
      },
      {
        heading: 'Gloss Costs Most On A Short Run',
        blocks: [
          { t: 'p', html: 'Coating is a separate operation, and on a small quantity that setup is divided across very few units. The per-sleeve difference between coated and uncoated is at its widest exactly where budgets are usually tightest.' },
          { t: 'p', html: 'This changes the sensible answer depending on what the run is for. On a standing house sleeve reordered several times a year the setup is absorbed and the coating is a reasonable ongoing cost. On a one-off print it is a meaningful share of the bill for a benefit that ends when the stock does.' },
          { t: 'p', html: 'Short campaign work is where the question comes up most often, and the usual compromise is spot coating over a small area rather than the full face — the shine lands where it is looked at and the coated area stays small. Anyone planning <a href="/product/promotional-burger-sleeves/">a print run tied to a campaign end date</a> is better served deciding coverage against the length of the campaign than against the look of a sample.' },
        ],
      },
      {
        heading: 'How A Coated Face Behaves In The Stack',
        blocks: [
          { t: 'p', html: 'Two handling effects show up once coated sleeves reach a working kitchen, and neither is visible in a sample of one.' },
          {
            t: 'ul',
            items: [
              'Coated faces slide against each other more readily than uncoated board, so a tall stack on a shelf can shift where a matte stack would stay put',
              'A sealed surface releases from a stack cleanly, which makes single-handed pickup at the pass slightly faster',
              'Marks that would soak into uncoated fibre sit on top of a coated face and wipe off, provided they are dealt with rather than left',
              'Coated stock resists the humidity of a working kitchen better, so sleeves left out through a long service stay flatter than uncoated ones',
            ],
          },
          { t: 'p', html: 'There is a related effect at the point of handover. A sealed face gives slightly less friction against a palm than dry board does, which is noticeable on a heavy build passed across a counter one-handed. Panel depth and fold structure govern grip far more than the coating does, but if the sleeve is being handed over loaded and warm it is worth putting a coated sample into someone\'s hand before the run is committed.' },
          { t: 'p', html: 'The slipping is worth planning for rather than worrying about. Keeping working quantities in a shallow open case at the pass, instead of a tall stack on an upper shelf, removes the problem entirely and takes no longer to restock.' },
        ],
      },
    ],
    faqs: [
      { q: 'Does a gloss finish make colours look different?', a: 'It makes them look denser and closer to the approved proof. On an uncoated surface ink sinks slightly into the fibre and dries lighter; a gloss coat seals it so the colour holds. The ink has not changed — the surface has stopped it dulling. The effect is most obvious on dark colours and large solid areas.' },
      { q: 'What is the difference between gloss varnish, UV coating and lamination?', a: 'A gloss varnish is a thin coating applied on press. A UV coating is cured harder and gives a higher shine. A gloss laminate is a film bonded to the board, which is the most durable and the most likely to complicate recycling. They are not interchangeable, so ask which one a quotation actually includes.' },
      { q: 'Will a gloss sleeve show fingerprints?', a: 'Yes, more than a matte or uncoated face. Warm hands during a busy service leave visible marks on a sealed shiny surface. If sleeves are handled several times between assembly and handoff, that is worth weighing against the colour benefit.' },
      { q: 'Does gloss reflect too much under counter lighting?', a: 'It can. Hard downlights and heat lamps produce a bright reflection band that may fall directly across the artwork. A sample approved under diffuse office light can behave quite differently at the pass, so test the printed sample in the actual service area at the angle a customer sees it.' },
      { q: 'Can I have gloss on only part of the sleeve?', a: 'Yes. Spot gloss applied over a matte base gives a low-glare sleeve with shine on a logo or a defined shape. It provides tactile and visual contrast without turning the whole face reflective, and on dark stock it can create a tone-on-tone effect with no coloured ink at all.' },
      { q: 'Does a gloss coating protect against grease?', a: 'A coating applied for appearance is not the same as a barrier coating applied to slow oil migration, and having one does not mean you have the other. Gloss helps a surface smear wipe off rather than soak in, but it is not a substitute for a barrier treatment or an inner greaseproof wrap.' },
      { q: 'Is gloss suitable for a text-heavy sleeve?', a: 'The benefit is smaller. Gloss mainly helps colour-led artwork stay dense; a single-ink text design gains little from it while still carrying the reflection and fingerprint trade-offs. Text-led packaging often reads better on a low-sheen surface.' },
      { q: 'Which board does gloss work best on?', a: 'Coated bright board, because it already reproduces colour accurately and the gloss layer preserves that through handling. On kraft or uncoated stock a gloss coat sits over a surface that has already absorbed and softened the ink, so the gain is less pronounced.' },
      { q: 'Does gloss make the sleeve slippery to hold?', a: 'A sealed surface has slightly less grip than dry uncoated board, which is worth considering for large or heavy builds handed over one-handed. In practice the fold structure and panel depth affect grip far more than the coating does, but it is a fair thing to test on a sample.' },
      { q: 'Will gloss stop the sleeve scuffing in the carton?', a: 'It helps. A sealed face resists the light abrasion caused by sleeves rubbing together as they are pulled from a stack, which matters most on dark or heavily printed artwork. It is not a guarantee, and stock should still be stored flat rather than on edge.' },
      { q: 'Can gloss sleeves be recycled?', a: 'It depends on which gloss treatment is used and on local facilities. A light varnish generally interferes less with fibre recovery than a bonded laminate film. Recyclability should be checked against the finished construction and the rules where the packaging is disposed of, not assumed.' },
      { q: 'How do I decide between gloss and matte?', a: 'Judge a printed sample of your own artwork in your own service area under your own lighting, handled with warm hands. Colour-led, sauce-prone, customer-facing service usually favours gloss; hard overhead lighting, heavy handling and photography-driven marketing usually favour matte.' },
    ],
  },
};
