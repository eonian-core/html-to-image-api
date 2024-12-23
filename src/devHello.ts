import * as config from './config'

type Token = {
  uuid: string;
  symbol: string;
  color: string | null;
  icon: string;
  name: string;
  change: string;
  price: string;
  twitterLink?: {
    url: string;
    handle: string;
  };
  website: string;
  rank: number;
  tier: number;
  tags: string[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  btcPrice: string;
  marketCap: string;
  "24hVolume": string;
  links: {
    name: string;
    type: string;
    url: string;
  }[];
  coinrankingUrl: string;
};

type TokensData = {
  tokens: Token[];
};

if (process.env.NODE_ENV === 'development') {
  const tokensData: TokensData = {"tokens":[{"uuid":"Zn7tfLquO","symbol":"CLV","color":null,"icon":"https://cdn.coinranking.com/VmwVRtBCq/8384.png","name":"Clover Finance","change":"13.83","price":"0.07251522883113547","twitterLink":{"url":"https://twitter.com/clover_finance","handle":"clover_finance"},"website":"https://clover.finance/","rank":808,"tier":1,"tags":["layer-1","altcoin","erc-20"],"allTimeHigh":{"price":"2.131502030601429","timestamp":1630368000},"btcPrice":"7.62012209983e-7","marketCap":"9338350","24hVolume":"22922106","links":[{"name":"clover.finance","url":"https://clover.finance/","type":"website"},{"name":"projectclover","url":"https://projectclover.medium.com/","type":"medium"},{"name":"clover_en","url":"https://t.me/clover_en","type":"telegram"},{"name":"@clover_finance","url":"https://twitter.com/clover_finance","type":"twitter"}],"coinrankingUrl":"https://coinranking.com/coin/Zn7tfLquO+cloverfinance-clv"},{"uuid":"aRGRWLf2RYNq4","symbol":"ZEC","color":"#000","icon":"https://cdn.coinranking.com/rJrKiS_uZ/zec.svg","name":"Zcash","change":"5.14","price":"56.05357972381643","twitterLink":{"url":"https://twitter.com/electriccoinco","handle":"electriccoinco"},"website":"https://z.cash/","rank":106,"tier":1,"tags":["privacy","layer-1","proof-of-work","altcoin","halal","zero-knowledge"],"allTimeHigh":{"price":"5000.000001019066","timestamp":1477612800},"btcPrice":"0.000589028164859651","marketCap":"915257914","24hVolume":"130148123","links":[{"name":"z.cash","type":"website","url":"https://z.cash/"},{"name":"zcash","url":"https://github.com/zcash","type":"github"},{"name":"r/zec","url":"https://www.reddit.com/r/zec/","type":"reddit"},{"name":"electriccoinco","url":"https://twitter.com/electriccoinco","type":"twitter"}],"coinrankingUrl":"https://coinranking.com/coin/aRGRWLf2RYNq4+zcash-zec"},{"uuid":"jad286TjB","symbol":"HBAR","color":"#000000","icon":"https://cdn.coinranking.com/dSCnSLilQ/hedera.svg","name":"Hedera","change":"5.06","price":"0.26453967347975116","twitterLink":{"url":"https://twitter.com/hashgraph","handle":"hashgraph"},"website":"https://www.hedera.com/","rank":22,"tier":1,"tags":["staking","layer-1","altcoin","halal"],"allTimeHigh":{"price":"0.5683325195249673","timestamp":1631750400},"btcPrice":"0.000002779863822616","marketCap":"10119214590","24hVolume":"722411682","links":[{"name":"hedera.com","url":"https://www.hedera.com/","type":"website"},{"name":"discord.com","url":"https://discordapp.com/invite/FFb9YFX","type":"discord"},{"name":"hashgraph","url":"https://www.facebook.com/hashgraph","type":"facebook"},{"name":"hashgraph","url":"https://medium.com/hashgraph","type":"medium"},{"name":"r/hedera","url":"https://www.reddit.com/r/hedera","type":"reddit"},{"name":"hederahashgraph","url":"https://t.me/hederahashgraph","type":"telegram"},{"name":"hashgraph","url":"https://twitter.com/hashgraph","type":"twitter"},{"name":"hederahashgraph","url":"https://www.youtube.com/hederahashgraph","type":"youtube"}],"coinrankingUrl":"https://coinranking.com/coin/jad286TjB+hedera-hbar"},{"uuid":"J8xX4Fc9PxEat","symbol":"WAVES","color":"#0056FF","icon":"https://cdn.coinranking.com/B1tzRbyMz/waves.svg","name":"Waves","change":"4.82","price":"1.4795766083290625","twitterLink":{"url":"https://twitter.com/wavesprotocol","handle":"wavesprotocol"},"website":"https://waves.tech/","rank":308,"tier":1,"tags":["staking","layer-1","altcoin","halal"],"allTimeHigh":{"price":"61.324960423125184","timestamp":1648684800},"btcPrice":"0.000015547843664355","marketCap":"172381043","24hVolume":"24389560","links":[{"name":"waves.tech","url":"https://waves.tech/","type":"website"},{"name":"PyWaves Statistics","url":"https://dev.pywaves.org/","type":"website"},{"name":"wavescap.com","url":"https://wavescap.com/","type":"website"},{"name":"wscan.io","url":"https://wscan.io/","type":"explorer"},{"name":"wavesplatform","url":"https://github.com/wavesplatform/","type":"github"},{"name":"www.linkedin.cn","url":"https://www.linkedin.cn/company/waves-platform/","type":"linkedin"},{"name":"medium.com","url":"https://medium.com/wavesprotocol","type":"medium"},{"name":"r/wavesplatform","url":"https://www.reddit.com/r/wavesplatform","type":"reddit"},{"name":"Wavescommunity","url":"https://t.me/Wavescommunity","type":"telegram"},{"name":"wavesnews ","url":"https://t.me/wavesnews ","type":"telegram"},{"name":"wavesprotocol","url":"https://twitter.com/wavesprotocol","type":"twitter"},{"name":"Youtube","url":"https://www.youtube.com/channel/UCYDQN4Fo4rGnOZ22L5plNIw","type":"youtube"}],"coinrankingUrl":"https://coinranking.com/coin/J8xX4Fc9PxEat+waves-waves"},{"uuid":"zlVB2TdtBzUm","symbol":"XPR","color":"#791cb0","icon":"https://cdn.coinranking.com/5INBOrSfc/xpr.png","name":"Proton","change":"4.48","price":"0.001375696580471496","twitterLink":{"url":"https://twitter.com/protonxpr","handle":"protonxpr"},"website":"https://www.protonchain.com/","rank":684,"tier":1,"tags":["layer-1","altcoin","erc-20","bep-20"],"allTimeHigh":{"price":"0.049912066505503234","timestamp":1634428800},"btcPrice":"1.445624055e-8","marketCap":"27513932","24hVolume":"10946596","links":[{"name":"protonchain.com","url":"https://www.protonchain.com/","type":"website"},{"name":"blog.metalpay.com","url":"https://blog.metalpay.com/category/proton/","type":"website"},{"name":"discord.com","url":"https://discord.gg/B2QDmgf","type":"discord"},{"name":"106108184363637","url":"https://www.facebook.com/106108184363637","type":"facebook"},{"name":"r/ProtonChain","url":"https://reddit.com/r/ProtonChain","type":"reddit"},{"name":"ProtonXPR","url":"https://t.me/ProtonXPR","type":"telegram"},{"name":"@protonxpr","url":"https://twitter.com/protonxpr","type":"twitter"}],"coinrankingUrl":"https://coinranking.com/coin/zlVB2TdtBzUm+proton-xpr"}]};

  const templateName = 'rating';
  const parameters = {
    type: 1,
    category: 'Layer-1',
    tokens: tokensData.tokens.map(token => ({
      priceChange: parseFloat(token.change),
      price: parseFloat(token.price),
      symbol: token.symbol,
      name: token.name,
      icon: token.icon,
    })),
  };

  const width = 500;
  const height = 500;

  const url = `http://localhost:${config.port}/preview?templateName=${templateName}&parameters=${encodeURIComponent(JSON.stringify(parameters))}&width=${width}&height=${height}`;

  console.log(url);
}
