// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L17 — Environmental Science: Sustainability & Resource Management
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-ESS3 (Earth and Human Activity)
// Interaction: PERSPECTIVES (policy debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l17-v1";

const SCIENCE_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-17`,
      title: `Environmental Science: Sustainability and Resource Management`,
      duration: 35,
      xpReward: 75,
      badge: `earth-steward`,
      badgeName: `Earth Steward`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you saw Earth as a single, interconnected system, where rock, water, air, and life shape one another and nothing happens in isolation. Now we ask the most urgent question that systems view raises: how should we, humanity, live within that system? This is environmental science: the study of how humans interact with the natural world, the resources we depend on, the impacts we have, and how we might thrive without destroying the very systems that sustain us. It's where science meets the future. We'll start with a crucial distinction: renewable resources (like sunlight, wind, and forests that can regrow) versus nonrenewable resources (like fossil fuels and minerals that, once used, are gone for human timescales). We'll explore the central idea of sustainability: meeting our needs today without robbing future generations of the ability to meet theirs, living off nature's "interest" rather than spending down its "capital." We'll look honestly at humanity's impact, how billions of people drawing on Earth's systems affect the climate, the air and water, the soil, and the web of life, and at the science of climate change: how adding greenhouse gases traps more heat, exactly as the atmosphere lesson hinted. And then, because the hardest questions here aren't only scientific but about values, tradeoffs, and how we should live, the heart of this lesson is a debate. You'll hear five thoughtful voices on how humanity should manage Earth's resources and protect its future. They don't agree, and that's the point. Your task isn't to memorize an answer, but to understand the real tensions and begin forming your own informed view, because this is your planet, and your future. Onward.`,
          headline: `Environmental Science: Sustainability and Resource Management`,
          subtitle: `How humanity uses, strains, and might protect the Earth systems we all depend on. A debate among many voices.`,
          visual: `/voyager-assets/science/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Resources: Renewable And Not`,
          paragraphs: [
            `Everything humans use comes from Earth's systems: the food we eat, the water we drink, the energy we burn, the materials we build with. Environmental science begins by asking what these resources are and how long they last. The most important divide is between renewable and nonrenewable resources, the foundation of thinking clearly about our future.`,
            `Renewable resources replenish on human timescales, if we don't overuse them. Sunlight and wind are effectively endless. Forests, fish, and fresh water regrow, but only if we take no more than they can replace. Overharvest faster than they recover, and even a "renewable" resource can collapse. Renewable doesn't mean limitless; it means it can replenish if managed wisely.`,
            `Nonrenewable resources exist in fixed amounts and don't regenerate usefully. Fossil fuels, coal, oil, and gas, took hundreds of millions of years to form; once burned, they're gone. Minerals and metals are finite too. Using them means drawing down a one-time inheritance. This frames the central challenge: how to supply a growing humanity without exhausting Earth.`,
          ],
          image: `/voyager-assets/science/l17-s1-resources.webp`,
          imageCaption: `Everything humans use comes from Earth's systems: food, water, energy, materials. Environmental science begins by asking what these RESOURCES are and how long they last. The key divide: RENEWABLE versus NONRENEWABLE. Renewable resources replenish on human timescales, if we don't overuse them: sunlight and wind are endless; forests, fish, and fresh water regrow or refill, but only if we take no more than they can replace. Overharvest faster than they recover, and even a renewable resource can collapse, renewable doesn't mean limitless. NONRENEWABLE resources exist in fixed amounts and don't regenerate usefully: FOSSIL FUELS (coal, oil, gas) took hundreds of millions of years to form and are gone once burned; minerals and metals are finite too. Using them draws down a one-time inheritance.`,
          vocab: [
            { word: `renewable resource`,
              definition: `A resource that replenishes on human timescales if not overused, like sunlight, wind, forests, fish, and fresh water. Renewable does not mean limitless.`,
              audioPrompt: `A renewable resource, {name}, is one that can replenish itself on a human timescale, like sunlight, wind, forests, or fish, but only if we don't overuse it. Take more than nature can replace, and even a renewable resource can collapse. Renewable doesn't mean limitless.` },
            { word: `nonrenewable resource`,
              definition: `A resource that exists in a fixed amount and does not regenerate on a useful timescale, like fossil fuels and minerals. Once used, it is effectively gone.`,
              audioPrompt: `A nonrenewable resource, {name}, exists in a fixed amount and won't regenerate on any timescale useful to us, like fossil fuels and minerals. Coal, oil, and gas took hundreds of millions of years to form, so once we burn them, they're essentially gone for good.` },
            { word: `fossil fuels`,
              definition: `Coal, oil, and natural gas, formed from ancient life over hundreds of millions of years. They are nonrenewable and release greenhouse gases when burned.`,
              audioPrompt: `Fossil fuels, {name}, are coal, oil, and natural gas, formed from the buried remains of ancient life over hundreds of millions of years, ancient sunlight stored underground. They're nonrenewable, and burning them releases the greenhouse gases that warm the planet.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Idea Of Sustainability`,
          paragraphs: [
            `At the heart of environmental science is one powerful idea: sustainability. It means meeting the needs of the present without compromising the ability of future generations to meet their own needs. In plainer terms, it's living in a way that could continue indefinitely, without using up the systems and resources that future people, your own children and grandchildren, will depend on.`,
            `Picture Earth's resources as a savings account. The "capital" is the natural wealth: forests, fisheries, soils, clean water, stable climate. The "interest" is how much regenerates each year. Sustainability means living off the interest, taking only what nature can replace, so the capital stays intact. Spend the capital itself, and collapse follows.`,
            `Sustainability weaves together three strands, the three pillars: environmental health (protecting nature), economic viability (people need to make a living), and social equity (fairness, who benefits and who pays). A sustainable solution must work for all three. This makes it genuinely hard, not just a science problem, but a problem of values.`,
          ],
          image: `/voyager-assets/science/l17-s2-sustainability.webp`,
          imageCaption: `At the heart of environmental science is one idea: SUSTAINABILITY, meeting the needs of the present without compromising future generations' ability to meet their own. It means living in a way that could continue indefinitely, without using up the systems future people will depend on. Picture Earth's resources as a SAVINGS ACCOUNT: the "capital" is natural wealth, forests, fisheries, soils, clean water, stable climate, and the "interest" is how much regenerates each year. Sustainability means living off the INTEREST, taking only what nature can replace, so the capital stays intact. Spending the capital itself feels rich briefly, then collapses. Sustainability weaves THREE PILLARS: environmental health, economic viability, and social equity (fairness). A real solution must work for all three, which makes it genuinely hard.`,
          vocab: [
            { word: `sustainability`,
              definition: `Meeting the needs of the present without compromising future generations' ability to meet their own, living in a way that could continue indefinitely.`,
              audioPrompt: `Sustainability, {name}, means meeting our needs today without robbing future generations of the ability to meet theirs. It's living in a way that could continue indefinitely, taking only what the Earth can replace, so the planet's systems stay intact for those who come after us.` },
            { word: `natural capital`,
              definition: `Earth's stock of natural wealth, forests, fisheries, soils, clean water, a stable climate, that provides resources and services. Living off its "interest" is sustainable.`,
              audioPrompt: `Natural capital, {name}, is Earth's stock of natural wealth: its forests, fisheries, soils, clean water, and stable climate. Like savings, it generates "interest" each year. Live off that interest and the wealth lasts; spend the capital itself, and eventually it collapses.` },
            { word: `three pillars of sustainability`,
              definition: `Environmental health, economic viability, and social equity. A truly sustainable solution must work for all three at once, balancing nature, livelihoods, and fairness.`,
              audioPrompt: `The three pillars of sustainability, {name}, are environmental health, economic viability, and social equity, or fairness. A solution isn't truly sustainable unless it works for all three: protecting nature, letting people make a living, and sharing the benefits and burdens fairly.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Humanity's Footprint`,
          paragraphs: [
            `Humans have become a planetary force. With billions drawing on Earth's systems, our collective impact now rivals natural processes, and since the spheres are coupled, our actions ripple everywhere. We clear forests, drain aquifers, fish the oceans, pave landscapes, and pour wastes and gases into air and water at a scale that affects the whole Earth system.`,
            `The impacts are real and measurable: habitat loss and extinctions, pollution of air, water, and soil, depletion of fresh water and soil, and above all the buildup of greenhouse gases. These aren't isolated problems: because the spheres interact, a change in one cascades through the others, which is why environmental challenges are so interconnected.`,
            `It helps to think in terms of an ecological footprint: how much of Earth's capacity our consumption requires. The hard truth is that humanity is using resources faster than the planet can regenerate them, spending the capital rather than living on the interest. This is, by definition, unsustainable, the core problem environmental science exists to solve.`,
          ],
          image: `/voyager-assets/science/l17-s3-footprint.webp`,
          imageCaption: `Humans have become a PLANETARY FORCE. With billions drawing on Earth's systems, our collective impact now rivals natural processes, and since the spheres are coupled, our actions ripple everywhere. We clear forests, draw down aquifers, fish the oceans, pave land, and pour wastes and gases into air and water at a scale that affects the whole Earth system. The impacts are real and measurable: HABITAT LOSS and extinctions, POLLUTION of air, water, and soil, DEPLETION of fresh water and fertile soil, and above all the buildup of GREENHOUSE GASES. Because the spheres interact, a change in one cascades through the others. The ECOLOGICAL FOOTPRINT measures how much of Earth's capacity our consumption needs, and we're using resources faster than the planet regenerates them. By definition, unsustainable.`,
          vocab: [
            { word: `ecological footprint`,
              definition: `A measure of how much of Earth's productive capacity a person's or society's consumption requires. Humanity's footprint currently exceeds what Earth can regenerate.`,
              audioPrompt: `An ecological footprint, {name}, measures how much of Earth's productive land, water, and resources our consumption requires. The sobering finding is that humanity's footprint now exceeds what the planet can regenerate each year, meaning we're spending down nature's savings.` },
            { word: `greenhouse gases`,
              definition: `Gases like carbon dioxide and methane that trap heat in the atmosphere. Burning fossil fuels adds them, intensifying the natural greenhouse effect and warming the planet.`,
              audioPrompt: `Greenhouse gases, {name}, like carbon dioxide and methane, trap heat in the atmosphere, keeping Earth warm enough for life. But burning fossil fuels adds far more of them, strengthening that heat-trapping effect and warming the planet beyond its natural balance.` },
            { word: `biodiversity loss`,
              definition: `The decline and extinction of species as humans alter habitats. Because life is woven through Earth's systems, losing species can weaken whole ecosystems.`,
              audioPrompt: `Biodiversity loss, {name}, is the decline and extinction of species as humans clear and change their habitats. Because living things are woven through every Earth system, losing species can unravel whole ecosystems, weakening the web of life we ourselves depend on.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Climate Change And The Hard Choices`,
          paragraphs: [
            `The clearest example of humanity's planetary impact is climate change. The atmosphere naturally holds greenhouse gases that trap heat and keep Earth livable, vital and natural. The problem is degree: burning fossil fuels releases enormous extra carbon dioxide, thickening that heat-trapping blanket, so more heat is retained and average temperature rises.`,
            `Because the spheres are coupled, that warming ripples everywhere: melting ice, rising seas, shifting weather, more extreme storms and droughts, stressed ecosystems and food. It's the Earth-systems principle made urgent, a change in the atmosphere cascading through every other sphere. The basic mechanism, more greenhouse gas means more trapped heat, is well established.`,
            `But here the science meets the genuinely hard part, why this lesson ends in debate. Knowing the mechanism doesn't tell us what to do, because the choices involve real tradeoffs: growth versus emissions, rich versus poor nations, acting now versus later. These aren't questions science alone can settle. They're questions of values, fairness, and how we choose to live.`,
          ],
          image: `/voyager-assets/science/l17-s4-climate.webp`,
          imageCaption: `The clearest example of humanity's planetary impact is CLIMATE CHANGE. The atmosphere naturally holds GREENHOUSE GASES that trap heat and keep Earth livable, vital and natural. The problem is degree: burning FOSSIL FUELS releases enormous extra carbon dioxide, thickening that heat-trapping blanket, so more heat is retained and average temperature rises. Because the spheres are coupled, warming ripples everywhere: melting ice, rising seas, shifting weather, more extreme storms and droughts, stressed ecosystems and food. It's the Earth-systems principle made urgent. The basic mechanism, more greenhouse gas means more trapped heat, is well established. But knowing the mechanism doesn't tell us what to DO, because the choices involve real TRADEOFFS, of growth, fairness, and timing, that science alone cannot settle.`,
          vocab: [
            { word: `greenhouse effect`,
              definition: `The natural trapping of heat by atmospheric gases that keeps Earth warm enough for life. Adding greenhouse gases intensifies it, raising global temperatures.`,
              audioPrompt: `The greenhouse effect, {name}, is the natural trapping of heat by gases in the atmosphere, and it's essential, without it, Earth would freeze. The trouble comes from adding far more greenhouse gases by burning fossil fuels, which strengthens the effect and warms the planet too much.` },
            { word: `climate change`,
              definition: `The long-term shift in Earth's climate, driven largely by extra greenhouse gases from human activity, causing warming, rising seas, and more extreme weather.`,
              audioPrompt: `Climate change, {name}, is the long-term shift in Earth's climate driven largely by the extra greenhouse gases humans release. The basic science is clear: more of these gases traps more heat, warming the planet, raising seas, and intensifying storms and droughts.` },
            { word: `tradeoff`,
              definition: `A choice where gaining one thing means giving up another. Environmental decisions involve hard tradeoffs among economy, fairness, timing, and the environment.`,
              audioPrompt: `A tradeoff, {name}, is a choice where getting more of one thing means giving up some of another. Environmental decisions are full of them, between growth and emissions, rich and poor, acting now or later, which is exactly why they're so hard, and not settled by science alone.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. Resources are renewable (replenishing if not overused) or nonrenewable (finite, like fossil fuels). Sustainability means meeting today's needs without robbing the future, living off nature's interest, not its capital, balancing three pillars: environmental health, economy, and equity. It's not just a science problem; it's about values.`,
            `Humanity is now a planetary force, and our ecological footprint exceeds what Earth can regenerate. Because the spheres are coupled, our impacts, habitat loss, pollution, and the greenhouse gases driving climate change, cascade everywhere. The basic science is well established: more greenhouse gas traps more heat. But science cannot, by itself, tell us what we ought to do.`,
            `So this lesson ends not with one answer but with a debate, because the real questions, how humanity should manage Earth's future, are about tradeoffs, fairness, and values, not facts alone. Next, you'll hear five thoughtful voices, each holding a genuine piece of the truth. Don't crown a winner. Understand the tensions, and form your own view. This is your planet.`,
          ],
          image: `/voyager-assets/science/l17-s5-before.webp`,
          imageCaption: `Threads together. Resources are RENEWABLE (replenishing if not overused) or NONRENEWABLE (finite, like fossil fuels). SUSTAINABILITY means meeting today's needs without robbing the future, living off nature's interest, not its capital, balancing three pillars: environmental health, economy, and equity. It's about values, not just science. Humanity is a PLANETARY FORCE, and our ecological footprint exceeds what Earth regenerates. Because the spheres are coupled, our impacts, pollution, habitat loss, and the greenhouse gases driving CLIMATE CHANGE, cascade everywhere. The basic science is clear: more greenhouse gas traps more heat. But science can't tell us what we OUGHT to do. So this lesson ends in a DEBATE: five voices on how humanity should manage Earth's future. Don't crown a winner, understand the tensions.`,
          vocab: [
            { word: `conservation`,
              definition: `The careful protection and wise use of natural resources and ecosystems, so they endure for the future. A central goal of environmental management.`,
              audioPrompt: `Conservation, {name}, is the careful protection and wise use of nature, resources, habitats, and ecosystems, so they last into the future. It can mean protecting wild places, using resources slowly enough to regenerate, or restoring what's been damaged.` },
            { word: `renewable energy`,
              definition: `Energy from sources that don't run out and emit little or no greenhouse gas, like solar, wind, hydro, and geothermal, alternatives to fossil fuels.`,
              audioPrompt: `Renewable energy, {name}, comes from sources that won't run out and release little or no greenhouse gas: solar, wind, water, and geothermal heat. It's the leading alternative to fossil fuels, central to nearly every plan for a sustainable, lower-carbon future.` },
            { word: `stewardship`,
              definition: `The responsibility to care for and protect Earth's systems for present and future generations, treating the planet as something we hold in trust.`,
              audioPrompt: `Stewardship, {name}, is the idea that we have a responsibility to care for and protect the Earth's systems, not as owners free to use them up, but as caretakers holding the planet in trust for future generations. It's the ethic at the heart of sustainability.` },
          ],
        },

        {
          id: `l17-perspectives`,
          type: `perspectives`,
          headline: `The Great Sustainability Debate`,
          intro: `{name}, how should humanity manage Earth's resources and protect its future? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view, because this is your planet.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The urgent protector`,
              era: `A view on sustainability`,
              stance: `The science is clear and the clock is ticking, we must act boldly and fast to protect Earth's systems before damage becomes irreversible.`,
              quote: `"We have one planet and a closing window, caution that waits too long is itself a catastrophic choice."`,
              argument: `The basic science of climate change and resource depletion is well established, and many impacts (lost species, melted ice, a destabilized climate) are effectively irreversible. Earth's coupled systems can pass tipping points from which there's no return. Given that, bold, rapid action, slashing emissions, protecting ecosystems, transforming energy, is simply prudent. The greatest risk is doing too little, too late.`,
              evidence: `The well-established greenhouse mechanism (more CO2 traps more heat); measurable warming, ice loss, and rising seas; species extinctions and ecosystem stress; the coupled-systems risk of cascading, irreversible tipping points.`,
              strengths_and_limits: `Strength: takes the science seriously and weighs irreversibility, some damage truly can't be undone, making urgency rational. Limit: "act fast at all costs" can underweight the real economic and human costs of rapid change, and who bears them, which the other voices insist must be faced.`,
            },
            {
              id: `p2`,
              voice: `The development advocate`,
              era: `A view on sustainability`,
              stance: `Billions still lack reliable energy, clean water, and basic prosperity, lifting them out of poverty must not be sacrificed to environmental goals.`,
              quote: `"You cannot tell a family with no electricity that the planet can't afford to give them light."`,
              argument: `For billions of people, the most urgent need is development: reliable energy, clean water, food, and the prosperity that ends extreme poverty, much of which has historically required abundant, cheap energy. The nations now urging restraint grew rich by burning fossil fuels. It's unjust to ask the poorest to forgo that path. Human wellbeing and equity must sit at the center of any environmental plan.`,
              evidence: `Billions still lacking reliable electricity and clean water; the historical link between energy use and rising living standards; the fact that wealthy nations industrialized using the very fuels now in question; the social-equity pillar of sustainability.`,
              strengths_and_limits: `Strength: centers human wellbeing and the real injustice of asking the poorest to sacrifice first, honoring the equity pillar. Limit: framing development and environment as opposed can ignore that the poor often suffer environmental harm worst, and that clean energy may now offer a different path than the dirty one.`,
            },
            {
              id: `p3`,
              voice: `The techno-optimist`,
              era: `A view on sustainability`,
              stance: `Human ingenuity and clean technology can let us prosper and protect the planet at once, the answer is innovation, not just restraint.`,
              quote: `"We don't have to choose between progress and the planet, we have to invent our way to both."`,
              argument: `History shows human ingenuity repeatedly solving problems once thought impossible. Plummeting costs of solar, wind, and batteries, advances in efficiency, cleaner agriculture, and emerging technologies mean we can decouple prosperity from harm, growing wellbeing while cutting impact. Rather than only asking people to consume less, we should pour effort into innovation that makes the sustainable choice the cheap, easy, abundant one.`,
              evidence: `The dramatic falling cost of solar, wind, and batteries; gains in energy efficiency; renewable energy as a clean alternative to fossil fuels; the historical track record of technological problem-solving.`,
              strengths_and_limits: `Strength: realistic about innovation's power and offers a hopeful, growth-compatible path that doesn't rely solely on sacrifice. Limit: betting on future breakthroughs can become an excuse to delay; technology alone hasn't yet reversed the trends, and some limits (finite materials, ecosystems) may not be engineered away.`,
            },
            {
              id: `p4`,
              voice: `The systems realist`,
              era: `A view on sustainability`,
              stance: `Endless growth on a finite planet is the root problem, real sustainability means rethinking how much we consume, not just how we power it.`,
              quote: `"You cannot grow forever inside a closed system, eventually the math, and the planet, say no."`,
              argument: `Earth is a finite system, as the Earth-systems lesson showed, with limited resources and capacity to absorb waste. Swapping energy sources helps, but the deeper issue is an economy built on ever-rising consumption. Living off nature's interest rather than its capital may require not just cleaner technology but using less overall, redesigning economies around sufficiency, durability, and recycling, a circular rather than throwaway system.`,
              evidence: `Earth as a finite, closed system with limited natural capital; the ecological footprint exceeding regeneration; the savings-account logic (spending capital leads to collapse); the limits of simply substituting energy sources while consumption keeps rising.`,
              strengths_and_limits: `Strength: confronts the uncomfortable core, finite limits and overconsumption, that purely technological hopes can dodge. Limit: "consume less" is hard to square with billions who need to consume more to escape poverty, and with how deeply growth is woven into livelihoods and politics.`,
            },
            {
              id: `p5`,
              voice: `The pragmatic steward`,
              era: `A view on sustainability`,
              stance: `There's no single fix, the realistic path balances all three pillars at once through smart policy, cooperation, and steady, fair tradeoffs.`,
              quote: `"The question isn't which value wins, it's how we honor environment, economy, and fairness together."`,
              argument: `Each of the other voices holds part of the truth, which means no single approach suffices. Real sustainability means balancing the three pillars, environment, economy, and equity, through a mix of tools: clean-energy innovation and reduced waste, protection for the vulnerable and the poor, sound policy and global cooperation, and honest acknowledgment of tradeoffs. Progress comes not from one heroic answer but from steady, fair, evidence-based management.`,
              evidence: `The three pillars of sustainability; the reality of tradeoffs no side can wish away; the need for both innovation and conservation; the coupled, global nature of Earth's systems requiring cooperation.`,
              strengths_and_limits: `Strength: realistic and integrative, it refuses false either/or choices and insists every pillar be weighed, which fits how hard real decisions are. Limit: "balance everything" can blur into vagueness or inaction, and balancing assumes we can agree on the values and that cooperation will actually happen, which is exactly what's contested.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land on how humanity should manage Earth's future? Which voice's priority feels most important to you, urgency, development, innovation, limits, or balance, and why? Which voice challenged your thinking most? In 5-6 sentences, there's no single right answer, only a thoughtful one.`,
          reflectionPrompt: `These choices about Earth's future aren't settled by scientists alone, they belong, in part, to your generation, and to you. How does it feel to know that the planet you'll inherit will be shaped by debates like this one, and that your own informed voice can be part of them?`,
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the difference between renewable and nonrenewable resources?`,
              options: [
                `Renewable resources are expensive; nonrenewable ones are always cheap.`,
                `Renewable resources replenish on human timescales; nonrenewable ones do not.`,
                `Renewable resources are found only in the ocean; nonrenewable ones on land.`,
                `There is no real difference between the two kinds of resources.`,
              ],
              correctIndex: 1,
              explanation: `Renewable resources (sun, wind, forests) replenish on human timescales if not overused; nonrenewable ones (fossil fuels, minerals) exist in fixed amounts and don't regenerate usefully. The distractors invoke price, location, or deny the difference.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does sustainability mean?`,
              options: [
                `Using up all of our resources as quickly as possible while they still last.`,
                `Never using any of Earth's natural resources for anything ever.`,
                `Meeting present needs without compromising future generations' ability to meet theirs.`,
                `Focusing only on the economy and ignoring the environment.`,
              ],
              correctIndex: 2,
              explanation: `Sustainability means meeting today's needs without robbing future generations, living in a way that could continue indefinitely. The distractors describe rapid depletion, total non-use, or ignoring the environment.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `In the savings-account analogy for sustainability, what does living sustainably correspond to?`,
              options: [
                `Living off the interest, taking only what nature can replace.`,
                `Spending all of the capital as fast as you possibly can.`,
                `Refusing to ever touch the account for any reason.`,
                `Borrowing endlessly against future generations' savings.`,
              ],
              correctIndex: 0,
              explanation: `Living sustainably means living off nature's "interest", taking only what can regenerate, so the natural "capital" stays intact. The distractors describe spending the capital, never using it, or borrowing from the future.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are the three pillars of sustainability?`,
              options: [
                `Land, sea, and air across the whole planet.`,
                `Past, present, and future generations of people.`,
                `Government, business, and science working separately.`,
                `Environmental health, economic viability, and social equity.`,
              ],
              correctIndex: 3,
              explanation: `The three pillars are environmental health, economic viability, and social equity (fairness); a truly sustainable solution must work for all three. The distractors list regions, time periods, or institutions instead.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does burning fossil fuels contribute to climate change?`,
              options: [
                `It releases extra greenhouse gases that trap more heat in the atmosphere.`,
                `It uses up all the oxygen that plants need to survive.`,
                `It physically pushes the Earth closer to the Sun over time.`,
                `It has no real effect on the climate of the planet at all.`,
              ],
              correctIndex: 0,
              explanation: `Burning fossil fuels releases extra carbon dioxide, thickening the heat-trapping greenhouse blanket so more heat is retained and the planet warms. The distractors invoke oxygen, Earth's orbit, or deny any effect.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does it mean that humanity's ecological footprint exceeds what Earth can regenerate?`,
              options: [
                `Earth is producing far more resources than humans could ever use.`,
                `We are using resources faster than the planet can replace them, which is unsustainable.`,
                `Humans have completely stopped using any of Earth's natural resources.`,
                `The planet has unlimited resources, so footprint does not matter.`,
              ],
              correctIndex: 1,
              explanation: `Exceeding Earth's regeneration means we're drawing down natural capital faster than it refills, which is by definition unsustainable. The distractors claim a surplus, no use, or unlimited resources.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does this lesson end in a debate rather than a single correct answer?`,
              options: [
                `Because scientists have no idea what causes climate change.`,
                `Because the questions involve values and tradeoffs that science alone cannot settle.`,
                `Because there is nothing real that humans can do about the environment.`,
                `Because everyone already completely agrees on what to do.`,
              ],
              correctIndex: 1,
              explanation: `The basic science is established, but how humanity should act involves tradeoffs and values, fairness, economics, timing, that science alone cannot decide, so the lesson ends in genuine debate. The distractors misstate the science, deny action is possible, or claim total agreement.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why are environmental problems often so interconnected and hard to solve piecemeal?`,
              options: [
                `Because Earth's spheres are coupled, so a change in one cascades into the others.`,
                `Because each environmental problem is completely separate from all the rest.`,
                `Because the environment never actually changes in any way.`,
                `Because only the atmosphere matters and nothing else does.`,
              ],
              correctIndex: 0,
              explanation: `Because Earth's spheres are coupled (from the last lesson), a change in one cascades through the others, so environmental problems are interconnected and resist piecemeal fixes. The distractors claim separateness, no change, or that only the atmosphere matters.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because a resource is labeled "renewable," like a forest or a fishery, it is impossible to ever use it up, no matter how fast we harvest it.`,
              correctAnswer: false,
              explanation: `False, and understanding why is essential to thinking clearly about sustainability and avoiding a dangerous misconception. It is true that renewable resources, like forests, fisheries, fresh water, and soil, can replenish themselves over human timescales, which is exactly what distinguishes them from nonrenewable resources like fossil fuels. But "renewable" does not mean "limitless" or "impossible to exhaust." A renewable resource can only replenish at a certain natural rate, the rate at which a forest regrows, a fish population reproduces, an aquifer refills, or soil rebuilds. Sustainability depends on a crucial condition: we must take no more than the resource can replace in a given time. If we harvest a renewable resource faster than it can regenerate, we draw down the underlying stock (the "capital"), and the resource can decline, collapse, or even be destroyed entirely, despite being "renewable." Real-world examples are abundant and sobering: fisheries have collapsed when fish were caught faster than they could reproduce, leaving once-teeming waters nearly empty; forests have been cleared faster than they can regrow, turning to barren or eroded land; aquifers (underground water) have been pumped dry faster than rain can refill them; and fertile soil has been depleted by overuse. In each case, a resource that is renewable in principle was rendered effectively gone through overuse. This connects directly to the savings-account way of thinking about sustainability: a renewable resource is like an account that earns interest (regenerates) each year. If you live off only the interest, taking what the resource can replace, it lasts indefinitely. But if you spend down the capital itself, harvesting faster than the resource regenerates, the account shrinks and can eventually hit zero, no matter that it was "renewable." So the label "renewable" describes a resource's capacity to regenerate, not a guarantee that it's inexhaustible; that regeneration has a limited rate, and exceeding it leads to depletion or collapse. This is why sustainable management of renewable resources is so important and so challenging: it requires restraint, knowing the regeneration rate and not exceeding it. The statement is therefore false: renewable resources absolutely can be used up if harvested faster than they replenish, and protecting them means taking only what nature can replace. Renewable means "can replenish if managed wisely," not "impossible to exhaust."`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "Climate change is just a matter of opinion, like a political preference. Since people disagree about what to do, the underlying science must be unsettled too." Using the lesson, what's the best response?`,
              options: [
                `The student is right; the science of climate change is pure opinion.`,
                `Since people disagree on policy, no part of the science can be trusted.`,
                `Two different things are being confused: the basic science (that extra greenhouse gases from burning fossil fuels trap more heat and warm the planet) is well established, while the disagreement is about what we should DO, which involves values and tradeoffs (economy, fairness, timing) that science alone cannot settle; policy debate doesn't make the underlying mechanism uncertain.`,
                `Climate change isn't real, so there's nothing to discuss either way.`,
              ],
              correctIndex: 2,
              explanation: `The student conflates two separate things. The basic mechanism, more greenhouse gas traps more heat, is well established science; the genuine disagreement is over what to do, which involves values and tradeoffs science can't settle. Policy debate doesn't make the mechanism uncertain. The distractors treat established science as mere opinion or deny climate change outright.`,
            },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-inherit`, category: `The planet you'll inherit`, prompt: `Choices about Earth's future aren't settled by scientists alone, they belong, in part, to your generation. How does it feel to know your own informed voice can be part of shaping the planet you'll inherit?` },
            { id: `reflect-future`, category: `Living off the interest`, prompt: `Sustainability means leaving enough for those who come after, your own children and grandchildren. Where in your own life do you already think about what you're leaving for the future, and where might you start?` },
            { id: `reflect-tension`, category: `Holding real tensions`, prompt: `The five voices each held a real piece of the truth, and they didn't agree. What did it feel like to sit with a hard question that has no single clean answer, and resist crowning a winner?` },
            { id: `reflect-heritage`, category: `Teaching stewardship`, prompt: `Caro, you're building science for conscious families. How would you help a child feel both the wonder of the Earth and the responsibility of caring for it, without overwhelming them with fear, so stewardship feels like love rather than dread?` },
            { id: `reflect-values`, category: `Where science ends`, prompt: `Science can tell us what is happening, but not what we ought to do about it, that depends on our values. Does it change anything for you to see clearly the line between what science decides and what we must decide?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `It's tempting to call hard, value-laden questions "just opinion" and the settled science "uncertain" when we don't like the answer. How will you tell the difference between genuine scientific uncertainty and a disagreement that's really about values?` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Sustainability Investigators`,
            duration: `One afternoon`,
            description: `Turn an afternoon into an honest, hands-on look at how your household uses Earth's resources and where you could live more sustainably, not with guilt, but with curiosity and clear thinking. Start by sorting resources: walk through your home and identify which resources you use are renewable (sunlight through windows, any solar power, wind, water that cycles) and which are nonrenewable (gasoline, natural gas, plastic from oil, metals, single-use items), discussing the difference and why it matters. Trace where things come from and go: pick a few everyday items (food, water, electricity, a plastic bottle) and trace their journey, where the resource originated, what happened to make it, and where it goes as waste, connecting to the idea that on a coupled planet, "away" is still somewhere. Do a simple footprint reflection: talk about the family's biggest resource uses (energy, food, water, stuff, travel) and where the most impact comes from, without judgment, just understanding. Apply the three pillars to a real choice: pick a decision (what to eat, how to travel somewhere, whether to repair or replace something) and weigh it through all three pillars, environmental health, cost/economics, and fairness, and notice the tradeoffs, that's exactly the hard balancing real sustainability requires. Explore the savings-account idea concretely: discuss something renewable you could "live off the interest" of (rainwater, a garden, reusing and repairing rather than discarding) versus something you're currently "spending the capital" of. Brainstorm small, real changes the family could actually make and would stick with, reducing waste, saving energy, repairing instead of tossing, choosing reusable over disposable, and pick one or two to try. Finally, hold a mini family debate: have different family members argue the five perspectives from the lesson (urgent protector, development advocate, techno-optimist, systems realist, pragmatic steward) about a real choice, then discuss where each had a point. The goal is to move beyond slogans and guilt to genuine understanding, seeing your household as part of Earth's systems, recognizing the real tradeoffs, and thinking like environmental scientists and thoughtful citizens about how to live well within the one planet we share.`,
          },
          projectOption: {
            title: `The Sustainability Solution Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate a real sustainability challenge and design a thoughtful, balanced solution, becoming an environmental scientist who reasons with evidence, systems, and values. Week 1, choose and research a challenge: pick a real environmental issue you care about, at any scale, household, school, community, or global, such as energy use, water conservation, food waste, plastic and recycling, biodiversity and habitat, transportation, or climate. Research it as a scientist: gather facts about the resource(s) involved (renewable or nonrenewable), the impacts (how it affects Earth's coupled systems), and the scale of the problem. Importantly, map the issue through the three pillars of sustainability, what are the environmental, economic, and social-equity dimensions and tradeoffs? Identify who is affected and who decides. Week 2, design and defend a solution: propose a realistic solution or set of actions to make your chosen area more sustainable, and crucially, evaluate it honestly through all three pillars and the perspectives from the lesson. Does it protect the environment? Is it economically workable? Is it fair, who bears the costs and who benefits? What are the tradeoffs, and how does it handle them? Consider the different viewpoints (urgency, development/equity, innovation, reducing consumption, balanced management) and show that you understand the genuine tensions, rather than pretending there's a cost-free perfect answer. Where possible, test or model a small piece of your solution (track your household's water or energy use before and after a change; calculate waste reduced; estimate impact). Produce your final piece, a proposal, a slide deck, a report, or a persuasive video, that defines the challenge, presents the science, weighs the three pillars and key perspectives, proposes a balanced solution, and honestly addresses its tradeoffs and fairness. The aim is to experience environmental science as it's truly practiced: not as preaching or doom, but as rigorous, systems-based, values-aware problem-solving, learning to hold scientific evidence and human tradeoffs together, and to think clearly and fairly about how humanity can thrive within the limits of one shared planet.`,
            offerToParent: `Parent: opt your child into the Sustainability Solution Project. Researching a real environmental challenge, classifying the resources, mapping impacts through Earth's coupled systems, and designing a solution evaluated honestly through the three pillars (environment, economy, equity) and multiple perspectives, directly develops the core NGSS concepts of natural resources, sustainability, human impact on Earth systems, and the science of climate change, while building the rarer skill of holding scientific evidence and value-laden tradeoffs together. Reasoning fairly about genuine tensions, rather than slogans or doom, builds systems thinking, evidence evaluation, ethical reasoning, and informed citizenship. It's rigorous, standards-aligned work on the defining challenge of your child's generation.`,
          },
          identityQuestion: `If you become someone who understands both the science of how humanity strains the planet and the genuine tradeoffs in protecting it, who can hold real tensions without collapsing into either denial or despair, what kind of thinker and citizen does that make you, a person who can reason clearly and fairly about the future of the one planet we share, and lend that future an informed voice, that someone who treats it all as mere opinion or hopeless doom never can?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can reason clearly and fairly about the planet's future.`,
            `A thinker who holds real tradeoffs without denial or despair.`,
            `Someone who wants to be a thoughtful steward of the Earth.`,
          ],
          saveKey: `identity_responses_sci_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventeen lessons in, and you've taken the systems view of Earth into its most urgent application: how humanity uses, strains, and might protect the planet we all depend on. You learned the crucial distinction between renewable resources (which replenish if we don't overuse them) and nonrenewable ones (finite, like fossil fuels), and that "renewable" never means limitless. You grasped the central idea of sustainability, meeting today's needs without robbing the future, living off nature's interest rather than its capital, and balancing the three pillars: environmental health, economic viability, and social equity. You looked honestly at humanity's footprint, now exceeding what Earth can regenerate, and at the science of climate change: how extra greenhouse gases from burning fossil fuels trap more heat, with effects cascading through every coupled Earth system. And then you did something harder than memorizing facts: you sat with a genuine debate. Five thoughtful voices, the urgent protector, the development advocate, the techno-optimist, the systems realist, and the pragmatic steward, each held a real piece of the truth, and you resisted crowning a winner, instead beginning to understand the true tensions and form your own informed view. You've learned to tell the difference between settled science and value-laden choices, and to hold both with care. This is the work of a thoughtful scientist and citizen. Next, we lift our eyes from the planet to the cosmos itself: astronomy, the stars, galaxies, and the deep questions of where everything came from. Onward, {name}. — Cosmo`,
          badge: `earth-steward`,
          badgeName: `Earth Steward`,
          xpEarned: 75,
          competencies: [
            `Distinguishes renewable from nonrenewable resources and knows renewable is not limitless`,
            `Understands sustainability as meeting present needs without compromising the future`,
            `Knows the three pillars: environmental health, economic viability, and social equity`,
            `Understands the greenhouse effect and the basic science of human-driven climate change`,
            `Grasps the ecological footprint and that humanity now exceeds Earth's regeneration`,
            `Distinguishes settled science from value-laden questions of what we ought to do`,
            `Can hold multiple perspectives on a contested issue and reason toward an informed view`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: Astronomy — Stars, Galaxies, and Cosmology`,
            hook: `Where everything came from: the life of stars, the scale of galaxies, and the story of the universe itself. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L17 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
