const GROUPS = [
  { key: 'mammals', label: 'Mammals', blurb: 'Warm-blooded, fur-covered', emoji: '🐘', color: '#f4e7da', classes: ['mammalia'], rep: 'African bush elephant',
    seeds: ['lion', 'bear', 'fox', 'wolf', 'deer', 'monkey', 'whale', 'bat'] },
  { key: 'birds', label: 'Birds', blurb: 'Feathered flyers and swimmers', emoji: '🦅', color: '#def3fd', classes: ['aves'], rep: 'Bald eagle',
    seeds: ['eagle', 'owl', 'parrot', 'penguin', 'duck', 'hawk', 'falcon', 'sparrow'] },
  { key: 'reptiles', label: 'Reptiles', blurb: 'Scaly, cold-blooded survivors', emoji: '🦎', color: '#defde0', classes: ['reptilia'], rep: 'Nile crocodile',
    seeds: ['gecko', 'snake', 'turtle', 'lizard', 'crocodile', 'python', 'iguana', 'cobra'] },
  { key: 'amphibians', label: 'Amphibians', blurb: 'Life on land and in water', emoji: '🐸', color: '#eaeda1', classes: ['amphibia'], rep: 'Red-eyed tree frog',
    seeds: ['frog', 'toad', 'salamander', 'newt', 'axolotl'] },
  { key: 'fish', label: 'Bony fish', blurb: 'Freshwater and sea fish', emoji: '🐟', color: '#d6ecf5', classes: ['actinopterygii'], rep: 'Clownfish',
    seeds: ['trout', 'salmon', 'bass', 'tuna', 'eel', 'carp', 'catfish', 'seahorse'] },
  { key: 'sharks', label: 'Sharks & rays', blurb: 'Cartilage-skeleton hunters', emoji: '🦈', color: '#d5d5d4', classes: ['chondrichthyes'], rep: 'Great white shark',
    seeds: ['shark', 'ray', 'skate', 'hammerhead', 'manta'] },
  { key: 'jawless', label: 'Lampreys & hagfish', blurb: 'Jawless, eel-like fish', emoji: '🐍', color: '#dfe3d2', classes: ['cephalaspidomorphi', 'myxini', 'petromyzontida'], rep: 'Sea lamprey',
    seeds: ['lamprey', 'hagfish'] },
  { key: 'lobe-finned', label: 'Lobe-finned fish', blurb: 'Coelacanths and lungfish', emoji: '🐠', color: '#cfe6e2', classes: ['sarcopterygii'], rep: 'Coelacanth',
    seeds: ['coelacanth', 'lungfish'] },
  { key: 'insects', label: 'Insects', blurb: 'Six legs, endless variety', emoji: '🐝', color: '#f8d5a3', classes: ['insecta', 'entognatha', 'collembola'], rep: 'Monarch butterfly',
    seeds: ['bee', 'ant', 'butterfly', 'beetle', 'wasp', 'dragonfly', 'moth', 'mosquito'] },
  { key: 'arachnids', label: 'Arachnids', blurb: 'Spiders, scorpions and kin', emoji: '🕷️', color: '#cbc3e3', classes: ['arachnida', 'merostomata', 'pycnogonida'], rep: 'Tarantula',
    seeds: ['spider', 'scorpion', 'tick', 'mite', 'tarantula'] },
  { key: 'crustaceans', label: 'Crustaceans', blurb: 'Crabs, lobsters, shrimp', emoji: '🦀', color: '#fddfdf', classes: ['malacostraca', 'branchiopoda', 'maxillopoda', 'hexanauplia', 'ostracoda', 'thecostraca'], rep: 'Dungeness crab',
    seeds: ['crab', 'lobster', 'shrimp', 'crayfish', 'prawn', 'krill', 'barnacle'] },
  { key: 'myriapods', label: 'Centipedes & millipedes', blurb: 'Many-legged crawlers', emoji: '🐛', color: '#e9d9c3', classes: ['chilopoda', 'diplopoda', 'symphyla', 'pauropoda'], rep: 'Centipede',
    seeds: ['centipede', 'millipede'] },
  { key: 'snails', label: 'Snails & slugs', blurb: 'Soft-bodied shell carriers', emoji: '🐌', color: '#fceaff', classes: ['gastropoda'], rep: 'Garden snail',
    seeds: ['snail', 'slug', 'limpet', 'conch', 'whelk'] },
  { key: 'bivalves', label: 'Clams & mussels', blurb: 'Two-shelled filter feeders', emoji: '🦪', color: '#ece6f2', classes: ['bivalvia'], rep: 'Oyster',
    seeds: ['clam', 'oyster', 'mussel', 'scallop'] },
  { key: 'cephalopods', label: 'Octopus & squid', blurb: 'Intelligent ocean shapeshifters', emoji: '🐙', color: '#f6d9e6', classes: ['cephalopoda'], rep: 'Giant Pacific octopus',
    seeds: ['octopus', 'squid', 'cuttlefish', 'nautilus'] },
  { key: 'jellyfish', label: 'Jellyfish & corals', blurb: 'Stinging drifters and reef builders', emoji: '🪼', color: '#dcebf9', classes: ['scyphozoa', 'hydrozoa', 'anthozoa', 'cubozoa'], rep: 'Moon jelly',
    seeds: ['jellyfish', 'coral', 'anemone', 'hydra'] },
  { key: 'echinoderms', label: 'Starfish & urchins', blurb: 'Spiny-skinned sea life', emoji: '⭐', color: '#fde3c8', classes: ['asteroidea', 'echinoidea', 'holothuroidea', 'ophiuroidea', 'crinoidea'], rep: 'Starfish',
    seeds: ['starfish', 'urchin', 'sea cucumber', 'sand dollar'] },
  { key: 'worms', label: 'Worms & leeches', blurb: 'Segmented and soft-bodied', emoji: '🪱', color: '#f1d9d2', classes: ['clitellata', 'polychaeta', 'oligochaeta', 'nematoda', 'turbellaria'], rep: 'Earthworm',
    seeds: ['worm', 'leech', 'earthworm'] },
  { key: 'sponges', label: 'Sponges', blurb: 'The simplest animals', emoji: '🧽', color: '#f3eec2', classes: ['demospongiae', 'calcarea', 'hexactinellida'], rep: 'Sea sponge',
    seeds: ['sponge'] }
];

const colors = { default: '#f5f5f5' };
const emojis = { default: '🐾' };
GROUPS.forEach(g => g.classes.forEach(c => { colors[c] = g.color; emojis[c] = g.emoji; }));

function groupOfClass(cls) {
  return GROUPS.find(g => g.classes.includes(cls)) || null;
}
function classLabel(cls) {
  const g = groupOfClass(cls);
  if (g) return g.label;
  return cls ? cls.charAt(0).toUpperCase() + cls.slice(1) : 'Animal';
}
