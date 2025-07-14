'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}

interface Subsection {
  id: string;
  title: string;
  description: string;
  content: ColorGroup[] | TypeStyle[] | SpacingToken[] | RadiusToken[];
}

interface ColorGroup {
  name: string;
  colors: {
    name: string;
    variable: string;
    description?: string;
  }[];
}

interface TypeStyle {
  name: string;
  className: string;
  specs: {
    size: string;
    lineHeight: string;
    weight: string;
  }
}

interface SpacingToken {
  name: string;
  variable: string;
  value: string;
  description: string;
}

interface RadiusToken {
  name: string;
  variable: string;
  value: string;
  description: string;
}

const COLOR_TOKENS: ColorGroup[] = [
  {
    name: 'Backdrop',
    colors: [
      { name: 'Overlay', variable: '--backdrop-overlay', description: 'Used for modal/dialog backgrounds' }
    ]
  },
  {
    name: 'Border',
    colors: [
      { name: 'Divider', variable: '--border-divider', description: 'Used for borders, dividers, and separators' }
    ]
  },
  {
    name: 'Background',
    colors: [
      { name: 'Primary', variable: '--background-primary', description: 'Used for main surfaces' },
      { name: 'Secondary', variable: '--background-secondary', description: 'Used for secondary surfaces' },
      { name: 'Tertiary', variable: '--background-tertiary', description: 'Used for tertiary surfaces' }
    ]
  },
  {
    name: 'Text',
    colors: [
      { name: 'Primary', variable: '--text-primary', description: 'Used for main content text' },
      { name: 'Secondary', variable: '--text-secondary', description: 'Used for less prominent text' },
      { name: 'Disabled', variable: '--text-disabled', description: 'Used for disabled text states' }
    ]
  },
  {
    name: 'Actions',
    colors: [
      { name: 'Primary', variable: '--action-primary', description: 'Used for primary buttons and links' },
      { name: 'Primary Hover', variable: '--action-primary-hover', description: 'Used for primary button/link hover states' },
      { name: 'Destructive', variable: '--action-destructive', description: 'Used for destructive actions' },
      { name: 'Destructive Hover', variable: '--action-destructive-hover', description: 'Used for destructive action hover states' },
      { name: 'Disabled', variable: '--action-disabled', description: 'Used for disabled actions' },
      { name: 'On Background', variable: '--action-on-background', description: 'Used for text/icons on colored backgrounds' }
    ]
  },
  {
    name: 'Alerts',
    colors: [
      { name: 'Error Icon', variable: '--alert-error-icon', description: 'Used for error alert icons' },
      { name: 'Error Background', variable: '--alert-error-background', description: 'Used for error alert backgrounds' },
      { name: 'Success Icon', variable: '--alert-success-icon', description: 'Used for success alert icons' },
      { name: 'Success Background', variable: '--alert-success-background', description: 'Used for success alert backgrounds' },
      { name: 'Info Icon', variable: '--alert-info-icon', description: 'Used for info alert icons' },
      { name: 'Info Background', variable: '--alert-info-background', description: 'Used for info alert backgrounds' },
      { name: 'Warning Icon', variable: '--alert-warning-icon', description: 'Used for warning alert icons' },
      { name: 'Warning Background', variable: '--alert-warning-background', description: 'Used for warning alert backgrounds' }
    ]
  },
  {
    name: 'Tooltip',
    colors: [
      { name: 'Background', variable: '--tooltip-background', description: 'Used for tooltip backgrounds' },
      { name: 'Text', variable: '--tooltip-text', description: 'Used for tooltip text' }
    ]
  }
];

const typographyStyles: TypeStyle[] = [
  {
    name: 'H1',
    className: 'h1',
    specs: {
      size: '40px',
      lineHeight: '120%',
      weight: '700'
    }
  },
  {
    name: 'H2',
    className: 'h2',
    specs: {
      size: '32px',
      lineHeight: '120%',
      weight: '700'
    }
  },
  {
    name: 'H3',
    className: 'h3',
    specs: {
      size: '24px',
      lineHeight: '133%',
      weight: '700'
    }
  },
  {
    name: 'H4',
    className: 'h4',
    specs: {
      size: '20px',
      lineHeight: '160%',
      weight: '700'
    }
  },
  {
    name: 'H5',
    className: 'h5',
    specs: {
      size: '16px',
      lineHeight: '150%',
      weight: '700'
    }
  },
  {
    name: 'H6',
    className: 'h6',
    specs: {
      size: '14px',
      lineHeight: '160%',
      weight: '700'
    }
  },
  {
    name: 'Body 1',
    className: 'body1',
    specs: {
      size: '16px',
      lineHeight: '150%',
      weight: '400'
    }
  },
  {
    name: 'Body 2',
    className: 'body2',
    specs: {
      size: '14px',
      lineHeight: '150%',
      weight: '400'
    }
  },
  {
    name: 'Subtitle 1',
    className: 'subtitle1',
    specs: {
      size: '16px',
      lineHeight: '150%',
      weight: '600'
    }
  },
  {
    name: 'Subtitle 2',
    className: 'subtitle2',
    specs: {
      size: '14px',
      lineHeight: '150%',
      weight: '600'
    }
  },
  {
    name: 'Overline',
    className: 'overline',
    specs: {
      size: '12px',
      lineHeight: '150%',
      weight: '400'
    }
  },
  {
    name: 'Caption',
    className: 'caption',
    specs: {
      size: '12px',
      lineHeight: '166%',
      weight: '400'
    }
  }
];

const componentStyles: TypeStyle[] = [
  {
    name: 'Alert Title',
    className: 'alert-title',
    specs: {
      size: '16px',
      lineHeight: '150%',
      weight: 'Semibold'
    }
  },
  {
    name: 'Avatar Initials',
    className: 'avatar-initials',
    specs: {
      size: '16px',
      lineHeight: '20px',
      weight: 'Regular'
    }
  },
  {
    name: 'Badge Label',
    className: 'badge-label',
    specs: {
      size: '12px',
      lineHeight: '20px',
      weight: 'Regular'
    }
  }
];

const SPACING_TOKENS: SpacingToken[] = [
  {
    name: 'Space 4',
    variable: '--space-4',
    value: '4px',
    description: 'Used for tight spacing between related elements'
  },
  {
    name: 'Space 8',
    variable: '--space-8',
    value: '8px',
    description: 'Default spacing between elements'
  },
  {
    name: 'Space 12',
    variable: '--space-12',
    value: '12px',
    description: 'Medium spacing between elements'
  },
  {
    name: 'Space 16',
    variable: '--space-16',
    value: '16px',
    description: 'Large spacing between elements'
  },
  {
    name: 'Space 24',
    variable: '--space-24',
    value: '24px',
    description: 'Extra large spacing between sections'
  }
];

const RADIUS_TOKENS: RadiusToken[] = [
  {
    name: 'Radius 4',
    variable: '--radius-4',
    value: '4px',
    description: 'Used for small elements like buttons and inputs'
  },
  {
    name: 'Radius 8',
    variable: '--radius-8',
    value: '8px',
    description: 'Used for cards and larger containers'
  },
  {
    name: 'Radius 12',
    variable: '--radius-12',
    value: '12px',
    description: 'Used for modals and floating elements'
  },
  {
    name: 'Radius 16',
    variable: '--radius-16',
    value: '16px',
    description: 'Used for large containers'
  }
];

function SpacingExample({ token }: { token: SpacingToken }) {
  return (
    <div className={styles.spacingExample}>
      <div className={styles.spacingDetails}>
        <div className={styles.spacingName}>{token.value}</div>
        <div className={styles.spacingDescription}>{token.description}</div>
      </div>
      <div className={styles.spacingPreview}>
        <div 
          className={styles.spacingBlock} 
          style={{ 
            width: token.value,
            height: token.value,
          }} 
        />
      </div>
    </div>
  );
}

function RadiusExample({ token }: { token: RadiusToken }) {
  return (
    <div className={styles.spacingExample}>
      <div className={styles.spacingDetails}>
        <div className={styles.spacingName}>{token.value}</div>
        <div className={styles.spacingDescription}>{token.description}</div>
      </div>
      <div className={styles.spacingPreview}>
        <div 
          className={styles.radiusBlock} 
          style={{ 
            borderRadius: token.value
          }}
        />
      </div>
    </div>
  );
}

function ColorSwatch({ color }: { color: { name: string; variable: string; description?: string } }) {
  return (
    <div className={styles.colorItem}>
      <div 
        className={styles.colorSwatch} 
        style={{ backgroundColor: `var(${color.variable})` }}
      />
      <div className={styles.colorInfo}>
        <h3 className={styles.colorName}>{color.name}</h3>
        <code className={styles.colorVariable}>{color.variable}</code>
        {color.description && (
          <p className={styles.colorDescription}>{color.description}</p>
        )}
      </div>
    </div>
  );
}

function ColorGroup({ group }: { group: ColorGroup }) {
  return (
    <div className={styles.colorGroup}>
      <h4 className={styles.groupTitle}>{group.name}</h4>
      <div className={styles.colorGrid}>
        {group.colors?.map((color) => (
          <ColorSwatch key={color.variable} color={color} />
        ))}
      </div>
    </div>
  );
}

function TypeExample({ style }: { style: TypeStyle }) {
  return (
    <div className={styles.typeExample}>
      <div className={styles.typeDetails}>
        <span className={styles.typeDetailLabel}>Name</span>
        <span className={styles.typeDetailValue}>{style.name}</span>
        <span className={styles.typeDetailLabel}>Size</span>
        <span className={styles.typeDetailValue}>{style.specs.size}</span>
        <span className={styles.typeDetailLabel}>Line Height</span>
        <span className={styles.typeDetailValue}>{style.specs.lineHeight}</span>
        <span className={styles.typeDetailLabel}>Weight</span>
        <span className={styles.typeDetailValue}>{style.specs.weight}</span>
      </div>
      <div className={styles.typePreview}>
        <span className={style.className}>
          The quick brown fox jumps over the lazy dog
        </span>
      </div>
    </div>
  );
}

const SECTIONS = [
  {
    id: 'colors',
    title: 'Colors',
    subsections: [
      {
        id: 'palette',
        title: 'Palette',
        description: 'Our semantic color tokens provide consistent meaning across the interface.',
        content: COLOR_TOKENS.filter(g => 
          ['Background', 'Text', 'Border'].includes(g.name)
        )
      },
      {
        id: 'component',
        title: 'Component',
        description: 'Colors used specifically in UI components.',
        content: COLOR_TOKENS.filter(g => 
          ['Actions', 'Alerts', 'Tooltip', 'Backdrop'].includes(g.name)
        )
      }
    ]
  },
  {
    id: 'typography',
    title: 'Typography',
    subsections: [
      {
        id: 'text',
        title: 'Text',
        description: 'Typography styles for content hierarchy and readability.',
        content: typographyStyles
      },
      {
        id: 'component',
        title: 'Component',
        description: 'Typography styles specific to UI components.',
        content: componentStyles
      }
    ]
  },
  {
    id: 'spacing',
    title: 'Spacing',
    subsections: [
      {
        id: 'spacing',
        title: 'Spacing',
        description: 'Consistent spacing units based on a 4px grid system.',
        content: SPACING_TOKENS
      }
    ]
  },
  {
    id: 'radius',
    title: 'Radius',
    subsections: [
      {
        id: 'radius',
        title: 'Corner Radius',
        description: 'Border radius values for consistent component shapes.',
        content: RADIUS_TOKENS
      }
    ]
  }
];

export default function ThemePage() {
  const [activeTab, setActiveTab] = useState('colors');

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  const renderContent = (subsection: Subsection) => {
    if (subsection.id === 'palette' || subsection.id === 'component') {
      return (
        <div className={styles.colorGroups}>
          {(subsection.content as ColorGroup[]).map((group) => (
            <ColorGroup key={group.name} group={group} />
          ))}
        </div>
      );
    }

    if (subsection.id === 'text' || subsection.id === 'component') {
      return (
        <div className={styles.typeStyles}>
          {(subsection.content as TypeStyle[]).map((style) => (
            <TypeExample key={style.name} style={style} />
          ))}
        </div>
      );
    }

    if (subsection.id === 'spacing') {
      return (
        <div className={styles.spacingTokens}>
          {(subsection.content as SpacingToken[]).map((token) => (
            <SpacingExample key={token.name} token={token} />
          ))}
        </div>
      );
    }

    if (subsection.id === 'radius') {
      return (
        <div className={styles.radiusTokens}>
          {(subsection.content as RadiusToken[]).map((token) => (
            <RadiusExample key={token.name} token={token} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.sectionTitle}>Theme</h1>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          Toggle theme mode
        </button>
      </header>

      <nav className={styles.tabs}>
        <ul className={styles.tabList}>
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                className={`${styles.tabButton} ${
                  activeTab === section.id ? styles.active : ''
                }`}
                onClick={() => setActiveTab(section.id)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className={styles.mainContent}>
        {SECTIONS
          .filter((section) => section.id === activeTab)
          .map((section) => (
            <div key={section.id} className={styles.section}>
              {section.subsections.map((subsection) => (
                <div key={subsection.id} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{subsection.title}</h3>
                  <p className={styles.subsectionDescription}>
                    {subsection.description}
                  </p>
                  <div className={styles.content}>
                    {renderContent(subsection)}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </main>
    </div>
  );
} 