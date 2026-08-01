/**
 * Styles group long-form copy.
 *
 * Each page is written around a problem the others do not have:
 *   TBS-031 Black       — printing ONTO dark stock (underbase, foil, scuff)
 *   TBS-030 White       — colour accuracy on a bright ground, and showing marks
 *   TBS-029 Kraft Brown — ink behaviour on unbleached fibre, brown as a ground
 *   TBS-033 Gloss       — coating as ink protection, reflection under lighting
 *   TBS-034 Die Cut     — dieline engineering, tabs, tolerance, assembly time
 *
 * Section order, table subject and vocabulary differ deliberately per page.
 */

export const styles = {
  // ---------------------------------------------------------------- BLACK
  'TBS-031': {
    sections: [
      {
        heading: 'Why Dark Board Changes Every Print Decision',
        blocks: [
          { t: 'p', html: 'A black sleeve is not a white sleeve with dark ink on it. The board itself is dyed or coated dark before anything is printed, and that single fact reshapes the artwork, the ink order, and the finishing choices available to you. Standard process inks are transparent. Cyan, magenta, yellow and black all rely on a light surface bouncing light back through them. Lay them straight onto black board and they disappear.' },
          { t: 'p', html: 'This is why most black sleeve artwork is built around opaque white. A white underbase is printed first, in the shape of the artwork, and colour is printed on top of that patch. The white acts as a substitute for the missing bright substrate. It adds a print station and it adds cost, and it also sets a floor on how fine your detail can be, because the underbase and the colour layer have to register against each other.' },
          { t: 'p', html: 'Operators who want dark packaging without the underbase expense usually go the other way and print nothing but a single opaque ink. A white logo on black, or a metallic mark, reads cleanly and avoids registration risk entirely. If that suits the brand, it is the cheaper and more reliable route.' },
          {
            t: 'table',
            caption: 'How each print approach behaves on black board',
            headers: ['Approach', 'What happens on dark stock', 'Detail limit', 'Typical use'],
            rows: [
              ['Single opaque white', 'Prints directly, no underbase needed', 'Holds fine line work well', 'Logos, wordmarks, simple icons'],
              ['Opaque white underbase + CMYK', 'Colour sits on a printed white patch', 'Registration between two layers limits very fine detail', 'Photographic panels, multi-colour artwork'],
              ['Metallic or foil', 'Applied as a separate pass, high contrast', 'Depends on the foil block', 'Small premium marks, borders'],
              ['Process inks with no underbase', 'Largely absorbed by the dark ground', 'Not usable for legible artwork', 'Not recommended'],
              ['Spot UV varnish', 'Gloss shape on a matte black ground', 'Shape-based, not fine text', 'Tone-on-tone pattern, subtle branding'],
            ],
          },
        ],
      },
      {
        heading: 'Scuffing, Fingerprints And What Black Shows',
        blocks: [
          { t: 'p', html: 'Dark surfaces hide some things and reveal others. Grease shadowing, the darkened patch that appears when oil wicks into board, is far less visible on black than on white. That is a genuine operational advantage on a menu with juicy builds. Sauce splashes and light handling smears also disappear against a dark ground.' },
          { t: 'p', html: 'What black shows instead is abrasion. When a dyed or coated dark surface is rubbed, the lighter fibre underneath begins to show through as a pale scratch. Stacked sleeves rubbing against each other in a carton, or sleeves dragged across a stainless counter, will pick this up. A matte surface tends to show it slightly less than an uncoated one, and an anti-scuff coating is worth asking about if your sleeves travel or sit in deep stacks.' },
          { t: 'p', html: 'Fingerprints are the other consideration. A high-gloss black surface holds visible prints from warm hands during a busy service. If your staff are assembling at speed and the sleeve is handled several times before it reaches the customer, a low-sheen surface is more forgiving. Teams working through the same trade-off often compare a <a href="/product/matte-finish-burger-sleeves/">low-sheen surface that plays down handling marks</a> before committing to a full run.' },
          {
            t: 'ul',
            items: [
              'Grease shadowing is much less visible on black than on light board',
              'Abrasion shows as pale scratches where fibre is exposed',
              'Warm hands leave visible prints on high-gloss dark surfaces',
              'Dust and flour settle visibly on black in a bakery or prep area',
              'Colour consistency between production batches is harder to judge by eye on dark stock',
            ],
          },
        ],
      },
      {
        heading: 'Preparing Artwork For A Black Sleeve',
        blocks: [
          { t: 'p', html: 'Artwork for dark stock needs decisions made before the file leaves your designer. The most common cause of a disappointing first run is a file built on a white canvas and then dropped onto black at the last moment, with no underbase specified and no thought given to how thin strokes will survive.' },
          {
            t: 'ol',
            items: [
              'Build the artwork on a black background in your design file so contrast is judged honestly',
              'Decide which elements need an opaque white underbase and put them on a separate named layer',
              'Set minimum stroke weights and type sizes higher than you would on white, because dark grounds swallow thin lines',
              'Convert all type to outlines so no font substitution occurs at output',
              'Supply the file as vector artwork wherever possible, with any photographic element at full resolution',
              'Ask for a printed proof on the actual board, not a screen proof, before approving the run',
            ],
          },
          { t: 'p', html: 'That last step matters more on black than on any other stock. A screen renders black as emitted light and the printed result is a dyed fibre surface. They do not look the same. A physical proof on the intended board is the only reliable way to judge whether a white underbase is dense enough and whether your brand colour has landed where you expect.' },
          { t: 'p', html: 'If the artwork is heavy dark coverage printed onto ordinary light board rather than dark board itself, that is a different production job with different risks, and it is worth reading about <a href="/product/black-printed-burger-sleeves/">heavy black ink coverage laid onto light paperboard</a> before you specify which one you actually want.' },
        ],
      },
      {
        heading: 'Where Black Sleeves Fit A Menu',
        blocks: [
          { t: 'p', html: 'Dark packaging tends to appear where the operator wants the food to be the brightest thing in the frame. Against a black sleeve, a toasted brioche crown and a slice of tomato read as vivid. That is why smash-burger counters, late-night menus, gourmet builds and cocktail-bar kitchens reach for it.' },
          { t: 'p', html: 'It also photographs differently. Customer photos taken under warm counter lighting show a dark sleeve as a solid frame rather than a bright rectangle, which keeps attention on the burger. If a share-worthy plate is part of how the business markets itself, this is a practical reason to choose dark board rather than a purely visual one.' },
          { t: 'p', html: 'Black is less suited to menus where the packaging needs to carry a lot of information. Allergen text, ingredient callouts and multi-language labelling all become harder to set legibly on a dark ground, and the underbase cost climbs with every extra printed element. Operators with information-heavy packaging usually find <a href="/product/white-burger-sleeves/">a bright board that carries small text cleanly</a> is the more practical starting point.' },
          {
            t: 'table',
            caption: 'Black sleeve suitability by service type',
            headers: ['Service type', 'Fit', 'Reason'],
            rows: [
              ['Gourmet and smash-burger counters', 'Strong', 'Food colour reads vividly against a dark frame'],
              ['Late-night and bar kitchens', 'Strong', 'Suits low ambient lighting and darker interiors'],
              ['High-grease menus', 'Good', 'Oil shadowing is far less visible than on light board'],
              ['Information-heavy packaging', 'Limited', 'Small text needs an underbase and costs more to print'],
              ['Very high-volume QSR', 'Consider carefully', 'Scuffing shows on stacked and transported stock'],
            ],
          },
        ],
      },
      {
        heading: 'Specifying A Black Sleeve Run',
        blocks: [
          { t: 'p', html: 'Bring four things to a quotation and the conversation moves quickly: the finished burger dimensions including any wrap, whether the dark surface should be matte or gloss, whether artwork needs an opaque white underbase, and roughly how many units you expect to order in a first run and then repeat.' },
          { t: 'p', html: 'Board choice sits underneath all of that. A dyed-through board carries the colour in the fibre, so a cut edge is dark. A coated board carries the colour on the surface only, and every cut edge shows pale. Neither is wrong, but the cut edge is visible on a sleeve, so it is worth deciding deliberately at quotation rather than finding out on delivery.' },
          { t: 'p', html: 'Confirm anti-scuff treatment, ink opacity and edge appearance in writing on the quotation rather than assuming they are included. Availability of specific board types and coatings varies by run size, so treat them as options to confirm rather than fixed features.' },
        ],
      },
    ],
    faqs: [
      { q: 'Why does my logo look washed out on black sleeves?', a: 'Standard process inks are transparent and rely on a light surface underneath to reflect light back through them. On dark board there is nothing to reflect, so colours sink into the background. The fix is an opaque white underbase printed first in the shape of the artwork, with colour printed on top. Alternatively, print a single opaque ink such as white or a metallic, which needs no underbase.' },
      { q: 'What is an opaque white underbase and do I need one?', a: 'It is a layer of dense white ink printed onto the dark board before any colour, acting as a substitute bright surface. You need one for any coloured or photographic artwork. You do not need one if your design is a single opaque ink, such as a white wordmark or a metallic logo. The underbase adds a print pass, so it affects cost and lead time.' },
      { q: 'Do black sleeves hide grease better than white ones?', a: 'They hide grease shadowing considerably better. When oil migrates into paperboard it darkens the fibre, which is obvious on white and near invisible on black. This is a real advantage on juicy or sauce-heavy builds. It does not mean oil is not reaching the board, so an inner wrap is still the sensible barrier for wet items.' },
      { q: 'Will black sleeves scuff during handling?', a: 'Dark surfaces show abrasion more than light ones, because rubbing exposes the paler fibre beneath as a visible pale scratch. Deep stacks, transport and dragging sleeves across counters all cause it. Ask about anti-scuff coating options if your stock travels or sits in tall cartons, and store cases flat rather than on edge.' },
      { q: 'Should I choose matte or gloss on a black sleeve?', a: 'Matte reduces glare and plays down fingerprints, which suits high-touch service. Gloss makes any printed colour look denser and gives a wipeable surface, but it holds visible prints from warm hands and reflects counter lighting. Many operators use a matte base with a spot gloss shape as a tone-on-tone effect, which needs no underbase at all.' },
      { q: 'Is the cut edge of a black sleeve dark or pale?', a: 'It depends on the board. Dyed-through board carries pigment in the fibre, so cut edges stay dark. Surface-coated board shows pale fibre wherever it is cut. Both are used for sleeves, and the difference is visible in the hand, so specify which one you want at quotation rather than after delivery.' },
      { q: 'Can I print small allergen or ingredient text on black sleeves?', a: 'You can, but it needs care. Small text either has to be reversed out as bare board, which limits you to the sleeve colour, or printed in an opaque ink with enough density to stay legible. Fine text over an underbase is prone to registration softening. If your packaging carries a lot of small print, a light board is easier to work with.' },
      { q: 'What minimum text size works on dark board?', a: 'There is no single figure, because it depends on the typeface, the ink and the board surface. As a rule, set type larger and heavier than you would on white, avoid hairline strokes, and avoid light-weight serif faces at small sizes. Ask for a printed proof on the actual board and read it at arm\'s length before approving.' },
      { q: 'Does a black sleeve need a different inner wrap?', a: 'The inner wrap decision is driven by the food, not the sleeve colour. Juicy or sauced builds benefit from greaseproof paper regardless of what the sleeve looks like. What changes with black board is that a failing wrap is less obvious to staff, because the oil mark that would warn you on white board is hidden.' },
      { q: 'Will the black look identical between reorders?', a: 'Dark stock is harder to match by eye between production batches than white board, and small shifts in dye or coating can be perceptible when old and new stock sit side by side. If exact consistency matters, keep a retained sample from the approved run and reference it on every reorder, and ask whether the same board source can be used.' },
      { q: 'Can foil or metallic printing be used on black sleeves?', a: 'Metallic effects give very high contrast against dark board and are a common choice where an underbase would be expensive. They are applied as a separate pass, so they suit compact marks such as a logo or a border rather than large areas. Availability and cost depend on the run size, so confirm both during quotation.' },
      { q: 'Are black burger sleeves harder to recycle?', a: 'Paperboard recycling depends on local facilities and on what has been applied to the board, including dyes, coatings, laminates and foils. Heavy coatings and foil in particular can complicate fibre recovery. No general recyclability claim should be made for a printed and coated sleeve without checking the specific construction and the rules where the packaging is disposed of.' },
    ],
  },

  // ---------------------------------------------------------------- WHITE
  'TBS-030': {
    sections: [
      {
        heading: 'Bright Board As A Colour Reference',
        blocks: [
          { t: 'p', html: 'White sleeves exist because print needs a known starting point. Every colour a press lays down is modified by whatever sits underneath it, and a bright white board is the closest thing to a neutral reference that paperboard offers. A brand red printed on white lands close to the swatch. The same red printed on brown fibre shifts warm and dull.' },
          { t: 'p', html: 'That predictability is the whole argument for white. If the packaging has to match a colour used on signage, uniforms, cups and a shopfront, a bright ground is what makes the match achievable. It also means photographic artwork behaves: skin tones, food photography and gradients all need a light substrate to look like anything other than mud.' },
          { t: 'p', html: 'Brightness itself varies between boards. Coated white board reflects more light and holds ink on the surface, giving denser colour. Uncoated white absorbs more ink, softening edges and lightening the printed result. Neither is better in the abstract, but they are not interchangeable, and a colour approved on one will not reproduce identically on the other.' },
          {
            t: 'table',
            caption: 'How the same artwork behaves across board surfaces',
            headers: ['Board surface', 'Colour density', 'Edge sharpness', 'Best suited to'],
            rows: [
              ['Coated white', 'High, close to the swatch', 'Sharp', 'Photography, brand colour matching, fine detail'],
              ['Uncoated white', 'Softer, slightly lighter', 'Slightly absorbed', 'Text-led designs, matte natural look'],
              ['Recycled white', 'Slightly muted, can vary batch to batch', 'Moderate', 'Simple marks, limited colour work'],
              ['Kraft brown', 'Shifted warm, pale tints lost', 'Moderate', 'Single-colour marks, natural styling'],
            ],
          },
        ],
      },
      {
        heading: 'The Cost Of A Clean Surface',
        blocks: [
          { t: 'p', html: 'Everything that makes white good for printing makes it unforgiving in service. A white sleeve is a blank field that records every mark it receives, and in a burger operation there are several.' },
          { t: 'p', html: 'Grease shadowing is the main one. When oil from a bun or a patty migrates into uncoated fibre it darkens the board into a translucent patch. On a dark sleeve nobody notices. On white it reads as a stain, even though nothing has actually failed. This is a presentation problem rather than a hygiene one, but customers judge it as the latter.' },
          { t: 'p', html: 'Handling marks follow the same pattern. Flour dust from a prep bench, a smear of sauce from a gloved thumb, the grey mark left where a sleeve was dragged across a stainless surface — all of these are visible on white and invisible on brown or black. Operators running high-grease menus on white board almost always pair it with <a href="/product/grease-resistant-burger-sleeves/">board treated to slow oil migration</a> plus an inner greaseproof wrap.' },
          {
            t: 'ul',
            items: [
              'Oil migration shows as a darkened translucent patch, most visible at the base panel',
              'Sauce and condiment contact marks immediately',
              'Dust and flour settle visibly during prep',
              'Grey abrasion marks appear from contact with stainless surfaces',
              'Stacked stock picks up marks from the sleeve above and below it',
            ],
          },
        ],
      },
      {
        heading: 'Coating Decisions On White Board',
        blocks: [
          { t: 'p', html: 'A coating on white board does two separate jobs, and it is worth being clear about which one you are buying. A print coating improves how ink sits on the surface, giving denser colour and sharper edges. A barrier coating slows liquid and oil moving into the fibre. They are not the same treatment and one does not guarantee the other.' },
          { t: 'p', html: 'Because white shows grease so readily, a barrier treatment does more visible good here than on any other stock. It will not make a sleeve leakproof, and no paperboard sleeve should be described that way, but it can move the point at which a visible shadow appears from ten minutes to well past the time a customer takes to eat.' },
          { t: 'p', html: 'Surface finish then sits on top of that decision. Gloss deepens printed colour and gives a wipeable face; matte reduces glare and hides light scuffing. On white specifically, gloss has a secondary benefit, because a sealed surface resists absorbing a smear rather than soaking it in. If your design is colour-led rather than text-led, <a href="/product/gloss-finish-burger-sleeves/">a sealed high-shine face that deepens printed colour</a> is usually the more suitable pairing.' },
        ],
      },
      {
        heading: 'Menus That Suit A White Sleeve',
        blocks: [
          { t: 'p', html: 'White works hardest where the packaging has a job beyond looking good. Chains printing allergen information, franchise operators reproducing an exact brand palette, and businesses running photographic campaign artwork all need a bright predictable ground.' },
          { t: 'p', html: 'It also suits menus where the food is pale. A chicken burger, a fish sandwich or a plant-based patty photographed against dark board can look flat. Against white the contrast falls the other way and the food reads cleanly. This is the opposite of the argument used for dark sleeves, and it is why size and colour decisions are worth making per menu item rather than per brand.' },
          { t: 'p', html: 'Where white struggles is unattended outdoor service and long delivery runs, because there is more time for marks to accumulate before anyone sees the packaging. Operators in those settings often accept a slightly less accurate colour match in exchange for a surface that stays presentable, and look at <a href="/product-category/burger-sleeves-styles/">the range of surface options across the sleeve styles</a> before locking a decision.' },
          {
            t: 'ol',
            items: [
              'Confirm whether your brand colour needs to match an existing printed reference',
              'Check whether the packaging must carry small text such as allergen information',
              'Assess how greasy the menu items actually are in service, not in theory',
              'Decide whether a barrier treatment is needed to keep the surface presentable',
              'Choose the surface finish last, once print and barrier needs are settled',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Why do brand colours look more accurate on white sleeves?', a: 'Printing inks are largely transparent, so the board underneath alters the final colour. A bright white ground reflects light evenly back through the ink, which lets a printed colour land close to the intended reference. On brown or coloured board the substrate tints everything printed on it, shifting hues and flattening pale tones.' },
      { q: 'Do white sleeves show grease more than other colours?', a: 'Yes, noticeably. Oil migrating into paperboard darkens the fibre into a translucent patch that is obvious against white and effectively invisible on brown or black. The oil behaves the same way on every board; white simply reports it. A barrier treatment plus an inner greaseproof wrap is the usual answer.' },
      { q: 'Is coated or uncoated white better for my artwork?', a: 'Coated white holds ink on the surface, giving denser colour and sharper edges, which suits photography and fine detail. Uncoated white absorbs more ink, softening the result and giving a natural matte look that suits text-led designs. A colour approved on one will not reproduce identically on the other, so decide before proofing.' },
      { q: 'Will a coating stop grease coming through?', a: 'A barrier coating slows oil migration; it does not stop it indefinitely and does not make a sleeve leakproof. It can delay a visible shadow appearing well past normal eating time, which is usually what matters in practice. For wet or heavily sauced builds an inner greaseproof wrap remains the primary defence.' },
      { q: 'Are print coatings and barrier coatings the same thing?', a: 'No. A print coating improves how ink sits on the surface for colour density and sharpness. A barrier coating is applied to slow liquid and oil moving into the fibre. A board can have one without the other, so ask which treatments are included rather than assuming a coated board resists grease.' },
      { q: 'Can I print photographic images on white burger sleeves?', a: 'Yes, and white is the practical choice for it. Photographic artwork needs a bright substrate to hold tonal range and skin or food tones. Supply images at full resolution with adequate bleed, and expect coated board to reproduce them more faithfully than uncoated.' },
      { q: 'Do white sleeves suit pale foods like chicken or fish burgers?', a: 'They often work well. A pale patty against dark board can look flat, whereas a white ground lets the bun colour and toppings define the shape. This is one reason colour choices are worth making per menu item rather than applying a single decision across a whole range.' },
      { q: 'How do I keep white sleeves clean in storage?', a: 'Keep cases sealed until needed, store them away from prep benches where flour and oil become airborne, stack flat rather than on edge, and avoid resting open stacks on stainless surfaces that transfer grey marks. Rotating stock so older cases are used first also prevents long exposure in an open box.' },
      { q: 'Will white sleeves stay the same shade between reorders?', a: 'Board brightness can vary slightly between production batches and between suppliers, particularly where recycled content is involved. If exact consistency matters, retain an approved sample and reference it on every reorder, and confirm at quotation whether the same board specification can be maintained.' },
      { q: 'Is white board a good base for small allergen text?', a: 'It is the easiest ground to work with for small text, because black or dark ink on a bright surface gives maximum contrast without any underbase. This is one of the practical reasons information-heavy packaging tends to use light board rather than dark or brown.' },
      { q: 'Does bleached white board affect food contact suitability?', a: 'Food-contact suitability depends on the specific board, coatings and inks used and on whether the sleeve touches food directly or sits outside a wrap. It is not something the colour alone determines. Ask your supplier to confirm the intended contact type in writing for the exact construction you are ordering.' },
      { q: 'Can white sleeves be recycled?', a: 'Paperboard recycling depends on local collection rules and on what has been applied to the board. Barrier coatings, laminates and heavy ink coverage can all complicate fibre recovery. No blanket recyclability claim should be made for a coated printed sleeve without checking the specific build and local facilities.' },
      { q: 'What is the most common mistake with white sleeves?', a: 'Choosing white for its clean appearance on a high-grease menu without specifying any barrier treatment or inner wrap. The sleeve looks excellent in the box and marks within minutes of service. Deciding the barrier question first, and the colour second, avoids it.' },
    ],
  },
};
