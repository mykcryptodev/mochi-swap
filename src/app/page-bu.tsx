'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { COMMUNITY_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/CommunitySvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import SwapWrapper from 'src/components/SwapWrapper';
import Image from 'next/image';
import meetMochi from '../images/meet-mochi.png';
import Head from 'next/head';

export default function Page() {
  const { address } = useAccount();

  return (
    <>
      <Head>
        <script
          src="/app.js"
          defer
        ></script>
      </Head>
      
      <div>
        <div className="loader">
          <img src="img/hero/cat.png" alt="Cat Image" />
        </div>
        <div className="wrapper">
          <header className="header">
            <div className="header__box">
              <a href="index.html" className="header__logo"><img src="img/logo.png" alt="Logo Icon" /><i></i></a>
              <div className="header__menu menu">
                <button type="button" className="menu__icon icon-menu">
                  <span></span><i></i>
                </button>
                <nav className="menu__body">
                  <ul className="menu__list">
                    <li className="menu__item">
                      <a href="index.html" className="menu__link menu__link--mochi">
                        <span>Mochi</span>
                      </a>
                    </li>
                    <li className="menu__item">
                      <a target="_blank" href="https://twitter.com/mochi_token/status/1694086078183973196" className="menu__link">
                        <span>Art</span>
                        <div>
                          <img src="img/icons/01.svg" alt="Icon" /><img src="img/icons/01-white.svg" alt="Icon" />
                        </div>
                      </a>
                    </li>
      
                    <li className="menu__item">
                      <a target="_blank" href="https://opensea.io/collection/mochimonsbase" className="menu__link">
                        <span>Mochimons NFTs</span>
                        <div>
                          <img src="img/icons/02.svg" alt="Icon" /><img src="img/icons/02-white.svg" alt="Icon" />
                        </div>
                      </a>
                    </li>
                    <li className="menu__item">
                      <a target="_blank" href="https://t.me/Mochi_Inspector_bot" className="menu__link">
                        <span>Inspector Bot</span>
                        <div>
                          <img src="img/icons/03.svg" alt="Icon" /><img src="img/icons/03-white.svg" alt="Icon" />
                        </div>
                      </a>
                    </li>
                    <li className="menu__item">
                      <a target="_blank" href="#" data-goto=".page__how-to-buy" className="menu__link menu__link--dark">
                        <span>How to get <span>$mochi</span></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
      
          <main className="page">
            <section className="page__hero hero">
              <div className="hero__background">
                <img src="img/hero/sky.jpg" alt="Sky Image" />
                <img src="img/hero/sky.jpg" alt="Sky Image" />
                <img src="img/hero/sky.jpg" alt="Sky Image" />
              </div>
              <div className="hero__container">
                <h1 className="hero__title">
                  <p><span>M</span><span>E</span><span>E</span><span>T</span></p>
                  <br />
                  <p className="orange">
                    <span>M</span><span>o</span><span>c</span><span>h</span><span>i</span>
                  </p>
                  <img src="img/hero/cat.png" alt="Cat Image" />
                </h1>
                <div className="hero__bottom">
                  <div className="hero__bottom-text">
                    <p>CRYPTO'S CUTEST CAT!</p>
                    <p>クリプトの一番可愛い猫！</p>
                  </div>
                  <div className="hero__bottom-buttons">
                    <a target="_blank" href="https://dexscreener.com/base/0xfcc89a1f250d76de198767d33e1ca9138a7fb54b" className="hero__bottom-button"><span>Chart</span><img src="img/icons/arrow.svg" alt="Arrow Icon" /></a>
                    <a href="#" data-goto=".page__join" className="hero__bottom-button hero__bottom-button--white"><span>Join us</span></a>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="page__buy-mochi buy-mochi">
              <div className="buy-mochi__backgroung">
                <img src="img/buy/background.png" alt="Background picture" />
              </div>
              <div className="buy-mochi__box">
                <div data-watch-threshold="0.5" data-watch-once data-watch className="buy-mochi__content content-buy-mochi">
                  <div className="content-buy-mochi__background"></div>
                  <h2 data-watch-threshold="0.5" data-watch-once data-watch className="content-buy-mochi__title">
                    <span>G</span><span>e</span><span>t</span> <br />
                    <span>$</span><span>M</span><span>O</span><span>C</span><span>H</span><span>I</span>
                  </h2>
                  <div className="content-buy-mochi__images">
                    <div className="content-buy-mochi__image-text">
                      <img src="img/buy/05.png" alt="Icon" />
                    </div>
                    <div className="content-buy-mochi__image-cat">
                      <img src="img/buy/01.png" alt="Cat Image" />
                    </div>
                  </div>
                </div>
                <div className="buy-mochi__items">
                  <a target="_blank" href="#" data-goto=".page__how-to-buy" className="buy-mochi__item item-buy-mochi">
                    <h3 className="item-buy-mochi__title">
                      <span>How to get</span><img src="img/icons/arrow.svg" alt="Arrow Icon" />
                    </h3>
                    <div className="item-buy-mochi__text">
                      $MOCHI is on Base. View our tutorial here.
                    </div>
                  </a>
                  <div className="buy-mochi__item-box">
                    <a target="_blank" href="https://app.uniswap.org/explore/tokens/base/0xf6e932ca12afa26665dc4dde7e27be02a7c02e50 " className="buy-mochi__item item-buy-mochi">
                      <h3 className="item-buy-mochi__title">
                        <span>UniSwap</span>
                        <img src="img/buy/02.png" alt="Image" />
                      </h3>
                    </a>
                    <a target="_blank" href="https://wallet.coinbase.com/assets/crypto/ETH%2FMOCHI%2FETHEREUM_CHAIN%3A8453%2Ffalse%2F0xf6e932ca12afa26665dc4dde7e27be02a7c02e50?assetUUID=857c2c9d-3d40-43f3-8b18-61d356aa9ad7" className="buy-mochi__item item-buy-mochi">
                      <h3 className="item-buy-mochi__title">
                        <img src="img/buy/04.png" alt="Image" />
                        <span>Coinbase Wallet</span>
                      </h3>
                    </a>
                  </div>
                  <a target="_blank" href="https://www.mexc.com/uk-UA/exchange/MOCHI_USDT?" className="buy-mochi__item item-buy-mochi">
                    <h3 className="item-buy-mochi__title">
                      <span>MEXC</span>
                      <img src="img/buy/03.png" alt="Image" />
                      <img src="img/icons/arrow.svg" alt="Arrow Icon" />
                    </h3>
                  </a>
                </div>
              </div>
            </section>
            <section className="page__base base">
              <div className="base__container">
                <div className="base__decor-item base__decor-item--1">
                  <img loading="lazy" src="img/base/decor1.png" alt="Decor Image" />
                </div>
                <div className="base__decor-item base__decor-item--2">
                  <img loading="lazy" src="img/base/decor2.png" alt="Decor Image" />
                </div>
                <div data-watch-threshold="0.6" data-watch-once data-watch className="base__header">
                  <h2 className="base__header-title">
                    <span>M</span><span>o</span><span>c</span><span>h</span><span>i</span><span>!</span><i></i>
                  </h2>
                  <div className="base__header-label">Based on Base</div>
                </div>
                <div className="base__items">
                  <div className="base__item item-base">
                    <div className="item-base__text">
                      Named after the CEO of Coinbase's pet cat, $MOCHI pairs the
                      unstoppable narrative of being Brian Armstrong's cat with
                      Coinbase's push to bring the masses onchain to Base. The
                      masses will love Mochi, and thousands on Base already do.
                    </div>
                    <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
                      <span>That's quite <br />
                        the combo!
                      </span>
                      <img src="img/base/01.svg" alt="Icon" />
                    </div>
                  </div>
                  <div className="base__item item-base">
                    <div className="item-base__text">
                      Mochi is cute, orange, living onchain and helping Coinbase in
                      their mission to onboard 1 Billion people to Base.
                    </div>
                    <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
                      <span>We received a grant<br />
                        from Coinbase!</span>
                      <img src="img/base/02.svg" alt="Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="page__line line">
              <div className="line__line">
                <div className="line__line-row">
                  <div className="line__line-item line__line-item--mob">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--mob">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item">
                    <img src="img/line/01.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                </div>
                <div className="line__line-row">
                  <div className="line__line-item line__line-item--mob">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--mob">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item">
                    <img src="img/line/01.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                </div>
              </div>
              <div data-watch-threshold="0.8" data-watch-once data-watch className="line__cloud">
                <div className="line__cloud-background">
                  <img src="img/line/cloud.svg" alt="Cloud Image" />
                </div>
                <div className="line__cloud-body">
                  <div className="line__cloud-body-background">
                    <img loading="lazy" src="img/line/cat.png" alt="Cat Image" />
                  </div>
                  <h3 className="line__cloud-title">$MOCHI Contract Address</h3>
                  <div className="line__cloud-bottom">
                    <div className="line__cloud-number">
                      0xf6e932ca12afa26665dc4dde7e27be02a7c02e50
                    </div>
                    <button type="button" className="line__cloud-button">
                      <img src="img/line/copy.svg" alt="Copy Icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <section className="page__items items">
              <div className="items__background">
                <div>
                  <img loading="lazy" src="img/items/01.png" alt="Background Image" />
                </div>
                <div>
                  <img loading="lazy" src="img/items/cat.png" alt="Cat Image" />
                </div>
              </div>
              <div className="items__container">
                <div className="items__body">
                  <div data-watch-threshold="0.3" data-watch-once data-watch className="items__item item-items">
                    <span className="item-items__decor-top"><i></i><i></i></span>
                    <h3 className="item-items__title">
                      <span>0</span><span>%</span> <span>i</span><span>T</span><span>a</span><span>x.</span>
                    </h3>
                    <div className="item-items__text">
                      There are no contract fees when swapping $MOCHI.
                    </div>
                  </div>
                  <div data-watch-threshold="0.3" data-watch-once data-watch className="items__item item-items">
                    <span className="item-items__decor-top"><i></i><i></i></span>
                    <h3 className="item-items__title">
                      <span>L</span><span>o</span><span>c</span><span>k</span><span>e</span><span>d</span><span>i</span> <span>L</span><span>P.</span>
                    </h3>
                    <div className="item-items__text">
                      Rest assured! Mochi's liquidity is locked.
                    </div>
                  </div>
                  <div data-watch-threshold="0.3" data-watch-once data-watch className="items__item item-items">
                    <span className="item-items__decor-top"><i></i><i></i></span>
                    <h3 className="item-items__title">
                      <span>S</span><span>A</span><span>F</span><span>E</span>
                      <span>i</span><br /><span>C</span><span>O</span><span>N</span><span>T</span><span>R</span><span>A</span><span>C</span><span>T</span>
                    </h3>
                    <div className="item-items__text">
                      The contract has no malicious functions. View the audit by
                      CyberScope here
                    </div>
                    <a target="_blank" href="https://www.cyberscope.io/audits/2-mochi" className="item-items__button"><span>read more</span></a>
                  </div>
                </div>
              </div>
            </section>
            <section className="page__how-to-buy how-to-buy">
              <div className="how-to-buy__top top-how-to-buy">
                <div style={{ display: "none" }} className="top-how-to-buy__buttons">
                  <button className="top-how-to-buy__button active">
                    <span>Desktop</span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                      <path fill="#fff" d="M2 6h44v30H26v4h8v4H14v-4h8v-4H2V6Zm4 4v22h36V10H6Z" />
                      <path fill="#fff" d="M20 36h8v4h-8z" />
                    </svg>
                  </button>
                  <button className="top-how-to-buy__button">
                    <span>Mobile</span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                      <path fill="#000" d="M33 0h-3v6H12v42h21V0ZM18 42h-3v-3h3v3Zm0-6h-3v-3h3v3Zm0-6h-3v-3h3v3Zm6 12h-3v-3h3v3Zm0-6h-3v-3h3v3Zm0-6h-3v-3h3v3Zm6 12h-3v-3h3v3Zm0-6h-3v-3h3v3Zm0-6h-3v-3h3v3Zm0-6H15V12h15v12Z" />
                    </svg>
                  </button>
                  <button className="top-how-to-buy__button">
                    <span>CB Wallet</span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M27.0103 19.9902H18.9897V28.0109H27.0103V19.9902Z" fill="#155DF7" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 10V12H6V36H8V38H10V40H12V42H34V40H36V38H38V36H40V12H38V10H36V8H34V6H12V8H10V10H8ZM34.1249 17.1553H32.4134V15.4438H30.7019V13.7322H28.9903V12.0207H17.0097V13.7322H15.2981V15.4438H13.5866V17.1553H11.8751V30.8475H13.5866V32.559H15.2981V34.2706H17.0097V35.9821H28.9903V34.2706H30.7019V32.559H32.4134V30.8475H34.1249V17.1553Z" fill="#155DF7" />
                    </svg>
                  </button>
                </div>
                <div style={{ paddingTop: "40px"}} className="top-how-to-buy__container">
                  <div className="top-how-to-buy__book active book-top-how-to-buy">
                    <div className="book-top-how-to-buy__box">
                      <div data-watch-threshold="0.5" data-watch-once data-watch className="book-top-how-to-buy__item-first-page">
                        <div className="book-top-how-to-buy__item-first-page-lables">
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box-active.svg" alt="Icon" />
                            <img src="img/how-to-buy/desktop.svg" alt="Icon" />
                          </div>
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box.svg" alt="Icon" />
                            <img src="img/how-to-buy/mobile.svg" alt="Icon" />
                          </div>
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box.svg" alt="Icon" />
                            <img src="img/how-to-buy/wallet.svg" alt="Icon" />
                          </div>
                        </div>
                        <div className="book-top-how-to-buy__item-first-page-body">
                          <h2 className="book-top-how-to-buy__item-first-page-title">
                            <span>H</span><span>o</span><span>w</span> <span>i</span><span>t</span><span>o</span> <span>i</span><span>G</span><span>e</span><span>t</span> <br />
                            <span className="orange">$</span><span className="orange">M</span><span className="orange">O</span><span className="orange">C</span><span className="orange">H</span><span className="orange">I</span>
                          </h2>
                          <p>ON DESKTOP</p>
                        </div>
                        <div className="book-top-how-to-buy__item-label">Page 1</div>
                      </div>
                      <div className="book-top-how-to-buy__item-wrapper">
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              Introduction
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                Mochi is on <span className="base-icon">Base</span> The
                                Layer 2 blockchain by Coinbase.
                              </p>
                              <p>
                                You’ll need to add Base Network to your wallet and
                                bridge ETH in order to come over!
                              </p>
                              <p>
                                It’s very easy and we’ll guide you through it in a
                                few simple steps!
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Page 2</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>1</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                Go to ‘Settings’ in your wallet and find the
                                networks section.
                              </p>
                              <p>
                                Add a network manually and enter the following info
                                for Base:
                              </p>
                              <p>
                                Network Name: Base <br />
                                RPC Endpoint:
                                <a target="_blank" href="https://mainnet.base.org/">https://mainnet.base.org/</a>
                                <br />
                                Chain ID: 8453 <br />
                                Currency Symbol: ETH <br />
                                Block Explorer:
                                <a target="_blank" href="https://mainnet.base.org/">https://basescan.org</a>
                              </p>
                              <a className="blue-button" target="_blank" href="https://chainlist.org/chain/8453">CONNECT TO BASE</a>
                              <p>
                                Once saved, you should be able to connect to Base by
                                selecting it from the network selection menu.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Page 3</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="book-top-how-to-buy__item-wrapper">
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>2</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                Now you’ll need to deposit some ETH onto Base! Here
                                you have a couple options:
                              </p>
                              <p>
                                1. Withdraw ETH to your Base wallet from Coinbase,
                                Binance, Byit or OKX Make sure to select Base as the
                                withdrawal network!
                              </p>
                              <p>
                                2. Bridge ETH to Base from another chain using these
                                bridges: <br />
                                - Official Base Bridge
                                <a target="_blank" href="https://bridge.base.org/deposit">https://bridge.base.org/deposit</a>, <br />
                                - Orbiter
                                <a target="_blank" href="https://www.orbiter.finance/">https://www.orbiter.finance/</a>, <br />
                                - Stargate
                                <a target="_blank" href="https://stargate.finance/">https://stargate.finance/</a>,
                              </p>
                              <p>
                                To use these bridges simply connect your wallet,
                                select the network you want to bridge from, choose
                                Base as the network to bridge to, and input the
                                amount of ETH you would like to bridge!
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Page 4</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>3</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                1. In your wallet, switch the network to Base in the
                                network dropdown menu
                              </p>
                              <p>
                                2. Go to
                                <a target="_blank" href="https://www.sushi.com/swap">https://www.sushi.com/swap</a>
                              </p>
                              <p>3. Connect your wallet</p>
                              <p>
                                4. In the bottom swap field, select a token and
                                input the official $MOCHI token address
                                <span className="break-word">0xF6e932Ca12afa26665dC4dDE7e27be02A7c02e50</span>
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Page 5</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                      </div>
      
                      <div className="book-top-how-to-buy__item-last-page">
                        <div className="book-top-how-to-buy__item-body">
                          <h3 className="book-top-how-to-buy__item-title">
                            STEP <span>4</span>
                          </h3>
                          <div className="book-top-how-to-buy__item-text">
                            <p>Perform the swap.</p>
                            <p>1. Enter an amount of ETH</p>
                            <p>
                              2. Set the slippage to 3-4% by clicking on the
                              settings wheel and adjusting it
                            </p>
                            <p>3. Press Swap</p>
                            <p>4. Confirm the transaction in your wallet</p>
                          </div>
                        </div>
                        <div className="book-top-how-to-buy__item-label">Page 6</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "none" }} className="top-how-to-buy__book book-top-how-to-buy">
                    <div className="book-top-how-to-buy__box">
                      <div data-watch-threshold="0.5" data-watch-once data-watch className="book-top-how-to-buy__item-first-page">
                        <div className="book-top-how-to-buy__item-first-page-lables">
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box.svg" alt="Icon" />
                            <img src="img/how-to-buy/desktop.svg" alt="Icon" />
                          </div>
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box-active.svg" alt="Icon" />
                            <img src="img/how-to-buy/mobile.svg" alt="Icon" />
                          </div>
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box.svg" alt="Icon" />
                            <img src="img/how-to-buy/wallet.svg" alt="Icon" />
                          </div>
                        </div>
                        <div className="book-top-how-to-buy__item-first-page-body">
                          <h2 className="book-top-how-to-buy__item-first-page-title">
                            <span>H</span><span>o</span><span>w</span> <span>i</span><span>t</span><span>o</span> <span>i</span><span>B</span><span>u</span><span>y</span> <br />
                            <span className="orange">$</span><span className="orange">M</span><span className="orange">O</span><span className="orange">C</span><span className="orange">H</span><span className="orange">I</span>
                          </h2>
                          <p>ON MOBILE</p>
                        </div>
                        <div className="book-top-how-to-buy__item-label">Mochi</div>
                      </div>
                      <div className="book-top-how-to-buy__item-wrapper">
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>1</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>2</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="book-top-how-to-buy__item-wrapper">
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>3</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>4</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                      </div>
      
                      <div className="book-top-how-to-buy__item-last-page">
                        <div className="book-top-how-to-buy__item-label">Mochi</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "none" }} className="top-how-to-buy__book book-top-how-to-buy">
                    <div className="book-top-how-to-buy__box">
                      <div data-watch-threshold="0.5" data-watch-once data-watch className="book-top-how-to-buy__item-first-page">
                        <div className="book-top-how-to-buy__item-first-page-lables">
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box.svg" alt="Icon" />
                            <img src="img/how-to-buy/desktop.svg" alt="Icon" />
                          </div>
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box.svg" alt="Icon" />
                            <img src="img/how-to-buy/mobile.svg" alt="Icon" />
                          </div>
                          <div className="book-top-how-to-buy__item-first-page-lable">
                            <img src="img/how-to-buy/label-box-active.svg" alt="Icon" />
                            <img src="img/how-to-buy/wallet.svg" alt="Icon" />
                          </div>
                        </div>
                        <div className="book-top-how-to-buy__item-first-page-body">
                          <h2 className="book-top-how-to-buy__item-first-page-title">
                            <span>H</span><span>o</span><span>w</span> <span>i</span><span>t</span><span>o</span> <span>i</span><span>B</span><span>u</span><span>y</span> <br />
                            <span className="orange">$</span><span className="orange">M</span><span className="orange">O</span><span className="orange">C</span><span className="orange">H</span><span className="orange">I</span>
                          </h2>
                          <p>ON CB WALLET</p>
                        </div>
                        <div className="book-top-how-to-buy__item-label">Mochi</div>
                      </div>
                      <div className="book-top-how-to-buy__item-wrapper">
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>1</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>2</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="book-top-how-to-buy__item-wrapper">
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>3</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                        <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
                          <div className="book-top-how-to-buy__item-body">
                            <h3 className="book-top-how-to-buy__item-title">
                              STEP <span>4</span>
                            </h3>
                            <div className="book-top-how-to-buy__item-text">
                              <p>
                                You need to add the Base Network to your wallet of
                                choice.
                              </p>
                              <p>
                                Check out the official @BuildOnBase docs on how here
                              </p>
                              <p>
                                For a quicker way, use
                                <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                                and add Base from there.
                              </p>
                            </div>
                          </div>
                          <div className="book-top-how-to-buy__item-label">Mochi</div>
                          <button type="button" className="book-top-how-to-buy__item-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                      </div>
      
                      <div className="book-top-how-to-buy__item-last-page">
                        <div className="book-top-how-to-buy__item-label">Mochi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="how-to-buy__bottom bottom-how-to-buy">
                <div data-prlx-parent className="bottom-how-to-buy__bacground">
                  <i></i>
                  <img loading="lazy" data-prlx src="img/hero/sky.jpg" alt="Sky Image" />
                  <img loading="lazy" src="img/how-to-buy/floor.png" alt="Floor Image" />
                </div>
                <div className="bottom-how-to-buy__container">
                  <h2 data-watch-threshold="0.5" data-watch-once data-watch className="bottom-how-to-buy__title">
                    <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span>
                    <span>i</span> <span className="orange">&</span> <span>i</span>
                    <span>U</span><span>t</span><span>i</span><span>l</span><span>i</span><span>t</span><span>i</span><span>e</span><span>s</span>
                  </h2>
                  <div className="bottom-how-to-buy__items">
                    <div className="bottom-how-to-buy__item active">
                      <img loading="lazy" src="img/how-to-buy/01.png" alt="Cat-1 Image" />
                    </div>
                    <div className="bottom-how-to-buy__item">
                      <img loading="lazy" src="img/how-to-buy/02.png" alt="Cat-2 Image" />
                    </div>
                    <div className="bottom-how-to-buy__item">
                      <img loading="lazy" src="img/how-to-buy/03.png" alt="Cat-3 Image" />
                    </div>
                  </div>
                </div>
                <div className="bottom-how-to-buy__buttons">
                  <a target="_blank" href="https://t.me/Mochi_Inspector_bot" className="bottom-how-to-buy__button active"><span>Mochi Inspector Bot</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 19V18H8V17H9V16H10V15H11V14H12V13H13V12H14V11H15V10H16V9H17V15H19V5H9V7H15V8H14V9H13V10H12V11H11V12H10V13H9V14H8V15H7V16H6V17H5V19H7Z" fill="black" />
                    </svg>
                  </a>
                  <a target="_blank" href="https://opensea.io/collection/mochimonsbase" className="bottom-how-to-buy__button"><span>Mochimons NFTs</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 19V18H8V17H9V16H10V15H11V14H12V13H13V12H14V11H15V10H16V9H17V15H19V5H9V7H15V8H14V9H13V10H12V11H11V12H10V13H9V14H8V15H7V16H6V17H5V19H7Z" fill="black" />
                    </svg>
                  </a>
                  <a target="_blank" href="https://t.me/mochigrant" className="bottom-how-to-buy__button"><span>Coinbase Grant</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 19V18H8V17H9V16H10V15H11V14H12V13H13V12H14V11H15V10H16V9H17V15H19V5H9V7H15V8H14V9H13V10H12V11H11V12H10V13H9V14H8V15H7V16H6V17H5V19H7Z" fill="black" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
            <section className="page__road-map road-map">
              <div className="road-map__container">
                <h2 data-watch-threshold="0.5" data-watch-once data-watch className="road-map__title">
                  <span>R</span><span>O</span><span>A</span><span>D</span><span>M</span><span>A</span><span>P</span>
                </h2>
                <div data-watch-threshold="0.5" data-watch-once data-watch data-prlx-parent className="road-map__image">
                  <img loading="lazy" data-prlx src="img/roadmap/01.png" alt="Island with Cats" />
                </div>
                <div data-watch-threshold="0.5" data-watch-once data-watch className="road-map__steps steps-road-map">
                  <div className="steps-road-map__row">
                    <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
                      <h3 className="item-steps-road-map__title">
                        <span>Mochindise</span>
                      </h3>
                      <div className="item-steps-road-map__text">
                        <p>
                          <span>Ready for hats, hoodies and plushies? </span>
                        </p>
                        <p>
                          This cute cat is coming offchain for a moment in the form
                          of merchandise so all Mochi Maxi’s can have a piece of the
                          orange fur-ball in real life.
                        </p>
                        <p>
                          All profits will go back into the project, and a
                          percentage will go to charity.
                        </p>
                      </div>
                    </div>
                    <div className="steps-road-map__row-road">
                      <div className="steps-road-map__row-road-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="879" height="164" viewBox="0 0 879 164" fill="none">
                          <path d="M0 1H759.102C917.633 0.999026 917.633 163 759.102 163" stroke="black" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="steps-road-map__row">
                    <div className="steps-road-map__row-road">
                      <div className="steps-road-map__row-road-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="566" height="164" viewBox="0 0 566 164" fill="none">
                          <path d="M566 1H77.5115C-24.5038 0.999026 -24.5038 163 77.5115 163" stroke="black" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
                      <h3 className="item-steps-road-map__title">
                        <span>Mochimon PFP NFTs</span>
                      </h3>
                      <div className="item-steps-road-map__text">
                        <p>
                          Profile pictures for the whole $MOCHI family to show off
                          as Mochi becomes the face of catcoins.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="steps-road-map__row">
                    <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
                      <h3 className="item-steps-road-map__title">
                        <span>Tamamochi — <br />
                          Mochi’s own NFT <br />
                          Game.</span>
                      </h3>
                      <div className="item-steps-road-map__text">
                        <p>
                          Connect with your pet Mochi in an onchain tamagotchi style
                          game that will attract the masses.
                        </p>
                        <p>
                          <span>$MOCHI and Mochimons will benefit hugely!</span>
                        </p>
                      </div>
                    </div>
                    <div className="steps-road-map__row-road">
                      <div className="steps-road-map__row-road-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="203" height="171" viewBox="0 0 203 171" fill="none">
                          <path d="M202 171V58.5C202 27.0198 176.48 1.5 145 1.5H0" stroke="black" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="steps-road-map__row">
                    <div className="steps-road-map__row-road"></div>
                    <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
                      <h3 className="item-steps-road-map__title">
                        <span>ONCHAIN GIVING & ENABLING</span>
                      </h3>
                      <div className="item-steps-road-map__text">
                        <p>
                          Mochi seeks to use its platform and treasury to give back
                          and enable. Whether it would be donating to great causes,
                          or enabling builders and artists on Base by providing
                          funding, Mochi strives to be a key player in the Base
                          ecosystem and pushes to cultivate the culture onchain.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <a target="_blank" href="https://medium.com/@mochibase/mochi-2023-roadmap-108679a7f4f9" className="road-map__bottom-button"><span>Read More</span><img src="img/icons/arrow.svg" alt="Arrow Icon" /></a>
              </div>
            </section>
            <section className="page__join join">
              <div data-prlx-parent className="join__main-back">
                <i></i>
                <img data-prlx src="img/hero/sky.jpg" alt="Sky Image" />
              </div>
              <div className="join__container">
                <div data-watch-threshold="0.6" data-watch-once data-watch className="join__body">
                  <div className="join__main-block">
                    <h2 className="join__title">
                      <span>J</span><span>o</span><span>i</span><span>n</span><span>i</span><span> </span><span>U</span><span>s</span>
                    </h2>
                    <a target="_blank" href="https://app.uniswap.org/explore/tokens/base/0xf6e932ca12afa26665dc4dde7e27be02a7c02e50" className="join__button"><span>GET NOW</span></a>
                  </div>
                  <div className="join__items">
                    {/* @ts-ignore */}
                    <div className="join__item" style={{ "--i" : 1 }}>
                      <a target="_blank" href="https://www.instagram.com/themochimons" className="join__link">
                        <img src="img/join/01.png" alt="Icon" />
                      </a>
                    </div>
                    {/* @ts-ignore */}
                    <div className="join__item" style={{ "--i": 2 }}>
                      <a target="_blank" href="https://warpcast.com/~/channel/mochi" className="join__link">
                        <img src="img/join/02.png" alt="Icon" />
                      </a>
                    </div>
                    {/* @ts-ignore */}
                    <div className="join__item" style={{ "--i": 3 }}>
                      <a target="_blank" href="https://t.me/mochientry" className="join__link">
                        <img src="img/join/03.svg" alt="Icon" />
                      </a>
                    </div>
                    {/* @ts-ignore */}
                    <div className="join__item" style={{ "--i": 4 }}>
                      <a target="_blank" href="https://medium.com/@mochibase" className="join__link">
                        <img src="img/join/04.svg" alt="Icon" />
                      </a>
                    </div>
                    {/* @ts-ignore */}
                    <div className="join__item" style={{ "--i": 5 }}>
                      <a target="_blank" href="https://www.dextools.io/app/en/base/pair-explorer/0xfcc89a1f250d76de198767d33e1ca9138a7fb54b?t=1717200972142" className="join__link">
                        <img src="img/join/05.svg" alt="Icon" />
                      </a>
                    </div>
                    {/* @ts-ignore */}
                    <div className="join__item" style={{ "--i": 6 }}>
                      <a target="_blank" href="https://twitter.com/mochi_token" className="join__link">
                        <img src="img/join/06.svg" alt="Icon" />
                      </a>
                    </div>
                  </div>
                  <div className="join__background">
                    <img src="img/join/cat.svg" alt="Cat Icon" />
                  </div>
                </div>
              </div>
            </section>
            <div className="page__line line">
              <div className="line__line">
                <div className="line__line-row">
                  <div className="line__line-item line__line-item--mob">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--mob">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item">
                    <img src="img/line/01.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                </div>
                <div className="line__line-row">
                  <div className="line__line-item line__line-item--mob">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--mob">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--tab">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item">
                    <img src="img/line/01.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/02.png" alt="Smile Icon" />
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <span>Based on Base</span>
                  </div>
                  <div className="line__line-item line__line-item--pc">
                    <img src="img/line/03.png" alt="Smile Icon" />
                  </div>
                </div>
              </div>
            </div>
            <button type="button" data-popup="#popup" style={{ display: "none" }}></button>
          </main>
          <footer data-watch-threshold="0.6" data-watch-once data-watch className="footer">
            <div className="footer__container">
              <div className="footer__box">
                <div className="footer__top">
                  <div className="footer__columns">
                    <div className="footer__column">
                      <a target="_blank" href="#" data-goto=".page__how-to-buy" className="footer__column-item active">how to get</a>
                      <a target="_blank" href="https://t.me/Mochi_Inspector_bot" className="footer__column-item">Inspector bot</a>
                      <a href="#" data-goto=".page__join" className="footer__column-item">CONTACT US</a>
                    </div>
                    <div className="footer__column">
                      <a target="_blank" href="https://opensea.io/collection/mochimonsbase" className="footer__column-item">Mochimons NFTs</a>
                      <a target="_blank" href="https://zora.co/collect/base:0xf559cd78d14f879c0e974ce38ce5fe6cd36c804c" className="footer__column-item">Mochimons Media</a>
                      <a target="_blank" href="https://mochithecatcoin.com/#About" className="footer__column-item">About</a>
                    </div>
                  </div>
                  <div className="footer__social">
                    <a target="_blank" href="https://www.dextools.io/app/en/base/pair-explorer/0xfcc89a1f250d76de198767d33e1ca9138a7fb54b?t=1717200972142" className="footer__social-item">
                      <img src="img/footer/01.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://t.me/mochientry" className="footer__social-item">
                      <img src="img/footer/02.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/themochimons" className="footer__social-item">
                      <img src="img/footer/06.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://medium.com/@mochibase" className="footer__social-item">
                      <img src="img/footer/04.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://x.com/mochi_token" className="footer__social-item">
                      <img src="img/footer/05.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://warpcast.com/~/channel/mochi" className="footer__social-item">
                      <img src="img/footer/07.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://opensea.io/collection/mochimonsbase" className="footer__social-item">
                      <img src="img/footer/08.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://magiceden.io/collections/base/0x949bed087ff0241e04e98d807de3c3dd97eaa381" className="footer__social-item">
                      <img src="img/footer/09.svg" alt="Icon" />
                    </a>
                  </div>
                </div>
                <div className="footer__bottom">
                  <div className="footer__bottom-top">
                    <a href="mailto:info@mochithecatcoin.com" className="footer__email"><span>INFO@MOCHITHECATCOIN.COM</span><img src="img/footer/email.svg" alt="Email Icon" /></a>
                    <div className="footer__copy">2024 © ALL RIGHTS RESERVED</div>
                  </div>
                  <div className="footer__bottom-bottom">
                    <a href="https://t.me/osnovoco"><span>Designed by Osnovo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="18" viewBox="0 0 29 18" fill="none">
                        <path d="M21.6898 0.59668H15.3555L18.5227 5.87484L21.6898 11.153L24.8563 5.87484L28.0235 0.59668H21.6898Z" fill="url(#paint0_linear_418_5)"></path>
                        <path d="M8.73308 17.4011H16.4869L12.6104 10.9397L8.73308 4.47754L4.8558 10.9397L0.978516 17.4011H8.73308Z" fill="url(#paint1_linear_418_5)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_418_5" x1="24.3973" y1="-2.77552" x2="16.5038" y2="8.84742" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#003AF9"></stop>
                            <stop offset="1" stopColor="#00ACFF"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_418_5" x1="15.7805" y1="5.14307" x2="5.34157" y2="23.3002" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFDF00"></stop>
                            <stop offset="1" stopColor="#FF6100"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__decor">
              <img loading="lazy" src="img/footer/cat.png" alt="Cat Image" />
            </div>
          </footer>
      
        </div>
        <div id="popup" aria-hidden="true" className="popup">
          <div className="popup__wrapper">
            <div className="popup__content">
              <button data-close type="button" className="popup__close">
                <img src="img/line/close.png" alt="" />
              </button>
              <div className="popup__text">$MOCHI Contract Address copied successfully</div>
              <button data-close className="popup__button"><span>Ok</span></button>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}