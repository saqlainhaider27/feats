/**
 * ============================================================================
 * FEATS WEBSITE IMAGE CONFIGURATION & ASSET REGISTRY
 * ============================================================================
 * 
 * Manage and update all website photos from this single file!
 * 
 * HOW TO ADD YOUR OWN IMAGES:
 * ----------------------------------------------------------------------------
 * 1. For Local Files:
 *    Drop your images into the `public/` directory (e.g. `public/my-project.jpg`).
 *    Then set the url to: "/my-project.jpg"
 * 
 * 2. For Online / Cloud URLs:
 *    Set the url directly to any web link: "https://example.com/photo.jpg"
 * 
 * Currently, all slots use clean SVG placeholders so you can replace them 
 * one-by-one or all at once whenever your new photos are ready.
 * ============================================================================
 */

// Global fallback placeholder
export const DEFAULT_PLACEHOLDER = "/placeholders/project-placeholder.svg";

// ----------------------------------------------------------------------------
// 1. ABOUT SECTION IMAGE
// ----------------------------------------------------------------------------
export const aboutImage = {
    // Current active image (currently using clean SVG placeholder):
    url: "/placeholders/about-placeholder.svg",
    alt: "FEATS Fiberglass & Composite Engineering Facilities",

    // Previous original image path for your reference:
    previousUrl: "/about-img.jpg"
};

// ----------------------------------------------------------------------------
// 2. MULTINATIONAL PROJECT IMAGES (Projects 1 to 18)
// ----------------------------------------------------------------------------
export const projectImages = {
    1: {
        id: 1,
        title: "Burj Dubai Development — The Dubai Mall (DCPI)",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_4.jpg"
    },
    2: {
        id: 2,
        title: "Mall of the Emirates — Chilled Water Pipeline",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_8.jpg"
    },
    3: {
        id: 3,
        title: "Central Utility Complex (CUC) — Dubai Airport Expansion",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_13.jpg"
    },
    4: {
        id: 4,
        title: "Emirates Engineering Centre — Hangar Facilities",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_9.jpg"
    },
    5: {
        id: 5,
        title: "Sohar Fertilizer Project — Sohar Port",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_5.jpg"
    },
    6: {
        id: 6,
        title: "Barka Phase II Power & Desalination Plant",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_27.jpg"
    },
    7: {
        id: 7,
        title: "Hotlink / HBI Combo Plant — Sohar Port",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_1.jpg"
    },
    8: {
        id: 8,
        title: "Complete Water System for SHADEED Plant — Sohar Port",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_11.jpg"
    },
    9: {
        id: 9,
        title: "Air Liquide Extension & Modification Works — Sohar Port",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_12.jpg"
    },
    10: {
        id: 10,
        title: "Sohar Fertilizer Project — Pipeline Rubber Relining",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_28.jpg"
    },
    11: {
        id: 11,
        title: "Dubai Airport Free Zone (DAFZA) — 2B+G+8 Headquarters",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_10.jpg"
    },
    12: {
        id: 12,
        title: "Salalah IWPP Project — Seawater Intake & Sea Outfall",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_14.jpg"
    },
    13: {
        id: 13,
        title: "Sohar Sewage Network Phase-I — Pumping Stations GRP Lining",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_20.jpg"
    },
    14: {
        id: 14,
        title: "Al Maktoum International Airport (Jebel Ali) — Sewage Infrastructure",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_18.jpg"
    },
    15: {
        id: 15,
        title: "Salalah IWPP Project — High-Pressure Water Piping & Spools",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_16.jpg"
    },
    16: {
        id: 16,
        title: "Barka II Power Plant — High-Pressure GRE Fire Protection",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_17.jpg"
    },
    17: {
        id: 17,
        title: "Al Duqm International Airport (Package 1) — Sewage Stations GRP Lining",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_19.jpg"
    },
    18: {
        id: 18,
        title: "Reverse Osmosis (R.O.) Plant Project — Yibal Oilfield",
        url: "/placeholders/project-placeholder.svg",
        previousUrl: "/projects/img_15.jpg"
    }
};

/**
 * Helper to fetch project image safely
 */
export function getProjectImage(projectId) {
    return projectImages[projectId]?.url || DEFAULT_PLACEHOLDER;
}
