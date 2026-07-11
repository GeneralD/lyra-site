// Every user-facing string on the site, per locale. Values ending in
// `Html` may carry minimal inline markup (span/br with class only) and
// are rendered with `set:html`; everything else is plain text.
export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const asLocale = (value: string | undefined): Locale =>
  locales.find((l) => l === value) ?? "en";

export type FeatureKey =
  | "lyrics"
  | "video"
  | "ripple"
  | "decode"
  | "ai"
  | "cli"
  | "spectrum";

type Card = { readonly title: string; readonly body: string };
type CliEntry = { readonly cmd: string; readonly note: string };

type Copy = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly hero: {
    readonly badge: string;
    readonly titleHtml: string;
    readonly leadHtml: string;
    readonly ctaInstall: string;
    readonly ctaGithub: string;
    readonly subNote: string;
  };
  readonly demo: {
    readonly headingHtml: string;
    readonly lead: string;
    readonly windowLabel: string;
    readonly imgAlt: string;
  };
  readonly features: {
    readonly headingHtml: string;
    readonly lead: string;
    readonly cards: Readonly<Record<FeatureKey, Card>>;
  };
  readonly install: {
    readonly headingHtml: string;
    readonly lead: string;
    readonly installHeading: string;
    readonly readme: { readonly pre: string; readonly label: string; readonly post: string };
    readonly cliHeading: string;
    readonly cli: readonly CliEntry[];
  };
  readonly footer: {
    readonly tagline: string;
    readonly docs: string;
    readonly license: string;
    readonly madeWith: string;
  };
  readonly notFound: {
    readonly title: string;
    readonly description: string;
    readonly message: string;
    readonly back: string;
  };
};

export const copy = {
  en: {
    meta: {
      title: "Lyra — Desktop lyrics overlay & video wallpaper for macOS",
      description:
        "Lyra turns your macOS desktop into a living, lyric-synced backdrop: synced lyrics overlay, video wallpaper, mouse-reactive ripples, a matrix-style decode animation, and a real-time audio spectrum.",
    },
    hero: {
      badge: "for macOS 14+",
      titleHtml: 'Your desktop,<br /> <span class="text-lyric">set to music.</span>',
      leadHtml:
        'Lyra paints your macOS desktop with a living video wallpaper, floats <span class="text-ink">synced lyrics</span> right over it — decoded line by line, matrix-style — and sets a <span class="text-ink">real-time spectrum</span> dancing to your sound.',
      ctaInstall: "brew install lyra",
      ctaGithub: "View on GitHub",
      subNote: "Free & open source · Homebrew, Mint, or build from source",
    },
    demo: {
      headingHtml: 'See it <span class="text-decode">in motion</span>',
      lead: "Lyrics decode into place over a video wallpaper that ripples as your cursor passes. This is the real thing — not a mockup.",
      windowLabel: "lyra · desktop overlay",
      imgAlt: "Lyra running on macOS: synced lyrics decoding over a rippling video wallpaper",
    },
    features: {
      headingHtml: 'Built for the <span class="text-lyric">moment</span>',
      lead: "Seven things Lyra does that turn a static desktop into a soundtrack.",
      cards: {
        lyrics: {
          title: "Every word, on cue",
          body: "Time-synced lyrics from LRCLIB float over your desktop and highlight line by line in a warm gold gradient.",
        },
        video: {
          title: "A desktop that moves",
          body: "Set any local file, HTTP stream, or YouTube video as a living wallpaper playing behind everything you do.",
        },
        ripple: {
          title: "Reacts to your touch",
          body: "Mouse-reactive ripples distort the wallpaper as your cursor sweeps across the screen.",
        },
        decode: {
          title: "Matrix-style reveal",
          body: "Each lyric decodes into place with a cascading green animation, straight out of the terminal.",
        },
        ai: {
          title: "Knows what's playing",
          body: "OpenAI-compatible AI extracts title and artist from anything — even untagged tracks — so lyrics just appear.",
        },
        cli: {
          title: "Runs from your terminal",
          body: "A clean CLI (start, stop, config, track) and brew-services daemon keep Lyra exactly where you want it.",
        },
        spectrum: {
          title: "Sound you can see",
          body: "A cava-inspired spectrum analyzer taps the now-playing audio and dances along any edge of your screen — stereo, gradient-tinted, fully tunable. macOS 14.4+.",
        },
      },
    },
    install: {
      headingHtml: 'Up and running in <span class="text-decode">30 seconds</span>',
      lead: "One tap, one install, one command. Requires macOS 14+.",
      installHeading: "Install with Homebrew",
      readme: { pre: "Prefer Mint or source? See the ", label: "README", post: "." },
      cliHeading: "The CLI",
      cli: [
        { cmd: "lyra start", note: "launch the overlay" },
        { cmd: "lyra stop", note: "tear it down" },
        { cmd: "lyra config", note: "edit settings" },
        { cmd: "lyra track", note: "set the current song" },
        { cmd: "lyra daemon", note: "run in the background" },
      ],
    },
    footer: {
      tagline: "Desktop lyrics overlay & video wallpaper for macOS.",
      docs: "Docs",
      license: "License",
      madeWith: "Made with Swift 6 for macOS",
    },
    notFound: {
      title: "404 — Lyra",
      description: "That page decoded into nothing.",
      message: "This page decoded into nothing.",
      back: "← back to Lyra",
    },
  },
  ja: {
    meta: {
      title: "Lyra — macOS のデスクトップ歌詞オーバーレイ & 動画壁紙",
      description:
        "Lyra は macOS のデスクトップを音楽と同期する生きた背景に変えます: 同期歌詞オーバーレイ、動画壁紙、マウスに反応する波紋、マトリックス風デコード演出、そしてリアルタイムのオーディオスペクトラム。",
    },
    hero: {
      badge: "macOS 14+ 対応",
      titleHtml: 'デスクトップが、<br /> <span class="text-lyric">音楽に染まる。</span>',
      leadHtml:
        'Lyra は macOS のデスクトップを生きた動画壁紙に変え、その上に<span class="text-ink">同期歌詞</span>をマトリックス風デコードで一行ずつ浮かべ、<span class="text-ink">リアルタイムのスペクトラム</span>を音に合わせて躍らせます。',
      ctaInstall: "brew install lyra",
      ctaGithub: "GitHub で見る",
      subNote: "無料 & オープンソース · Homebrew / Mint / ソースからビルド",
    },
    demo: {
      headingHtml: '<span class="text-decode">実際の動き</span>を見る',
      lead: "カーソルが通るたびに波打つ動画壁紙の上で、歌詞がデコードされながら現れます。モックアップではなく、実際の動作映像です。",
      windowLabel: "lyra · desktop overlay",
      imgAlt: "macOS で動作する Lyra: 波打つ動画壁紙の上で同期歌詞がデコードされる様子",
    },
    features: {
      headingHtml: 'その<span class="text-lyric">瞬間</span>のために',
      lead: "静的なデスクトップをサウンドトラックに変える、Lyra の7つの機能。",
      cards: {
        lyrics: {
          title: "すべての歌詞を、そのタイミングで",
          body: "LRCLIB の同期歌詞がデスクトップに浮かび、ゴールドのグラデーションで一行ずつハイライトされます。",
        },
        video: {
          title: "動き続けるデスクトップ",
          body: "ローカルファイル、HTTP ストリーム、YouTube 動画を、作業の背後で再生され続ける生きた壁紙に。",
        },
        ripple: {
          title: "触れれば、応える",
          body: "カーソルの動きに反応する波紋エフェクトが、画面をなでるたびに壁紙を揺らします。",
        },
        decode: {
          title: "マトリックス風デコード",
          body: "歌詞が一行ずつ、ターミナル譲りの緑のカスケード演出でデコードされて現れます。",
        },
        ai: {
          title: "いま鳴っている曲を知っている",
          body: "OpenAI 互換の AI がタイトルとアーティストを抽出。タグのないトラックでも歌詞がそのまま現れます。",
        },
        cli: {
          title: "ターミナルから操る",
          body: "クリーンな CLI(start / stop / config / track)と brew services デーモンで、Lyra を思いどおりに。",
        },
        spectrum: {
          title: "音が、見える",
          body: "cava 風スペクトラムアナライザが再生中の音声をタップし、画面の好きな辺でビートに合わせて踊ります。ステレオ・グラデーション対応、細部まで調整可能。macOS 14.4+。",
        },
      },
    },
    install: {
      headingHtml: '<span class="text-decode">30秒</span>で使い始める',
      lead: "tap して、install して、コマンド一発。macOS 14+ が必要です。",
      installHeading: "Homebrew でインストール",
      readme: { pre: "Mint やソースビルド派は ", label: "README", post: " へ。" },
      cliHeading: "CLI リファレンス",
      cli: [
        { cmd: "lyra start", note: "オーバーレイを起動" },
        { cmd: "lyra stop", note: "停止する" },
        { cmd: "lyra config", note: "設定を編集" },
        { cmd: "lyra track", note: "再生中の曲を指定" },
        { cmd: "lyra daemon", note: "バックグラウンドで常駐" },
      ],
    },
    footer: {
      tagline: "macOS のためのデスクトップ歌詞オーバーレイ & 動画壁紙。",
      docs: "ドキュメント",
      license: "ライセンス",
      madeWith: "Swift 6 で、macOS のために",
    },
    notFound: {
      title: "404 — Lyra",
      description: "このページは何にもデコードされませんでした。",
      message: "このページは、何にもデコードされませんでした。",
      back: "← Lyra に戻る",
    },
  },
} as const satisfies Record<Locale, Copy>;
