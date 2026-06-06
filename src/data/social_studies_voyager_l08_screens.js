// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L08 — Microeconomics: Markets, Supply, Demand, and Pricing
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Economics) — D2.Eco
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l08-v1";

const SOCIAL_STUDIES_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-08`,
      title: `Microeconomics: Markets, Supply, Demand, and Pricing`,
      duration: 35,
      xpReward: 75,
      badge: `market-decoder`,
      badgeName: `Market Decoder`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson we zoomed out to see the whole economic forest. Now we zoom back in to study the individual trees, the buyers, sellers, and prices that make up the economy from the ground up. This is microeconomics, and once you understand it, you'll see it everywhere, in why concert tickets cost what they do, why gas prices jump, why some jobs pay more than others, why a hot new product sells out and an unwanted one goes on sale. Here's a genuinely astonishing thing to sit with: no one is in charge of setting most prices. No central authority decides that a coffee costs what it does, or a phone, or an hour of someone's work. And yet, somehow, the right amount of bread shows up at the store, roughly when people want it, at a price most can pay, every single day, in a country of millions, without anyone coordinating it. How? The answer is one of the most powerful ideas in all of social science: the interaction of supply and demand in a market. This lesson reveals that hidden machinery. We'll define what a market actually is, and the two great forces that move it: demand (how much buyers want something) and supply (how much sellers will provide). We'll see how these two forces, pulling against each other, settle on a price, and how prices act as signals that quietly coordinate the behavior of millions of strangers. We'll watch what happens when something disrupts the balance, a shortage, a surge in demand, a new competitor. And because understanding markets means reading real situations, we'll become market analysts, working through five real scenarios, diagnosing why prices moved, why shortages happened, and what the market was "trying" to do. Once you can see this machinery, you can never unsee it. Onward.`,
          headline: `Microeconomics: Markets, Supply, Demand, and Pricing`,
          subtitle: `The hidden machinery of buyers, sellers, and prices that coordinates millions of strangers. A Case Study.`,
          visual: `/voyager-assets/social-studies/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Market Really Is`,
          paragraphs: [
            `A market isn't necessarily a physical place. In economics, a market is any arrangement where buyers and sellers come together to exchange goods, services, or resources. The market for sneakers, for haircuts, for labor (jobs), even for streaming video, each is a "place" where those who want something meet those who provide it.`,
            `The astonishing thing about markets is that they coordinate millions of people who never meet or plan together. No central authority decides how much bread to bake or what a phone should cost. Yet bread appears on shelves, phones get made and priced, and people find work, matching what's wanted with what's available. This self-organizing coordination is one of the deepest wonders of economics.`,
            `How does this happen without a planner? Through two great forces, demand (what buyers want and will pay for) and supply (what sellers will provide), meeting in the market and settling on prices. Prices aren't arbitrary; they emerge from this tug-of-war and carry information that guides behavior. Understanding this machinery, demand, supply, and price, is the heart of microeconomics.`,
          ],
          image: `/voyager-assets/social-studies/l08-s1-market.webp`,
          imageCaption: `A MARKET isn't necessarily a physical place. In economics, a market is any arrangement where BUYERS and SELLERS come together to exchange goods, services, or resources, the market for sneakers, for haircuts, for labor (jobs), for streaming video. The astonishing thing: markets coordinate millions of people who never meet or plan together. No authority decides how much bread to bake or what a phone should cost, yet bread appears, phones get priced, people find work, roughly matching what's wanted with what's available. How, without a planner? Through two great forces, DEMAND (what buyers want) and SUPPLY (what sellers provide), meeting in the market and settling on PRICES that carry information and guide behavior.`,
          vocab: [
            { word: `market`,
              definition: `Any arrangement, physical or virtual, where buyers and sellers come together to exchange goods, services, or resources. Markets exist for nearly everything, from sneakers to labor.`,
              audioPrompt: `A market, {name}, in economics, isn't just a building with stalls, it's any arrangement where buyers and sellers come together to trade goods, services, or resources. There's a market for sneakers, a market for haircuts, even a market for jobs (the labor market) and for streaming shows. Wherever people who want something meet people who provide it, there's a market. Think of three different markets you took part in this week. How were they alike, even if they looked totally different?` },
            { word: `coordination without a planner`,
              definition: `The remarkable way markets match what's wanted with what's available across millions of people, with no central authority directing it, through the interaction of supply, demand, and prices.`,
              audioPrompt: `Coordination without a planner, {name}, is the most astonishing thing about markets. No one is in charge of deciding how much bread to bake for a whole country, or what a phone should cost, yet somehow the right goods show up, roughly when and where people want them, at prices most can pay. Millions of strangers, none of them coordinating, end up matching what's wanted with what's available. How does that happen with no boss directing it? That mystery is what this lesson solves.` },
            { word: `supply and demand`,
              definition: `The two great forces that move every market: demand is what buyers want and will pay for; supply is what sellers will provide. Their interaction sets prices.`,
              audioPrompt: `Supply and demand, {name}, are the two great forces that move every market. Demand is how much buyers want something and what they'll pay for it. Supply is how much sellers are willing to provide. These two forces pull against each other, and where they meet, a price emerges. Almost everything about prices, why they rise, fall, or hold steady, comes down to supply and demand. Once you see these two forces, you'll spot them behind every price you encounter. Ready to learn how they work?` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Demand: What Buyers Want`,
          paragraphs: [
            `Demand is the first great force. It describes how much of something buyers are willing and able to purchase, and how that changes with price. The law of demand is simple: as the price of something rises, people generally want to buy less; as the price falls, they want to buy more. Cheap things fly off the shelves; expensive things sell slowly.`,
            `Why? Because at a higher price, fewer people think it's worth it. Lower the price, and more people decide it's worth buying, and can afford more. This inverse relationship, higher price, lower quantity wanted; lower price, higher quantity wanted, holds for nearly everything, from candy to cars. It's one of the most reliable patterns in all of economics.`,
            `But price isn't the only thing that affects demand. Demand can shift for other reasons: a product becomes trendy (demand rises), incomes grow (people buy more), a substitute appears (demand for the original falls), or tastes change. When something is in high demand and short supply, like a hot product or concert tickets, that intense wanting pushes hard on price. Demand is the pull of the buyers.`,
          ],
          image: `/voyager-assets/social-studies/l08-s2-demand.webp`,
          imageCaption: `DEMAND is the first great force: how much of something buyers are willing and able to buy, and how that changes with price. The LAW OF DEMAND is intuitive: as price RISES, people generally want LESS; as price FALLS, they want MORE. Cheap things fly off shelves; expensive things sell slowly. Why? At a higher price, fewer people think it's worth it, and buyers can afford less; lower the price, and more decide it's worth it and can afford more. This inverse relationship holds for nearly everything, candy to cars. But price isn't the only factor: demand also shifts when something becomes trendy, incomes grow, a substitute appears, or tastes change. Demand is the PULL of the buyers.`,
          vocab: [
            { word: `demand`,
              definition: `How much of a good or service buyers are willing and able to purchase, and how that quantity changes as the price changes. Demand is the pull of buyers in a market.`,
              audioPrompt: `Demand, {name}, is the buyers' side of a market: how much of something people are willing and able to buy, and how that changes as the price changes. It's the "pull" in the tug-of-war that sets prices. When lots of people want something, demand is high; when few do, demand is low. Demand is why a wildly popular product can command a high price, and why something nobody wants sits unsold. What's something you've wanted so much you'd pay a lot for it? That's your demand at work.` },
            { word: `law of demand`,
              definition: `The reliable pattern that as a good's price rises, buyers generally want less of it, and as its price falls, they generally want more. An inverse relationship between price and quantity wanted.`,
              audioPrompt: `The law of demand, {name}, is one of the most reliable patterns in economics: when the price of something goes up, people generally want to buy less of it; when the price goes down, they want to buy more. It makes intuitive sense, at a high price, fewer people think it's worth it and can afford it; at a low price, more do. You can see it everywhere, from candy to cars. Think of a time a price drop made you suddenly willing to buy something. That's the law of demand in action.` },
            { word: `shifts in demand`,
              definition: `Changes in how much buyers want something for reasons other than price, such as trends, rising incomes, new substitutes, or changing tastes. These shift demand up or down.`,
              audioPrompt: `Shifts in demand, {name}, happen when buyers want more or less of something for reasons beyond just its price. A product becomes trendy and demand jumps; people's incomes rise and they buy more; a cheaper substitute appears and demand for the original drops; or tastes simply change. These shifts move whole markets, not because the price changed, but because the wanting itself changed. Can you think of a product that suddenly became popular, or fell out of favor? That's a shift in demand.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Supply: What Sellers Provide`,
          paragraphs: [
            `Supply is the second great force, the sellers' side. It describes how much producers are willing and able to provide, and how that changes with price. The law of supply runs opposite to demand: as price rises, sellers want to provide more; as price falls, they provide less. Higher prices make selling more profitable, so suppliers ramp up.`,
            `Why? Because a higher price means more profit per item, making production worthwhile even for higher-cost producers, so more gets made. A lower price means thinner profits, so suppliers make less. This is the mirror image of demand: buyers want more as prices fall, sellers want to provide more as prices rise. The two forces pull in opposite directions.`,
            `Like demand, supply can shift for other reasons. If the cost of making something drops (cheaper materials, better technology), suppliers provide more at every price. If costs rise, or a disaster disrupts production, supply falls. More producers means more supply. Supply is the push of the sellers, and it's this push against the pull of demand that creates every market's central drama: where will the price land?`,
          ],
          image: `/voyager-assets/social-studies/l08-s3-supply.webp`,
          imageCaption: `SUPPLY is the second great force, the sellers' side: how much producers are willing and able to provide, and how that changes with price. The LAW OF SUPPLY runs OPPOSITE to demand: as price RISES, sellers want to provide MORE; as price FALLS, they provide LESS. Higher prices mean more profit per item, making production worthwhile even for higher-cost producers, so more gets made; lower prices mean thinner profits, so less gets made. This mirrors demand: buyers want more as prices fall, sellers want more as prices rise, the two forces pull in OPPOSITE directions. Supply also shifts: cheaper materials or better technology raise it; rising costs or disasters lower it; more competitors mean more supply. Supply is the PUSH of the sellers.`,
          vocab: [
            { word: `supply`,
              definition: `How much of a good or service producers are willing and able to provide, and how that quantity changes as the price changes. Supply is the push of sellers in a market.`,
              audioPrompt: `Supply, {name}, is the sellers' side of a market: how much of something producers are willing and able to make and sell, and how that changes with the price. It's the "push" in the tug-of-war that sets prices. When a price is high, sellers want to provide a lot; when it's low, they provide less. Supply is why sellers rush to produce a profitable product, and pull back from an unprofitable one. If you were selling something, how would a higher price change how much you'd want to provide?` },
            { word: `law of supply`,
              definition: `The pattern that as a good's price rises, sellers generally want to provide more of it, and as its price falls, they provide less. The mirror image of the law of demand.`,
              audioPrompt: `The law of supply, {name}, is the mirror image of the law of demand: when the price of something rises, sellers generally want to provide more of it, and when the price falls, they provide less. The reason is profit, a higher price means more profit per item, so making and selling becomes worthwhile, and more gets produced. Notice it runs exactly opposite to demand: buyers want more when prices fall, sellers want more when prices rise. Can you see how these two opposing pulls might settle on a price in the middle?` },
            { word: `shifts in supply`,
              definition: `Changes in how much sellers provide for reasons other than price, such as changing production costs, new technology, disasters, or the number of producers competing.`,
              audioPrompt: `Shifts in supply, {name}, happen when sellers provide more or less of something for reasons beyond its price. If materials get cheaper or technology improves, suppliers can make more at every price, supply rises. If costs jump or a disaster disrupts production, supply falls. And more competitors entering the market means more total supply. These shifts move markets powerfully. Think of how a drought might affect the supply of a crop, or a new factory the supply of a product. That's a shift in supply.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Price Is Born`,
          paragraphs: [
            `Now the magic. Demand pulls one way (buyers want more when prices are low), supply pushes the other (sellers provide more when prices are high). Where these forces balance, where the quantity buyers want equals the quantity sellers provide, the market settles on a price. Economists call this the equilibrium price, the price that "clears" the market, leaving no persistent shortage or surplus.`,
            `Watch how it self-corrects. If the price is too high, sellers offer lots but few buy, a surplus piles up, so sellers cut prices, pushing price down toward balance. If the price is too low, buyers want tons but sellers provide little, a shortage appears, and competition pushes price up toward balance. The market constantly nudges itself toward equilibrium, with no one directing it.`,
            `This is the deep insight: prices are signals. A high price signals "this is scarce or highly wanted, produce more, consume less"; a low price signals the opposite. These signals quietly guide millions of buyers and sellers, sending resources where they're most wanted, with no central planner. Prices are how a market "thinks."`,
          ],
          image: `/voyager-assets/social-studies/l08-s4-price.webp`,
          imageCaption: `Now the magic. DEMAND pulls one way (buyers want more when prices are low), SUPPLY pushes the other (sellers provide more when prices are high). Where they balance, where the quantity buyers want equals the quantity sellers provide, the market settles on the EQUILIBRIUM PRICE, which "clears" the market with no persistent shortage or surplus. It self-corrects: if price is too HIGH, a SURPLUS piles up, so sellers cut prices; if too LOW, a SHORTAGE appears, so price rises. The market nudges itself toward balance, with no one directing it. The deep insight: PRICES ARE SIGNALS. A high price says "scarce or wanted, produce more, consume less"; a low price says "abundant, produce less." Prices are how a market "thinks."`,
          vocab: [
            { word: `equilibrium price`,
              definition: `The price at which the quantity buyers want exactly equals the quantity sellers will provide, so the market "clears" with no lasting shortage or surplus. Where supply and demand balance.`,
              audioPrompt: `The equilibrium price, {name}, is where the two great forces balance: the price at which the amount buyers want to buy exactly equals the amount sellers want to provide. At that price, the market "clears", no lasting shortage, no piled-up surplus. It's the natural resting point that supply and demand settle on, like two people pulling a rope until it stops moving. And remarkably, the market finds it on its own, with no one in charge. Can you picture how a price too high or too low would get pushed back toward this balance?` },
            { word: `shortage and surplus`,
              definition: `A shortage occurs when the price is too low and buyers want more than sellers provide; a surplus occurs when the price is too high and sellers provide more than buyers want. Both push price toward equilibrium.`,
              audioPrompt: `Shortage and surplus, {name}, are what happen when a price is out of balance. A shortage occurs when the price is too low: buyers want far more than sellers are providing, so things sell out and competition pushes the price up. A surplus is the opposite: the price is too high, so sellers have more than buyers want, goods pile up unsold, and sellers cut prices. Both states push the price back toward equilibrium. Have you ever seen something sell out (shortage) or go on deep discount (surplus)? Now you know why.` },
            { word: `prices as signals`,
              definition: `The powerful idea that prices carry information: a high price signals scarcity or high demand (make more, use less); a low price signals abundance (make less, use more). Prices coordinate behavior with no central planner.`,
              audioPrompt: `Prices as signals, {name}, is one of the most powerful ideas in all of economics. A price isn't just a number, it's a message. A high price signals "this is scarce or strongly wanted, so produce more of it and use it carefully." A low price signals "this is abundant, so make less and feel free to use it." These signals quietly guide millions of buyers and sellers to coordinate, sending resources where they're most needed, with no central planner directing it. Isn't it remarkable that a price can carry that much information?` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. A market is any arrangement where buyers and sellers exchange, and its wonder is that it coordinates millions of strangers with no central planner. Demand is the pull of buyers: as price rises they want less, as it falls they want more. Supply is the push of sellers: as price rises they provide more.`,
            `Where these forces balance, the market settles on the equilibrium price, which clears the market. It self-corrects: too high a price creates a surplus that pushes price down; too low a price creates a shortage that pushes price up. The deepest insight: prices are signals, steering millions of buyers and sellers, sending resources where they're most wanted.`,
            `Now you become the market analyst. Reading a market means diagnosing why prices and quantities move: which force shifted, and what the market is doing in response. The case-study screen presents five real scenarios, a hot product that sells out, a price that spikes, a glut, a market self-correcting, and a price signal you trace. For each, identify the forces of supply and demand and the signal the price is sending.`,
          ],
          image: `/voyager-assets/social-studies/l08-s5-before.webp`,
          imageCaption: `Threads together. A MARKET is any arrangement where buyers and sellers exchange, coordinating millions of strangers with no planner. Two forces drive it. DEMAND is the pull of buyers: as price rises they want less, as it falls they want more (shifting with trends, income, tastes). SUPPLY is the push of sellers: as price rises they provide more, as it falls less (shifting with costs, technology, competition). Where they balance, the market settles on the EQUILIBRIUM PRICE. It self-corrects: too high creates a SURPLUS pushing price down; too low creates a SHORTAGE pushing price up. The deepest insight: PRICES ARE SIGNALS that steer behavior. Now you're the market analyst: five real scenarios. Identify the forces, the shortage or surplus, and the signal.`,
          vocab: [
            { word: `reading a market`,
              definition: `The skill of diagnosing why prices and quantities move by identifying which force (supply or demand) shifted, the resulting shortage or surplus, and the signal the price is sending.`,
              audioPrompt: `Reading a market, {name}, is the real skill this lesson builds: looking at a real situation, a price spike, a sellout, a discount, and figuring out what's happening underneath. Which force moved, supply or demand? Is there a shortage or surplus? What is the price signaling to everyone? This is exactly how economists diagnose the markets all around us. Are you ready to look at real prices and shortages and explain what the market is actually doing?` },
            { word: `markets everywhere`,
              definition: `The recognition that supply, demand, and prices operate in nearly every part of life, from products and jobs to housing and entertainment, so understanding markets explains much of the world.`,
              audioPrompt: `Markets everywhere, {name}, is what you'll notice once this lesson clicks: supply, demand, and prices are working behind almost everything. Why concert tickets cost what they do, why gas prices jump, why some jobs pay more, why a hot product sells out, all of it is supply and demand. The labor market sets wages; the housing market sets rents. Once you can see this machinery, you really can't unsee it. Where in your own life do you think you'll start spotting supply and demand at work?` },
            { word: `markets and their limits`,
              definition: `The understanding that while markets coordinate remarkably well, they aren't perfect or automatically fair, which is why societies sometimes choose rules or interventions, a debate for later lessons.`,
              audioPrompt: `Markets and their limits, {name}, is an important note of balance. Markets are astonishingly good at coordinating people and sending resources where they're wanted, but they aren't perfect, and they aren't automatically fair. Sometimes prices leave essential things out of reach, or markets fail in certain ways, which is why societies sometimes add rules or step in. We'll explore those debates in later lessons. For now, just hold both truths: markets are powerful and remarkable, and also not flawless. Why might it matter to keep both of those in mind?` },
          ],
        },

        {
          id: `l08-case-study`,
          type: `case-study`,
          headline: `Five Diagnoses Of A Market In Motion`,
          intro: `{name}, you're the market analyst now. Here are five real market situations. For each, reason like an economist: Which force, supply or demand, moved, and why? Is there a shortage or a surplus? What is the price doing, and what signal is it sending to buyers and sellers?`,
          cases: [
            {
              id: `c1`,
              title: `The product everyone suddenly wants`,
              type: `A surge in demand`,
              description: `A new gadget gets a glowing review and goes viral. Suddenly everyone wants one, far more people than before. Stores sell out almost instantly, waitlists form, and soon the price climbs well above what it was at launch, with some reselling it for even more. What is happening here, in terms of supply and demand?`,
              questions: [
                `Which force shifted, and in which direction?`,
                `Why did a shortage appear, and why did the price climb?`,
                `What signal is the rising price sending to sellers?`,
              ],
              evaluation: `As a market analyst, you'd diagnose this as a sharp increase (rightward shift) in demand, with supply unable to keep up in the short run, producing a shortage and a rising price. Let's reason through it carefully. First, which force moved? Demand. The glowing review and viral attention caused a shift in demand: far more people now want the gadget than before, not because the price changed, but because the wanting itself increased (a classic demand shift driven by changing tastes and trendiness). Importantly, supply (how many gadgets exist right now) can't instantly rise, factories take time to make more, so in the short run, the quantity available is roughly fixed while the quantity wanted has jumped. Second, why a shortage, and why did the price climb? Because at the original launch price, the quantity demanded now far exceeds the quantity supplied, that gap is a shortage. With far more buyers than available gadgets, the price is "too low" to balance the market: everyone rushes to buy, stock sells out instantly, and waitlists form. When buyers compete for a scarce item, the price gets pushed up (sellers can charge more, and resellers bid prices even higher). The price rises until it climbs toward a new, higher equilibrium where the quantity demanded once again matches the quantity available. This is the market self-correcting: the shortage at the old price drives the price up. Third, and most importantly, what signal is the rising price sending? This is the deep insight. The high, rising price is a signal screaming to sellers and producers: "This is scarce and intensely wanted, make more of it!" That signal is exactly what motivates manufacturers to ramp up production, and other sellers to enter the market, because the high price means high profit. Over time, as more gadgets get produced (supply rises to meet the new demand), the shortage eases and the price typically settles back down from its peak. So the price spike isn't random or merely "greedy", it's the market's way of communicating intense demand and motivating more supply, coordinating millions of strangers (buyers, sellers, manufacturers) with no central planner telling anyone what to do. As an analyst, you'd identify the demand shift (up), explain the resulting shortage and price climb at the old price, and recognize the rising price as a signal that pulls in more supply over time. You'd note this is textbook market machinery: a jump in demand meets fixed short-run supply, creating a shortage that drives price up, which signals producers to make more, which eventually relieves the shortage. It's the same logic behind concert tickets that sell out and resell for a fortune, or any hot, scarce product. The key skill: you can look at "everyone suddenly wants it, it sold out, the price shot up" and correctly diagnose a demand surge meeting limited supply, with the price acting as a signal.`,
            },
            {
              id: `c2`,
              title: `When the price suddenly spikes`,
              type: `A drop in supply`,
              description: `The price of a common item, say, gasoline, or a food staple, jumps sharply, almost overnight. Demand hasn't changed much; people want about the same amount as before. But something disrupted production or delivery, a disaster, a shortage of materials, a problem at the source. Why did the price spike, and what's really going on?`,
              questions: [
                `Which force shifted this time, and in which direction?`,
                `Why does reduced supply push the price up, even if demand is unchanged?`,
                `What is the higher price signaling to buyers and to sellers?`,
              ],
              evaluation: `As a market analyst, you'd diagnose this as a decrease (leftward shift) in supply while demand stays roughly constant, which pushes the price up, a different cause from the first case, but understood with the same supply-and-demand framework. First, which force moved? This time it's supply, not demand. The scenario tells us demand hasn't changed much (people want about the same amount as before), but something disrupted production or delivery, a disaster, a shortage of materials, a problem at the source. That's a shift in supply: at every price, sellers can now provide less than before. Supply has fallen. Second, why does reduced supply push the price up, even with unchanged demand? Because now the quantity available has dropped while the quantity people want has stayed the same, so at the old price, buyers want more than sellers can provide, a shortage. With the same number of buyers competing for fewer goods, the price gets bid up. The price rises until it reaches a new, higher equilibrium where the (now smaller) quantity supplied matches the quantity demanded at that higher price. In other words, the higher price does two things: it rations the now-scarcer supply (some buyers, facing the high price, choose to buy less or go without), and it reflects the new reality that the item is harder to produce or obtain. This is why prices can spike sharply when a disaster or disruption hits a key good, even though no one's "wanting" changed; the supply side did. Third, what is the higher price signaling? To buyers, the high price signals: "This is now scarce, use it carefully, conserve, consider alternatives." Notice how this naturally encourages people to cut back on the now-scarce item, exactly what you'd want when there's genuinely less of it to go around. To sellers and producers, the high price signals: "This is scarce and profitable right now, produce more if you can, find new sources, bring more to market." That signal motivates suppliers to ramp up or find workarounds, which, over time, helps restore supply and bring the price back down. So even a painful price spike is the market doing its job: communicating that something has become scarce, rationing the limited supply toward those who most need it, and motivating efforts to increase supply. As an analyst, you'd identify the supply shift (down), explain that reduced supply against steady demand creates a shortage at the old price that pushes the price up, and interpret the high price as a signal to conserve (buyers) and produce more (sellers). You'd highlight the crucial contrast with the first case: there, demand rose; here, supply fell, but both produce a shortage and a rising price. This is exactly why reading a market means asking which force moved and in which direction, the same price movement (a spike) can come from opposite causes, and a skilled analyst distinguishes them.`,
            },
            {
              id: `c3`,
              title: `The glut nobody wants`,
              type: `A surplus and falling prices`,
              description: `A company (or a whole industry) makes far more of a product than people end up wanting, maybe a trend faded, maybe they overproduced. Warehouses fill with unsold goods. To move the inventory, sellers slash prices, "clearance," "50% off," "everything must go." Why are the prices falling, and what's the market doing?`,
              questions: [
                `Is this a shortage or a surplus, and what causes it?`,
                `Why do sellers cut prices in this situation?`,
                `What signal are the falling prices sending to producers?`,
              ],
              evaluation: `As a market analyst, you'd diagnose this as a surplus, the opposite of a shortage, caused by the quantity supplied exceeding the quantity demanded at the current price, which drives prices down. This is the mirror image of the earlier cases, and reasoning through it confirms how well you understand the machinery. First, is this a shortage or a surplus, and what causes it? It's a surplus (also called a glut or excess supply): sellers have provided more of the product than buyers want to buy at the current price. The scenario gives two possible causes, both of which fit the framework: either demand fell (a trend faded, so buyers want less than before), or supply was too high (the company overproduced, providing more than people ever wanted). Either way, the result is the same, at the current price, the quantity supplied exceeds the quantity demanded, so unsold goods pile up in warehouses. That pile of unsold inventory is the visible sign of a surplus. Second, why do sellers cut prices? Because a surplus means the price is "too high" to clear the market, at that price, not enough buyers want the goods. Sellers are stuck with inventory they can't sell, which costs them money (storage, tied-up capital, goods that may spoil or go out of style). To move the inventory, they lower the price, clearance sales, discounts, "everything must go." As the price drops, the law of demand kicks in: more buyers become willing to purchase at the lower price, so the goods start moving. Sellers keep cutting until the price falls to a new, lower equilibrium where the quantity demanded once again matches the quantity available. This is the market self-correcting in the downward direction: a surplus at the old price pushes the price down, just as a shortage pushes it up. Third, what signal are the falling prices sending to producers? The low, falling price is a signal that says: "This is abundant relative to what people want, stop making so much of it, redirect your effort elsewhere." This is the crucial coordinating function of prices. A persistently low price tells producers that they've made too much, or that demand has faded, and that resources (labor, materials, factory time) would be better used producing something people actually want more. In response, producers cut back production of this item, and over time the oversupply clears. So the falling prices aren't just "bad news", they're the market communicating that resources are being wasted on something insufficiently wanted, and steering those resources toward more valued uses. As an analyst, you'd identify the surplus (quantity supplied exceeds quantity demanded at the current price), explain that it arises from either a fall in demand or excess supply, describe why sellers cut prices to clear the glut, and interpret the falling price as a signal telling producers to make less and shift resources elsewhere. You'd emphasize the elegant symmetry: shortages push prices up and signal "make more"; surpluses push prices down and signal "make less", and in both cases, with no central planner, the market nudges itself back toward balance and steers resources toward what people actually want.`,
            },
            {
              id: `c4`,
              title: `The market that fixed itself`,
              type: `Self-correction after a shock`,
              description: `A sudden shock hits a market, say, a shortage sends prices soaring. People are upset; it seems like the high price will last forever. But over the following months, something happens: the high prices change behavior, and gradually the market returns toward balance, with prices easing back down. Trace how the market corrected itself, with no one ordering it to.`,
              questions: [
                `How did the high prices change the behavior of buyers and sellers?`,
                `Why did these changes push the market back toward balance?`,
                `What does this reveal about how markets self-correct through prices?`,
              ],
              evaluation: `As a market analyst, you'd recognize this as a beautiful illustration of the self-correcting power of markets, how prices, acting as signals, automatically set in motion the very behaviors that resolve an imbalance, with no central planner directing anything. Let's trace the full correction. Start with the shock: a shortage sends prices soaring (perhaps supply dropped or demand surged, as in earlier cases). At first, the high price seems like a permanent problem, people are upset and assume it will last forever. But here's the key: the high price is not just a result of the shortage; it's also a signal that triggers corrective behavior on both sides of the market. First, how do high prices change behavior? On the demand side (buyers): the high price signals "this is scarce, use it carefully." So buyers respond, they buy less, conserve, seek substitutes, or postpone purchases. The quantity demanded falls as people react to the painful price. On the supply side (sellers/producers): the high price signals "this is scarce and very profitable right now, make more!" So producers respond, they ramp up production, invest in making more, find new sources or workarounds, and new sellers enter the market attracted by the high profits. The quantity supplied rises over time. Second, why do these changes push the market back toward balance? Because they directly attack the shortage from both sides. Buyers wanting less (lower quantity demanded) plus sellers providing more (higher quantity supplied) steadily closes the gap between what's wanted and what's available, the very gap that defined the shortage. As supply increases and demand moderates, the shortage shrinks, and with it, the upward pressure on price eases. The price gradually falls back down toward a new equilibrium. The market returns toward balance, not because anyone ordered it to, but because the high price motivated exactly the behaviors (conserve and produce more) that resolve a shortage. Third, what does this reveal about how markets self-correct? It reveals the deepest beauty of the price mechanism: prices are signals that automatically generate their own correction. A shortage creates a high price; the high price simultaneously tells buyers to use less and tells sellers to make more; those responses relieve the shortage and bring the price back down. The same logic works in reverse for a surplus: a low price tells buyers to use more and sellers to make less, clearing the glut. This self-correcting tendency, driven entirely by prices and the responses of millions of self-interested buyers and sellers, is what lets markets coordinate without any central authority. No one has to command producers to make more or buyers to conserve; the price signal does it. As an analyst, you'd explain that the high prices changed behavior (buyers conserved, sellers produced more), that these opposite responses closed the shortage gap and eased prices back toward equilibrium, and that this demonstrates the remarkable self-correcting nature of markets through price signals. You'd add an honest note of balance (consistent with the lesson): this self-correction is genuinely powerful and often works well, but it isn't instant (corrections can take time, during which people suffer real hardship) and markets aren't perfect or automatically fair, which is why societies sometimes add rules or step in, a topic for later. Still, the core insight stands: markets contain a remarkable built-in tendency to heal their own imbalances, all through the quiet, coordinating power of prices.`,
            },
            {
              id: `c5`,
              title: `What the price is telling everyone`,
              type: `Prices as information`,
              description: `Consider two products. One has a high and rising price; the other has a low and falling price. An economist looks at these prices and immediately "reads" important information from them, information that guides producers, buyers, and the whole economy about where to send effort and resources. What is each price actually communicating?`,
              questions: [
                `What does a high, rising price tell producers and buyers to do?`,
                `What does a low, falling price tell them to do?`,
                `How do prices coordinate millions of people with no central planner?`,
              ],
              evaluation: `As a market analyst, you'd recognize this as the heart of the entire lesson: the profound idea that prices are not just numbers but signals carrying information, and that this information is what allows a market to coordinate millions of people with no central planner, perhaps the single most important insight in microeconomics. Let's read each price. First, what does a high, rising price communicate? A high, rising price signals scarcity and/or strong demand. To producers, it says: "This thing is highly wanted relative to how much exists, making more of it will be profitable, so produce more, invest here, bring more to market!" The high price acts as a magnet, pulling resources (labor, materials, investment) toward producing this good. To buyers, the same high price says: "This is scarce, so use it carefully, conserve it, or consider alternatives." So a single high price simultaneously tells producers to make more and buyers to use less, exactly the responses that relieve scarcity. Second, what does a low, falling price communicate? The opposite. A low, falling price signals abundance and/or weak demand. To producers, it says: "There's already plenty of this relative to what people want, making more isn't very profitable, so make less, and move your effort and resources to something more valued." It pushes resources away from this good. To buyers, the low price says: "This is abundant, feel free to use more of it." So a low price tells producers to make less and buyers they can use more, the responses that prevent waste and clear surpluses. Third, and most profoundly, how do prices coordinate millions of people with no central planner? This is the wonder the whole lesson has been building toward. In a huge economy, no central authority could possibly know how much of every single thing to produce, how scarce each resource is, how much people want each good, or where effort is best spent, the information is too vast, scattered across billions of individual minds and situations. Yet prices solve this. Each price gathers up and condenses an enormous amount of information, about scarcity, demand, costs, and desires, into a single number that everyone can see and respond to. When a good becomes scarcer or more wanted, its price rises, and that rising price automatically tells everyone, everywhere, to make more and use less of it, without anyone explaining why. When a good becomes abundant or less wanted, its falling price tells everyone to make less and use more. Millions of buyers and sellers, each just responding to prices in their own self-interest, end up coordinating beautifully, sending resources toward what's most wanted and away from what's not, as if guided by an "invisible hand," even though no one is in charge. The price system is, in effect, a vast, decentralized information network that lets a complex economy organize itself. As an analyst, you'd explain that a high/rising price signals "scarce, make more, use less" while a low/falling price signals "abundant, make less, use more," and that this is how prices coordinate millions of strangers with no central planner: by condensing dispersed information into signals that guide everyone's behavior. You'd recognize this as the deepest answer to the mystery the lesson opened with, how does the right amount of bread show up every day with no one in charge? Through prices, the silent signals that let a market "think." And you'd hold the honest balance the lesson teaches: this coordinating power is genuinely remarkable, even as markets remain imperfect and not automatically fair, a tension worth carrying into future lessons about when societies choose to shape or supplement markets.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, explain how supply and demand set a price, how shortages and surpluses push prices toward equilibrium, and why prices act as signals that coordinate millions of people with no central planner. Which case made the machinery clearest to you, and why? Remember to note that markets are powerful but not perfect. In 5-6 sentences.`,
          reflectionPrompt: `Every day, in a country of millions, roughly the right goods appear where they're wanted, at prices most can pay, with no one in charge, just prices quietly signaling and millions of strangers responding. How does it feel to suddenly see this invisible machinery that's been organizing your world all along?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `In economics, what is a "market"?`,
              options: [
                `Only a physical building where food is sold.`,
                `Any arrangement where buyers and sellers come together to exchange.`,
                `A central government office that personally sets all of the prices.`,
                `A list of rules that ban people from trading.`,
              ],
              correctIndex: 1,
              explanation: `A market is any arrangement, physical or virtual, where buyers and sellers come together to exchange goods, services, or resources, from sneakers to labor. The distractors limit it to a building or confuse it with price-setting or bans.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the law of demand say?`,
              options: [
                `As a price rises, buyers generally want more of the good.`,
                `Buyers always want the same amount no matter the price.`,
                `As a price rises, buyers generally want less; as it falls, they want more.`,
                `Only the government can decide how much people want.`,
              ],
              correctIndex: 2,
              explanation: `The law of demand: as price rises, buyers generally want less; as price falls, they want more, an inverse relationship. The distractors reverse the law, deny it, or misattribute demand to government.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the law of supply say?`,
              options: [
                `As a price rises, sellers generally want to provide more of the good.`,
                `Sellers always provide the same amount regardless of price.`,
                `As a price rises, sellers want to provide less.`,
                `Sellers ignore prices completely when deciding how much to make.`,
              ],
              correctIndex: 0,
              explanation: `The law of supply: as price rises, sellers generally provide more (higher prices mean more profit), the mirror image of demand. The distractors deny the relationship or reverse it.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the equilibrium price?`,
              options: [
                `The highest price a seller is legally allowed to charge.`,
                `The official price the government prints onto every single product.`,
                `The single lowest possible price allowed for any good.`,
                `The price where the quantity buyers want equals the quantity sellers provide.`,
              ],
              correctIndex: 3,
              explanation: `The equilibrium price is where quantity demanded equals quantity supplied, so the market clears with no lasting shortage or surplus. The distractors confuse it with legal limits, government labels, or a minimum price.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What happens when a price is set too low (below equilibrium)?`,
              options: [
                `A shortage appears: buyers want more than sellers provide, pushing the price up.`,
                `A surplus appears: sellers provide far more than buyers want.`,
                `Nothing changes, because price never affects quantity.`,
                `The whole entire market instantly shuts itself down completely forever.`,
              ],
              correctIndex: 0,
              explanation: `Too low a price creates a shortage, buyers want more than sellers provide, so competition pushes the price up toward equilibrium. The distractors describe a surplus (the opposite) or deny that prices matter.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `A product goes viral and far more people want it, but supply can't rise immediately. What happens?`,
              options: [
                `The price falls, because popularity always lowers prices.`,
                `A shortage appears and the price climbs, signaling sellers to make more.`,
                `Nothing, because demand never affects price.`,
                `Sellers are forced to give the product away for free.`,
              ],
              correctIndex: 1,
              explanation: `A demand surge against fixed short-run supply creates a shortage; the price climbs toward a new equilibrium, and the high price signals producers to make more. The distractors reverse the effect or deny demand's role.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the deep insight about what prices actually are?`,
              options: [
                `Prices are random numbers chosen by sellers for no reason.`,
                `Prices are set by a central government planner for every good.`,
                `Prices are signals that carry information and coordinate buyers and sellers.`,
                `Prices have no effect on anyone's behavior.`,
              ],
              correctIndex: 2,
              explanation: `Prices are signals: a high price signals scarcity (make more, use less), a low price signals abundance (make less, use more), coordinating millions with no central planner. The distractors call prices random, centrally planned, or meaningless.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `A disaster disrupts production of a good, but demand stays the same. What happens to the price, and why?`,
              options: [
                `The price falls, because disasters always make things cheaper.`,
                `The price stays exactly the same, since only demand affects price.`,
                `The price rises: reduced supply against steady demand creates a shortage at the old price.`,
                `The price simply disappears entirely, because the good can no longer ever be sold.`,
              ],
              correctIndex: 2,
              explanation: `A drop in supply with unchanged demand means buyers want more than sellers can provide at the old price, a shortage, so the price rises. The distractors deny supply's effect or invent impossible outcomes.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because no central authority sets most prices, it must be that the right amount of goods showing up where people want them, at prices most can pay, is just luck, and prices carry no useful information.`,
              correctAnswer: false,
              explanation: `False, and understanding why reveals the single most powerful idea in microeconomics: prices are signals that carry information and coordinate the behavior of millions of people, which is precisely why the right goods tend to show up where they're wanted without any central planner, this is the opposite of luck. It is true that no central authority sets most prices, and it can seem almost miraculous that, in a country of millions, roughly the right amount of bread appears on shelves, at a price most people can pay, every single day, with no one coordinating it. But this is not luck; it is the result of the price mechanism doing its job. Here is how. Prices emerge from the interaction of two great forces: demand (what buyers want and will pay) and supply (what sellers will provide). Where these forces balance, the market settles on an equilibrium price. Crucially, that price is not just a number, it is a signal that condenses an enormous amount of information into a form everyone can see and respond to. When a good becomes scarce or strongly wanted, its price rises, and that high price simultaneously tells producers "make more of this, it's profitable and needed" and tells buyers "use this carefully, it's scarce." When a good becomes abundant or less wanted, its price falls, telling producers "make less, move your resources elsewhere" and telling buyers "feel free to use more." In a huge economy, no central authority could possibly gather all the information about how scarce each resource is, how much people want each good, and where effort is best spent, that knowledge is scattered across billions of minds and situations. Prices solve this problem by condensing that dispersed information into signals. Millions of buyers and sellers, each simply responding to prices in their own interest, end up coordinating remarkably well, sending resources toward what's most wanted and away from what's not, as if guided by an "invisible hand," even though no one is in charge. So the appearance of the right goods at workable prices is not luck at all; it is the predictable result of prices carrying genuine, vital information and steering behavior. (This does not mean markets are perfect or always fair, they aren't, which is why societies sometimes add rules, but it does mean prices are deeply informative, not random.) Therefore the statement is false: prices carry rich, useful information, and market coordination is the work of the price system, not luck.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A factory fire destroys much of the supply of a popular component, while demand for it stays high. Prices spike. Over the next year, prices gradually fall back down. Using the lesson, what best explains the full sequence?`,
              options: [
                `The price spike and fall were random, since prices carry no information.`,
                `Reduced supply against steady demand caused a shortage and a price spike; the high price then signaled buyers to conserve and producers to make more, so over time supply rose and demand eased, pushing the price back toward balance, the market self-correcting through price signals.`,
                `The fire permanently destroyed the market, so prices should have stayed sky-high forever.`,
                `Prices fell only because the government ordered every seller to lower them.`,
              ],
              correctIndex: 1,
              explanation: `A supply drop with steady demand created a shortage and price spike; the high price then signaled buyers to conserve and producers to make more, raising supply and easing demand over time, pushing the price back toward equilibrium. This is the market self-correcting through price signals. The distractors deny prices' role or invent false causes.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-invisible`, category: `The invisible machinery`, prompt: `Every day, in a country of millions, roughly the right goods appear where they're wanted, at prices most can pay, with no one in charge, just prices signaling and strangers responding. How does it feel to suddenly see this invisible machinery that's been organizing your world all along?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, prices probably seemed like numbers sellers just picked. What surprised you most about where prices actually come from, or about prices being signals that carry information? What changed in how you'll see prices now?` },
            { id: `reflect-signals`, category: `Reading the signals`, prompt: `Now that you know a high price signals "scarce, make more" and a low price signals "abundant, make less," where in your own life, shopping, jobs, hobbies, might you start reading prices as messages rather than just costs?` },
            { id: `reflect-heritage`, category: `Teaching markets`, prompt: `Caro, you're building social studies for conscious families. How would you help a child grasp how supply and demand set a price, maybe through a lemonade stand or a sold-out toy, so this powerful machinery feels intuitive and even wondrous rather than dry?` },
            { id: `reflect-limits`, category: `Powerful but not perfect`, prompt: `Markets coordinate millions of strangers remarkably well, yet they aren't automatically fair, sometimes essential things stay out of reach. How do you hold both truths at once: that markets are wondrous, and that they have real limits?` },
            { id: `reflect-coordination`, category: `Order without a planner`, prompt: `It's striking that millions of people, each acting in their own interest, can coordinate beautifully through prices with no one in charge. What do you make of the idea that powerful order can emerge without anyone directing it?` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Decode the Prices Around You`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a discovery of the hidden machinery behind every price, so your family can suddenly "see" supply and demand everywhere. Start with the mystery: pose the wonder at the heart of the lesson, no one is in charge of setting most prices, yet roughly the right goods show up where people want them, at prices most can pay, every day, and ask how that's possible. Let the curiosity build before revealing the answer: supply and demand. Map the two forces: explain demand (the pull of buyers, who want more as prices fall) and supply (the push of sellers, who provide more as prices rise), and find everyday examples of each. Run a market simulation: hold a mock auction or trading game for a limited treat or item, watch how the price rises when many people want a scarce thing (a shortage) and falls when there's a glut (a surplus), and find the "equilibrium" where buyers and sellers balance. Hunt for shortages and surpluses: look for real examples, a sold-out concert or product (shortage, prices high), a clearance sale or overstock (surplus, prices slashed), and diagnose each as a family. Read prices as signals: pick a few prices that recently changed (gas, eggs, a popular toy, concert tickets) and "read" what each price is telling producers and buyers, scarce, make more, use less, or abundant, make less, use more. Trace a self-correction: find a story where a price spiked after a shock and then came back down, and trace how the high price changed behavior (buyers conserved, sellers made more) until the market rebalanced, with no one ordering it. Connect to the labor market: discuss how supply and demand also set wages, why some skills pay more (high demand, low supply) than others. Explore the invisible coordination: marvel together at how millions of strangers, just responding to prices, end up coordinating, and discuss the idea of order emerging without a planner. Finally, hold the balance: talk about how markets are powerful and remarkable, yet not perfect or automatically fair, which is why societies sometimes add rules. The goal is to give your family a kind of economic X-ray vision: the ability to look at any price, shortage, or sellout and understand the supply-and-demand machinery underneath, seeing the wondrous, invisible system that organizes the everyday world.`,
          },
          projectOption: {
            title: `The Market Analyst Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate a real market in depth and decode its machinery like an economist, becoming someone who can read the supply, demand, and price signals shaping everyday life. Week 1, choose and track a market: pick a real market that interests you, a specific product (sneakers, game consoles, concert tickets, a food item), a commodity (gas, coffee, a crop), housing in an area, or even a labor market (wages for a certain job). Research and observe it: What determines demand for it (who wants it, and why), and what determines supply (who makes it, and at what cost)? Track its price over time and find real moments when the price changed sharply. For each price change, investigate: Did demand shift (a trend, a change in income or tastes) or did supply shift (a cost change, a disruption, new competitors)? Was there a shortage or a surplus? Document the market's behavior like a detective gathering evidence. Week 2, analyze and explain the signals: take your observations and explain them using supply and demand. For each major price move, diagnose which force shifted and why, whether a shortage or surplus resulted, and how the market responded (did it self-correct?). Most importantly, interpret the prices as signals: what was each price "telling" producers and buyers to do, and did they respond as the theory predicts? Then step back and reflect honestly on the lesson's balance: how well did this market coordinate people and resources, and where, if anywhere, did it fall short of being fair or efficient (revealing the real limits of markets)? Produce your final piece, a "market analysis report," a documentary-style video, an annotated price-chart explainer, a presentation, or a written case study, that decodes how supply and demand drove your market's prices, interprets the price signals, traces any self-correction, and thoughtfully notes both the market's coordinating power and its limits. The aim is to experience microeconomics as a genuine analytical skill: the ability to look at any real market, a price spike, a sellout, a glut, and read the invisible machinery of supply, demand, and price signals beneath it, the same skill that lets economists understand how the everyday economic world organizes itself.`,
            offerToParent: `Parent: opt your child into the Market Analyst Project. Tracking a real market, a product, commodity, housing, or labor market, diagnosing why its prices moved (which force, supply or demand, shifted), identifying shortages and surpluses, interpreting prices as signals, and honestly weighing the market's coordinating power against its limits, directly develops core C3 Framework economics concepts: markets, supply and demand, price determination, market equilibrium, and economic decision-making. Reading a real market like an economist and interpreting price signals builds analytical reasoning, data literacy, and deep economic understanding. It's rigorous, standards-aligned work that gives your child a kind of X-ray vision into the everyday economic world, turning prices, shortages, and sellouts into a system they can actually read and explain.`,
          },
          identityQuestion: `If you become someone who can look at any price, shortage, or sellout and read the supply-and-demand machinery underneath, who understands that prices are signals coordinating millions of strangers with no one in charge, and who can see both the wonder and the limits of markets, what kind of person does that make you, one who can decode the invisible economic system organizing the world around you, that someone who sees prices as just numbers sellers picked never can?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read the supply and demand behind any price.`,
            `A person who understands that prices are signals coordinating millions of strangers.`,
            `Someone who sees both the wonder and the limits of markets.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just uncovered one of the most beautiful pieces of hidden machinery in the entire world, the machinery that quietly organizes the everyday economy around you. You learned what a market really is, any arrangement where buyers and sellers meet to exchange, and you sat with its genuine wonder: that it coordinates millions of strangers who never meet or plan together, with no central authority in charge. You mastered the two great forces. Demand, the pull of buyers, who want more as prices fall and less as they rise. Supply, the push of sellers, who provide more as prices rise and less as they fall. You saw how these opposing forces settle on the equilibrium price, the point that clears the market, and how the market self-corrects: shortages push prices up, surpluses push prices down, with no one directing it. And you grasped the deepest insight of all: prices are signals, carrying information that tells producers to make more or less and buyers to use more or less, coordinating the whole economy as if by an invisible hand. As a market analyst, you diagnosed five real situations, a demand surge, a supply shock, a surplus glut, a market self-correcting, and the pure reading of price signals, while keeping the honest balance that markets are powerful but not perfect or automatically fair. You now have economic X-ray vision. Next, we bring the macro and micro worlds together to ask a vital question: how do governments actually try to steer the economy? We'll study fiscal and monetary policy, the tools of economic management. Onward, {name}. — Atlas`,
          badge: `market-decoder`,
          badgeName: `Market Decoder`,
          xpEarned: 75,
          competencies: [
            `Understands what a market is and how it coordinates people with no central planner`,
            `Knows the law of demand: buyers want less as prices rise, more as they fall`,
            `Knows the law of supply: sellers provide more as prices rise, less as they fall`,
            `Understands the equilibrium price and how shortages and surpluses push toward it`,
            `Grasps that prices are signals carrying information that coordinates behavior`,
            `Can diagnose real markets: which force shifted, and the resulting shortage or surplus`,
            `Recognizes that markets are powerful but not perfect or automatically fair`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Fiscal and Monetary Policy`,
            hook: `How governments and central banks try to steer the whole economy, and the hard tradeoffs they face. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L08 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
