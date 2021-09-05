function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const ROOTS_IMPORT = '/import';
const ROOTS_Normalized = '/normalized';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH = {
    import: '/import',
    normalize: '/normalize',
    publish: '/publish',
    logs: '/logs'
}