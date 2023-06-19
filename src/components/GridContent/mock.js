export default {
  title: 'news coverage and some surprises',
  html: `
  <p>
    The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some
    surprises at the machine’s performance. This post details some background information on the experience of
    porting Firefox to run natively on these CPUs.
  </p>
  <p>
    We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to
    know about the new architecture, before moving on to the concept of Universal Binaries.
  </p>
  <p>
    We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and
    discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various
    other improvements that are in the pipeline.
    </p>
  `,
  background: false,
};