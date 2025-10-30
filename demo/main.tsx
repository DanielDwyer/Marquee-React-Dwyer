import React from 'react';
import { createRoot } from 'react-dom/client';
import { Marquee } from 'marquee-react-dwyer';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <div className="wrap">
      <header className="masthead">
        <h1 className="brand">The Marquee Times</h1>
        <div className="dateline">Today’s Edition · All the scroll that’s fit to print</div>
      </header>

      <section className="hero">
        <div>
          <h2>Breaking: Headlines that don’t sit still</h2>
          <p className="lead">
            A modern, typed marquee component for React, built with hooks and designed to cruise
            across your layout with minimal setup. Bring motion to your headlines, alerts, scores,
            or stock tickers using a simple, flexible API.
          </p>
        </div>
        <div className="ticker ticker-lg">
          <Marquee
            texts={[
              'Extra! Extra! Read all about it…',
              'Typed API, ESM + CJS builds, zero deps (besides React)',
              'Customize speed, order, and element with ease',
              'Now featuring a delightful newspaper demo',
            ]}
            changeIntervalMs={2500}
            crossTimeMs={12000}
            random
            as="h2"
            color="#b23a48"
          />
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Opinion: Lorem Ipsum Takes the City</h3>
          <p className="byline">By A. N. Typesetter</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem dapibus,
            pretium velit et, luctus quam. Suspendisse fringilla, sapien eu fermentum dignissim,
            lectus mi aliquet massa, a tincidunt purus libero in dui.
          </p>
          <p>
            Curabitur ut volutpat mi. Vivamus aliquam, justo et convallis vulputate, elit velit
            pulvinar arcu, id hendrerit lacus lacus non ex.
          </p>
        </article>
        <article className="card">
          <h3>Local: Community Rallies Behind Scrolling Text</h3>
          <p className="byline">By Scroll E. McScrollface</p>
          <p>
            Quisque aliquet, lacus a eleifend aliquet, turpis lectus facilisis nibh, id malesuada
            arcu lectus sed dolor. Nullam maximus nisi sit amet purus pulvinar bibendum.
          </p>
          <div className="ticker">
            <Marquee
              texts={[
                'Markets +2.4%',
                'Weather: sunny with scattered keyframes',
                'Sports: home team wins in overtime',
                'Travel: expect smooth transitions',
              ]}
              changeIntervalMs={1800}
              crossTimeMs={9000}
              as="p"
              color="#1d1b16"
            />
          </div>
        </article>
        <article className="card">
          <h3>Tech: Configurable Animations on Deadline</h3>
          <p className="byline">By C. S. Styles</p>
          <p>
            Sed posuere, arcu a tristique viverra, lorem lacus laoreet diam, a suscipit est lectus
            id felis. Praesent a mauris id lorem feugiat vehicula vitae a mauris.
          </p>
          <p>
            Donec dictum, risus sit amet cursus accumsan, lacus magna tempus dui, ac convallis lorem
            lorem ut purus.
          </p>
        </article>
      </section>

      <footer className="footer">© {new Date().getFullYear()} The Marquee Times</footer>
    </div>
  </React.StrictMode>,
);
