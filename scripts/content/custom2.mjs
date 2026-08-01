/**
 * Customized group, part two.
 *   TBS-018 Logo Printed — placement, clear space, legibility in the hand
 *   TBS-019 Full Color   — CMYK reproduction, coverage, conversion, proofing
 *   TBS-022 Minimal      — information priority and restraint as a strategy
 */

export const custom2 = {
  // --------------------------------------------------------- LOGO PRINTED
  'TBS-018': {
    sections: [
      {
        heading: 'Choosing Which Panel Carries The Mark',
        blocks: [
          { t: 'p', html: 'A sleeve has several faces and they are not equally useful. One panel faces the customer at handover, one disappears under a hand, one sits against a tray, and the rest are seen only in passing. Putting a logo in the wrong one is the most common and least noticed waste in printed packaging.' },
          { t: 'p', html: 'The panel that earns the mark is the one facing outward when the sleeve is handed over, because that is the single moment the packaging has full attention. Everything after that is glances. If the logo has to be somewhere, it should be there.' },
          { t: 'p', html: 'Working out which panel that is requires assembling a real sleeve and handing it to someone rather than reasoning from a flat drawing. The panel that faces forward on a dieline is frequently not the panel that faces forward in a hand.' },
          {
            t: 'table',
            caption: 'Panel selection and clearance for a printed mark',
            headers: ['Panel', 'Visibility in use', 'Suitable for a logo?'],
            rows: [
              ['Front face at handover', 'Highest — full attention once', 'Yes, primary position'],
              ['Upper side panel', 'Good while eating', 'Yes, secondary mark'],
              ['Grip zone', 'Hidden by a hand throughout', 'No'],
              ['Base panel', 'Against tray, marks in service', 'No'],
              ['Area across a fold', 'Distorted once assembled', 'No — keep marks inside one flat face'],
              ['Within a few millimetres of a cut', 'At risk from cutting tolerance', 'No — keep inside a safety margin'],
            ],
          },
        ],
      },
      {
        heading: 'Clear Space Is Part Of The Logo',
        blocks: [
          { t: 'p', html: 'Most brand guidelines define a minimum clear space around the mark, and most packaging briefs quietly ignore it because the panel is small and something else needs to fit. The result is a logo that technically appears and does not read.' },
          { t: 'p', html: 'Clear space matters more on a sleeve than on a sign, because the surface is curved in use, held at an angle and frequently partly obscured. A mark with generous space around it survives those conditions; a crowded one loses its outline against whatever sits next to it.' },
          { t: 'p', html: 'If the panel cannot hold the mark at a readable size with proper clearance, the answer is a smaller or simplified version of the logo rather than a squeezed full one. Most identities have a compact variant for exactly this situation, and a run of small-format packaging is a reasonable moment to create one if yours does not.' },
        ],
      },
      {
        heading: 'How Small A Mark Can Go',
        blocks: [
          { t: 'p', html: 'There is no universal minimum size, because it depends on the mark, the ink, the board and the printing method. A solid geometric symbol survives reduction far better than a mark with fine strokes, a tagline or an outlined typeface.' },
          { t: 'p', html: 'What can be said generally is that thin lines fail first. Hairline strokes fill in on absorbent board and break up on textured stock, so a logo that relies on fine detail for its character will lose that character at packaging scale.' },
          {
            t: 'ol',
            items: [
              'Print the logo at the intended final size on plain paper first',
              'Look at it at arm\'s length rather than on screen or magnified',
              'Check whether any stroke has filled in or dropped out',
              'Repeat on the actual board, which behaves differently from office paper',
              'If detail is lost, use a simplified variant rather than enlarging into the clear space',
            ],
          },
          { t: 'p', html: 'Board texture changes the answer more than most people expect. An uncoated or unbleached surface absorbs ink and softens edges, so a mark that reads cleanly on coated white may need to be larger or bolder elsewhere. Testing on <a href="/product/kraft-brown-burger-sleeves/">unbleached brown board, where ink behaviour differs most</a> is a useful worst case if your range includes it.' },
        ],
      },
      {
        heading: 'One Colour, Two Colours, Or Reversed',
        blocks: [
          { t: 'p', html: 'A logo can be printed as solid ink, as two colours, or reversed out so the board itself forms the mark. Each behaves differently and the cheapest is not always the weakest.' },
          { t: 'p', html: 'Solid single-colour printing is the most reliable at small size, because there is no registration between layers to go wrong. Two-colour work introduces a second pass and therefore a tolerance, which is visible if the two elements touch. Reversing the mark out costs one ink, holds a crisp edge and often looks more deliberate than a printed logo does.' },
          { t: 'p', html: 'Where the artwork is a single dark mark on light board, the production considerations are narrow and well understood, and that is a different job from full-coverage colour work. It is worth reading how <a href="/product/black-printed-burger-sleeves/">single-colour dark ink work behaves on light stock</a> before deciding whether a second colour genuinely adds anything.' },
          {
            t: 'ul',
            items: [
              'Single solid ink is the most reliable at small sizes',
              'Two colours introduce registration tolerance where elements meet',
              'Reversing the mark out uses one ink and holds a crisp edge',
              'A full-colour logo on a small panel rarely reproduces as intended',
              'Contrast against the board matters more than the number of inks',
            ],
          },
        ],
      },
      {
        heading: 'Keeping The Mark Away From The Structure',
        blocks: [
          { t: 'p', html: 'Sleeves fold, and folds run through artwork. A logo positioned across a crease will crack along that line as the sleeve is assembled, and on dark or heavily inked work the pale fibre showing through is obvious.' },
          { t: 'p', html: 'Cut lines carry a similar risk from a different cause. Cutting tolerance means the trim position moves slightly between sheets, so anything close to an edge will sit at a different distance from that edge on different sleeves. On a logo, that reads as carelessness even though nothing has failed.' },
          { t: 'p', html: 'Tabs and locks add a third constraint, because an area that gets tucked inside is invisible once assembled. Keeping the mark inside one flat, uncut, untucked area sounds restrictive and generally leaves more usable space than expected once the unusable areas are marked out honestly.' },
          { t: 'p', html: 'Doing that marking-out before design starts saves a proofing round. It also makes the brief clearer for whoever draws the artwork, which tends to matter more when the sleeve is one item in a wider identity handled by <a href="/product/branded-burger-sleeves/">a packaging set that has to stay consistent across items</a>.' },
        ],
      },
      {
        heading: 'Contrast Against The Board You Chose',
        blocks: [
          { t: 'p', html: 'Legibility comes from contrast between the mark and what sits behind it, not from the size of the mark. A mid-tone logo on a kraft sleeve can be larger than a black one on white board and still be harder to pick out at a glance.' },
          { t: 'p', html: 'This catches out brands whose palette was developed for screen or for signage, where the background is controlled. Packaging boards vary in tone, and a brand colour that reads strongly against white may sit close enough to unbleached brown that the mark loses its edge.' },
          { t: 'p', html: 'The practical check is to view a printed sample from a normal distance in the light the packaging will be seen in, and to squint at it. Squinting removes detail and leaves tonal separation, which is precisely what determines whether a mark registers in a glance.' },
          { t: 'p', html: 'Where contrast is marginal, the options are a different ink, a reversed treatment, or a small printed field behind the mark to give it a consistent background regardless of board. The last of those adds ink coverage but removes the variable entirely, which can be worth it across a range that runs several stocks.' },
        ],
      },
      {
        heading: 'Checking The Mark In Use, Not On A Bench',
        blocks: [
          { t: 'p', html: 'A logo approved flat on a desk is being judged in conditions it will never meet again. On a sleeve it is curved, held at an angle, partly covered, seen under warm directional light and looked at for a second or two at most.' },
          { t: 'p', html: 'Reproducing those conditions takes a few minutes. Load a real burger into a sample, hand it to someone across a counter at the height your service actually uses, and watch whether the mark registers before they look away. A counter, a delivery bag and a market stall each change what the mark has to survive, so run the check against <a href="/product-category/special-sleeves-uses/">the serving situation you are actually packing for</a>.' },
          { t: 'p', html: 'If it does not, the answer is usually contrast or clearance rather than size. Enlarging a mark into space it does not have makes it more cramped rather than more legible, which is the opposite of the intended effect.' },
        ],
      },
    ],
    faqs: [
      { q: 'Which panel should the logo go on?', a: 'The one facing outward when the sleeve is handed over, because that is the single moment the packaging has full attention. Assemble a real sleeve and hand it to someone to find out which panel that is — the face that leads on a dieline is often not the one that faces forward in a hand.' },
      { q: 'Why should nothing be printed in the grip zone?', a: 'Because a hand covers it for the entire meal. Anything printed there is paid for and never seen. Marking that zone as deliberately empty before design starts removes a recurring argument and frees the designer to use the space that is actually visible.' },
      { q: 'How much clear space does a logo need on a sleeve?', a: 'At least whatever your brand guidelines specify, and arguably more. A sleeve is held at an angle, curved in use and often partly obscured, so a mark with generous space survives those conditions while a crowded one loses its outline against neighbouring elements.' },
      { q: 'What if the panel is too small for my logo?', a: 'Use a smaller or simplified version rather than squeezing the full one. Most identities have a compact variant for small applications — the symbol without the wordmark, or the wordmark without the strapline. A packaging run is a reasonable moment to create one if yours does not.' },
      { q: 'Is there a minimum size for a printed logo?', a: 'Not a universal one, because it depends on the mark, ink, board and print method. Thin strokes fail first: hairlines fill in on absorbent board and break up on textured stock. Print at final size, look at arm\'s length, and check whether any stroke has filled or dropped out.' },
      { q: 'Does board texture affect logo reproduction?', a: 'Considerably. Uncoated and unbleached surfaces absorb ink and soften edges, so a mark that reads cleanly on coated white may need to be larger or bolder on brown or textured board. Test on the roughest stock in your range as a worst case.' },
      { q: 'Is one-colour or two-colour printing better for a logo?', a: 'Single solid ink is the most reliable at small sizes because there is no registration between layers to drift. Two colours introduce a tolerance that shows wherever the elements touch. If the mark works in one colour, that is usually the stronger choice as well as the cheaper one.' },
      { q: 'What does reversing the logo out mean?', a: 'Printing the area around the mark so the bare board forms the logo itself. It uses one ink, holds a crisp edge because there is no fine ink detail to spread, and frequently looks more deliberate than a printed mark — particularly on kraft or coloured stock.' },
      { q: 'Can a logo sit across a fold?', a: 'It should not. Folds crack along the crease as the sleeve is assembled, and on dark or heavily inked artwork the pale fibre showing through is obvious. Keep the mark inside one flat face rather than spanning a crease.' },
      { q: 'How far from a cut edge should the logo sit?', a: 'Inside an agreed safety margin, which your supplier can confirm for their tooling. Cutting position moves slightly between sheets, so anything close to an edge sits at a different distance on different sleeves — visible as inconsistency even though nothing has failed.' },
      { q: 'What about areas that get tucked in?', a: 'They are invisible once assembled, so nothing that needs reading should be placed there. Mapping the tucked, folded and cut areas before design starts usually leaves more usable space than expected, because the unusable regions get identified honestly rather than discovered at proofing.' },
      { q: 'Do I need a printed proof for a simple logo?', a: 'It is still worth one. A flat visual cannot show how the mark sits once the sleeve is folded, how the board affects ink density, or whether a fine stroke has filled in. For a single-colour mark the proof is quick, and it catches the faults that are expensive after a run.' },
    ],
  },

  // ----------------------------------------------------------- FULL COLOR
  'TBS-019': {
    sections: [
      {
        heading: 'What Four-Colour Printing Assumes',
        blocks: [
          { t: 'p', html: 'Process printing builds every colour from four transparent inks laid over one another. That works because the substrate underneath reflects light back through them, which means full-colour artwork carries a hidden assumption: the board is light and reasonably uniform.' },
          { t: 'p', html: 'On coated white board that assumption holds and colours land close to what was approved. On brown, textured or recycled stock it does not. The substrate tints everything, pale tones lose definition, and photographic areas flatten into something muddier than the file suggested.' },
          { t: 'p', html: 'This is why full-colour work and board choice are one decision rather than two. Choosing a natural-looking board and then commissioning photographic artwork produces a result that disappoints both, and the disappointment usually gets blamed on the printing rather than on the pairing. A bright stock is the ground process printing is designed around, which is why <a href="/product/white-printed-burger-sleeves/">artwork printed onto a white base</a> is the usual pairing for photographic work.' },
        ],
      },
      {
        heading: 'Preparing Artwork That Survives Production',
        blocks: [
          { t: 'p', html: 'Most full-colour problems originate in the file rather than on the press. Artwork built for screen, converted late and supplied without bleed will produce a run that looks wrong even when the printing is technically correct.' },
          {
            t: 'table',
            caption: 'Artwork preparation for process colour work',
            headers: ['Item', 'What to supply', 'Why it matters'],
            rows: [
              ['Colour space', 'Artwork converted to CMYK, not RGB', 'Late conversion shifts vivid screen colours'],
              ['Resolution', 'Images at full size and full resolution', 'Upscaled images soften on press'],
              ['Bleed', 'Artwork extended past every cut line', 'Cutting shift otherwise exposes unprinted board'],
              ['Safety margin', 'Critical elements well inside the trim', 'Protects text and marks from tolerance'],
              ['Fonts', 'Type converted to outlines', 'Prevents substitution at output'],
              ['Layers', 'Dieline on its own named layer', 'Keeps cut and crease data out of the artwork'],
            ],
          },
          { t: 'p', html: 'Colour conversion deserves particular attention. Bright screen colours — vivid oranges, electric blues, saturated greens — sit outside what process inks can reproduce, so they shift when converted. Doing that conversion deliberately, and judging the result, is better than letting it happen silently at output.' },
        ],
      },
      {
        heading: 'Heavy Coverage And Its Consequences',
        blocks: [
          { t: 'p', html: 'Full-coverage artwork puts far more ink onto the board than a logo does, and ink volume brings its own behaviour. Large solid areas show mottling more readily than small ones. Dense coverage takes longer to dry, which raises the chance of set-off between stacked sheets. Folds through heavily inked regions crack more visibly.' },
          { t: 'p', html: 'Total ink coverage has practical limits that vary by press and board, and artwork built without regard for it can exceed what the combination handles cleanly. That is a conversation to have with the printer at file-preparation stage rather than after a proof comes back wrong.' },
          { t: 'p', html: 'Colour drift across a long run is the other consideration. Small variations are normal in process printing, and they become perceptible when an early sheet and a late sheet sit side by side. If exact consistency matters across reorders, that expectation should be raised before the first run rather than treated as a fault afterwards.' },
          {
            t: 'ul',
            items: [
              'Large solid areas show mottling more than small ones',
              'Dense coverage increases the risk of set-off between stacked sheets',
              'Folds through heavy ink crack more visibly, especially on dark artwork',
              'Total ink coverage limits vary by press and board',
              'Some colour variation across a long run is normal in process printing',
            ],
          },
        ],
      },
      {
        heading: 'What A Colour Match Can And Cannot Promise',
        blocks: [
          { t: 'p', html: 'Buyers frequently arrive with a brand colour and an expectation that it will be reproduced exactly. It is worth being clear about what is realistic. Process inks reproduce a range, and some brand colours sit outside it; those can be approached but not matched by CMYK alone.' },
          { t: 'p', html: 'Where an exact match matters, a spot colour printed as its own ink is the usual route, and whether that is available depends on the press, the run and the number of other colours in the artwork. It is a question to ask rather than an assumption to make.' },
          { t: 'p', html: 'The reliable way to set expectations is a printed proof on the intended board, judged under the lighting the packaging will actually be seen in. A colour approved on a screen or under office lighting frequently reads differently under warm counter lights.' },
          { t: 'p', html: 'Surface finish shifts the result again, because a coating changes how much light the ink reflects. If the specification includes a gloss or matte treatment, the proof should carry it too — the difference is easy to see when comparing against <a href="/product/gloss-finish-burger-sleeves/">a sealed high-shine face that holds ink density</a> rather than an untreated one.' },
        ],
      },
      {
        heading: 'When Full Colour Is Worth The Cost',
        blocks: [
          { t: 'p', html: 'Process printing costs more than one or two inks at almost every quantity, so it earns its place when the artwork genuinely needs it. Photography, gradients, illustration with many colours and campaign imagery all do. A logo and a strapline do not.' },
          { t: 'p', html: 'The honest test is whether the design would lose something specific if reduced to two colours. If it would, full colour is doing work. If the answer is that it would look simpler, the saving is usually better spent on board or finish, both of which affect how the packaging performs rather than only how it looks.' },
          { t: 'p', html: 'Campaign work is where full coverage most often pays, because the artwork is doing a marketing job for a defined period and the imagery is the point. Those runs carry their own planning constraints, which sit alongside <a href="/product/promotional-burger-sleeves/">packaging built around a campaign with a fixed end date</a>.' },
        ],
      },
      {
        heading: 'Registration And Where It Becomes Visible',
        blocks: [
          { t: 'p', html: 'Process printing lays four inks in sequence, and each has to land in the same place as the last. The tolerance on that alignment is small but not zero, and where it shows is predictable enough to design around.' },
          { t: 'p', html: 'Fine detail built from several colours is where it shows first. A thin coloured line, small type set in a process build, or an outline that has to sit exactly against a fill will all reveal a slight misalignment as a soft edge or a colour fringe. The same artwork printed larger hides it completely.' },
          { t: 'p', html: 'The usual response is to build critical small elements from a single ink rather than a process mix. Small type in solid black holds its edge regardless of how the other three plates align, which is why body text and legal information are normally set that way even in full-colour work.' },
          { t: 'p', html: 'Trapping is the other lever, and it belongs to the printer rather than the designer. It is worth asking how they handle it for your artwork rather than assuming, particularly where colours meet along a long edge or where a light element sits inside a dark field.' },
          {
            t: 'ol',
            items: [
              'Identify every element smaller than about a few millimetres',
              'Build those from one ink rather than a process mix where possible',
              'Set small type in solid black instead of a four-colour build',
              'Ask the printer how trapping is handled for your artwork',
              'Check a printed proof for colour fringing along fine edges',
            ],
          },
        ],
      },
      {
        heading: 'Judging A Proof Properly',
        blocks: [
          { t: 'p', html: 'Full-colour work is where proofing earns the most, and where it is most often rushed. A proof is not a formality confirming the file arrived; it is the only opportunity to see what the ink, board and coating do together before a quantity is committed.' },
          { t: 'p', html: 'Look at the things that cannot be judged on screen: how solid areas lay down, whether fine detail has held, how the colour reads under the lighting the packaging will be used in, and what the fold does to artwork running across it.' },
          { t: 'p', html: 'Judge it at arm\'s length as well as close up. Packaging is seen from a normal viewing distance, and a proof inspected at ten centimetres will pass details that vanish at the distance a customer actually looks from.' },
        ],
      },
    ],
    faqs: [
      { q: 'Why does full-colour artwork look different on kraft board?', a: 'Process inks are transparent and rely on a light, uniform substrate reflecting light back through them. Brown or textured board tints everything printed on it, pale tones lose definition and photographic areas flatten. Full-colour work and board choice are effectively one decision.' },
      { q: 'Should artwork be supplied in RGB or CMYK?', a: 'Converted to CMYK before supply, and converted deliberately rather than left to happen at output. Bright screen colours sit outside what process inks reproduce, so they shift during conversion. Doing it yourself lets you judge the shift instead of being surprised by it.' },
      { q: 'How much bleed does full-coverage artwork need?', a: 'Enough that a small cutting shift cannot expose unprinted board at any edge, with the exact figure confirmed by your supplier for their tooling. Critical elements should additionally sit well inside a safety margin rather than close to the trim.' },
      { q: 'Why do large solid colour areas look uneven?', a: 'Mottling shows more readily across large solids than small ones, because any variation in ink lay-down covers a bigger area. It is a normal characteristic rather than a defect, though board choice and coating both affect how visible it is.' },
      { q: 'What is set-off and why does heavy coverage increase it?', a: 'Set-off is ink transferring from one sheet onto the back of the sheet stacked above it before it has fully dried. Dense coverage takes longer to dry, which raises the risk. It is a production consideration to raise with the printer rather than something artwork alone controls.' },
      { q: 'Will my brand colour match exactly in CMYK?', a: 'Not always. Process inks reproduce a range, and some brand colours sit outside it — those can be approached but not matched by CMYK alone. Where an exact match matters, a spot colour printed as its own ink is the usual route, subject to press, run and the other colours in the artwork.' },
      { q: 'How should I judge a colour proof?', a: 'On the intended board, at full size, under the lighting the packaging will actually be seen in. A colour approved on screen or under office lighting frequently reads differently under warm counter lights, and the counter is where it has to work.' },
      { q: 'Does a coating change the printed colour?', a: 'Yes, because it changes how much light the ink reflects. Gloss deepens colour and matte softens it. If your specification includes a surface treatment, ask for the proof to carry it, otherwise you are approving a different result from the one you will receive.' },
      { q: 'Will colour be identical across a long run?', a: 'Small variation is normal in process printing and can be perceptible when an early sheet and a late sheet sit side by side. If close consistency across reorders matters, raise it before the first run and retain an approved sample as the reference.' },
      { q: 'Do folds cause problems on full-coverage artwork?', a: 'They can. A crease through a heavily inked area cracks more visibly than through light coverage, exposing pale fibre along the line. Deeper creasing helps, and keeping critical artwork off fold lines helps more.' },
      { q: 'When is full colour worth the extra cost?', a: 'When the design would lose something specific if reduced to two colours — photography, gradients, multi-colour illustration, campaign imagery. If the honest answer is that it would just look simpler, the money is usually better spent on board or finish.' },
      { q: 'What files should I send for a full-colour job?', a: 'Vector artwork where possible, images at full size and full resolution, type converted to outlines, artwork extended into the bleed, and the dieline on its own named layer. Upscaled images and live fonts are the two most common causes of avoidable disappointment.' },
    ],
  },
};
