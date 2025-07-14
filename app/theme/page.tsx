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
    name: 'Blues',
    colors: [
      { name: '800', variable: '--blue-800' },
      { name: '700', variable: '--blue-700' },
      { name: '600', variable: '--blue-600' },
      { name: '500', variable: '--blue-500' },
      { name: '400', variable: '--blue-400' },
      { name: '300', variable: '--blue-300' },
      { name: '200', variable: '--blue-200' }
    ]
  },
  {
    name: 'Neutrals',
    colors: [
      { name: '800', variable: '--neutral-800', description: 'Black' },
      { name: '700', variable: '--neutral-700' },
      { name: '600', variable: '--neutral-600' },
      { name: '500', variable: '--neutral-500' },
      { name: '400', variable: '--neutral-400' },
      { name: '300', variable: '--neutral-300' },
      { name: '200', variable: '--neutral-200' },
      { name: '100', variable: '--neutral-100' },
      { name: 'White', variable: '--white' }
    ]
  },
  {
    name: 'Teals',
    colors: [
      { name: '800', variable: '--teal-800' },
      { name: '600', variable: '--teal-600' },
      { name: '500', variable: '--teal-500' },
      { name: '400', variable: '--teal-400' },
      { name: '300', variable: '--teal-300' },
      { name: '200', variable: '--teal-200' }
    ]
  },
  {
    name: 'Greens',
    colors: [
      { name: '800', variable: '--green-800' },
      { name: '600', variable: '--green-600' },
      { name: '500', variable: '--green-500' },
      { name: '400', variable: '--green-400' },
      { name: '300', variable: '--green-300' },
      { name: '200', variable: '--green-200' }
    ]
  },
  {
    name: 'Reds',
    colors: [
      { name: '800', variable: '--red-800' },
      { name: '700', variable: '--red-700' },
      { name: '600', variable: '--red-600' },
      { name: '500', variable: '--red-500' },
      { name: '400', variable: '--red-400' },
      { name: '300', variable: '--red-300' },
      { name: '200', variable: '--red-200' }
    ]
  },
  {
    name: 'Yellows',
    colors: [
      { name: '800', variable: '--yellow-800' },
      { name: '600', variable: '--yellow-600' },
      { name: '500', variable: '--yellow-500' },
      { name: '400', variable: '--yellow-400' },
      { name: '300', variable: '--yellow-300' },
      { name: '200', variable: '--yellow-200' }
    ]
  },
  {
    name: 'Chartreuse',
    colors: [
      { name: '600', variable: '--chartreuse-600' },
      { name: '500', variable: '--chartreuse-500' },
      { name: '400', variable: '--chartreuse-400' },
      { name: '300', variable: '--chartreuse-300' },
      { name: '200', variable: '--chartreuse-200' }
    ]
  },
  {
    name: 'Purples',
    colors: [
      { name: '600', variable: '--purple-600' },
      { name: '500', variable: '--purple-500' },
      { name: '400', variable: '--purple-400' },
      { name: '300', variable: '--purple-300' },
      { name: '200', variable: '--purple-200' }
    ]
  },
  {
    name: 'Pinks',
    colors: [
      { name: '600', variable: '--pink-600' },
      { name: '500', variable: '--pink-500' },
      { name: '400', variable: '--pink-400' },
      { name: '300', variable: '--pink-300' },
      { name: '200', variable: '--pink-200' }
    ]
  },
  // Semantic Colors
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
      weight: '600'
    }
  },
  {
    name: 'Avatar Initials',
    className: 'avatar-initials',
    specs: {
      size: '16px',
      lineHeight: '20px',
      weight: '400'
    }
  },
  {
    name: 'Badge Label',
    className: 'badge-label',
    specs: {
      size: '12px',
      lineHeight: '20px',
      weight: '400'
    }
  },
  {
    name: 'Button Large',
    className: 'button-large',
    specs: {
      size: '16px',
      lineHeight: '24px',
      weight: '600'
    }
  },
  {
    name: 'Button Medium',
    className: 'button-medium',
    specs: {
      size: '14px',
      lineHeight: '24px',
      weight: '600'
    }
  },
  {
    name: 'Button Small',
    className: 'button-small',
    specs: {
      size: '12px',
      lineHeight: '22px',
      weight: '600'
    }
  },
  {
    name: 'Input Label',
    className: 'input-label',
    specs: {
      size: '12px',
      lineHeight: '12px',
      weight: '500'
    }
  },
  {
    name: 'Helper Text',
    className: 'helper-text',
    specs: {
      size: '12px',
      lineHeight: '20px',
      weight: '400'
    }
  },
  {
    name: 'Chip',
    className: 'chip',
    specs: {
      size: '14px',
      lineHeight: '18px',
      weight: '500'
    }
  },
  {
    name: 'Tooltip',
    className: 'tooltip',
    specs: {
      size: '14px',
      lineHeight: '150%',
      weight: '400'
    }
  },
  {
    name: 'Table Header',
    className: 'table-header',
    specs: {
      size: '16px',
      lineHeight: '24px',
      weight: '600'
    }
  },
  {
    name: 'Menu Item',
    className: 'menu-item',
    specs: {
      size: '16px',
      lineHeight: '150%',
      weight: '400'
    }
  },
  {
    name: 'Menu Item Dense',
    className: 'menu-item-dense',
    specs: {
      size: '14px',
      lineHeight: '18px',
      weight: '400'
    }
  },
  {
    name: 'List Subheader',
    className: 'list-subheader',
    specs: {
      size: '14px',
      lineHeight: '48px',
      weight: '500'
    }
  },
  {
    name: 'Bottom Nav',
    className: 'bottom-nav',
    specs: {
      size: '14px',
      lineHeight: '166%',
      weight: '400'
    }
  },
  {
    name: 'Input Text',
    className: 'input-text',
    specs: {
      size: '16px',
      lineHeight: '24px',
      weight: '400'
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
    name: 'Radius 0',
    variable: '--radius-0',
    value: '0px',
    description: 'Used for square corners'
  },
  {
    name: 'Radius 8',
    variable: '--radius-8',
    value: '8px',
    description: 'Used for small rounded corners'
  },
  {
    name: 'Radius 12',
    variable: '--radius-12',
    value: '12px',
    description: 'Used for standard rounded corners'
  },
  {
    name: 'Radius 16',
    variable: '--radius-16',
    value: '16px',
    description: 'Used for large rounded corners'
  },
  {
    name: 'Radius Pill',
    variable: '--radius-pill',
    value: '999px',
    description: 'Used for fully rounded / pill shapes'
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
    <div className={styles.typeItem}>
      <div className={styles.typePreview}>
        <span className={style.className}>
          Abc
        </span>
      </div>
      <div className={styles.typeInfo}>
        <h3 className={styles.typeName}>{style.name}</h3>
        <div className={styles.typeSpecs}>
          <span className={styles.typeSpec}>Size: {style.specs.size}</span>
          <span className={styles.typeSpec}>Line Height: {style.specs.lineHeight}</span>
          <span className={styles.typeSpec}>Weight: {style.specs.weight}</span>
        </div>
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
        description: 'Our color primitives form the foundation of our design system.',
        content: COLOR_TOKENS
      },
      {
        id: 'semantic',
        title: 'Component Colors',
        description: 'Component-specific colors that define interactive and functional elements of the interface.',
        content: [
          {
            name: 'Background',
            colors: [
              { name: 'Primary', variable: '--background-primary', description: 'Maps to White' },
              { name: 'Secondary', variable: '--background-secondary', description: 'Maps to Neutral 100' },
              { name: 'Tertiary', variable: '--background-tertiary', description: 'Maps to Neutral 200' }
            ]
          },
          {
            name: 'Text',
            colors: [
              { name: 'Primary', variable: '--text-primary', description: 'Maps to Neutral 800' },
              { name: 'Secondary', variable: '--text-secondary', description: 'Maps to Neutral 500' },
              { name: 'Disabled', variable: '--text-disabled', description: 'Maps to Neutral 300' }
            ]
          },
          {
            name: 'Actions',
            colors: [
              { name: 'Primary', variable: '--action-primary', description: 'Maps to Blue 600' },
              { name: 'Primary Hover', variable: '--action-primary-hover', description: 'Maps to Blue 700' },
              { name: 'Destructive', variable: '--action-destructive', description: 'Maps to Red 600' },
              { name: 'Destructive Hover', variable: '--action-destructive-hover', description: 'Maps to Red 700' },
              { name: 'Disabled', variable: '--action-disabled', description: 'Maps to Neutral 200' },
              { name: 'On Background', variable: '--action-on-background', description: 'Maps to White' }
            ]
          },
          {
            name: 'Alerts',
            colors: [
              { name: 'Error Icon', variable: '--alert-error-icon', description: 'Maps to Red 600' },
              { name: 'Error Background', variable: '--alert-error-background', description: 'Maps to Red 200' },
              { name: 'Success Icon', variable: '--alert-success-icon', description: 'Maps to Green 600' },
              { name: 'Success Background', variable: '--alert-success-background', description: 'Maps to Green 200' },
              { name: 'Info Icon', variable: '--alert-info-icon', description: 'Maps to Blue 600' },
              { name: 'Info Background', variable: '--alert-info-background', description: 'Maps to Blue 200' },
              { name: 'Warning Icon', variable: '--alert-warning-icon', description: 'Maps to Yellow 600' },
              { name: 'Warning Background', variable: '--alert-warning-background', description: 'Maps to Yellow 200' }
            ]
          },
          {
            name: 'Tooltip',
            colors: [
              { name: 'Background', variable: '--tooltip-background', description: 'Maps to Neutral 800' },
              { name: 'Text', variable: '--tooltip-text', description: 'Maps to White' }
            ]
          },
          {
            name: 'Border',
            colors: [
              { name: 'Divider', variable: '--border-divider', description: 'Maps to Neutral 200' }
            ]
          },
          {
            name: 'Backdrop',
            colors: [
              { name: 'Overlay', variable: '--backdrop-overlay', description: 'Maps to 50% Black' }
            ]
          }
        ]
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
    title: 'Corner Radius',
    subsections: [
      {
        id: 'radius',
        title: 'Corner Radius',
        description: 'A set of border radius values for consistent component shapes.',
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

  const renderContent = (content: any) => {
    if (Array.isArray(content)) {
      if (content[0] && 'colors' in content[0]) {
        return content.map((group) => (
          <ColorGroup key={group.name} group={group} />
        ));
      } else if (content[0] && 'specs' in content[0]) {
        return (
          <div className={styles.typeStyles}>
            {content.map((style) => (
              <TypeExample key={style.name} style={style} />
            ))}
          </div>
        );
      } else if (content[0] && 'value' in content[0]) {
        // Check if it's radius tokens
        if (content === RADIUS_TOKENS) {
          return (
            <div className={styles.radiusTokens}>
              {content.map((token) => (
                <RadiusExample key={token.name} token={token} />
              ))}
            </div>
          );
        }
        // Spacing tokens
        return (
          <div className={styles.spacingTokens}>
            {content.map((token) => (
              <SpacingExample key={token.name} token={token} />
            ))}
          </div>
        );
      }
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
                    {renderContent(subsection.content)}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </main>
    </div>
  );
} 