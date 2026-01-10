import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def optimize_file(filepath, replacements):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for pattern, replacement in replacements:
            content = re.sub(pattern, replacement, content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"[ERROR] {filepath}: {e}")
        return False

# Optimize holotropic-breathwork page
print("Optimizing holotropic-breathwork page...")
optimize_file(r'about\holotropic-breathwork\page.tsx', [
    (r'className="relative h-\[400px\] flex', r'className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex'),
    (r'className="text-4xl md:text-5xl lg:text-6xl font-serif', r'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif'),
    (r'className="text-xl leading-relaxed text-gray-700 mb-8"', r'className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8"'),
    (r'className="py-16 md:py-24"', r'className="py-12 sm:py-16 md:py-24"'),
    (r'className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6', r'className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'),
    (r'className="bg-earth-50 rounded-lg p-6"', r'className="bg-earth-50 rounded-lg p-6 sm:p-8"'),
    (r'className="text-xl font-semibold', r'className="text-base sm:text-lg md:text-xl font-semibold'),
    (r'className="text-3xl font-serif font-bold text-earth-900 mb-6', r'className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6'),
    (r'className="text-2xl font-serif font-bold', r'className="text-xl sm:text-2xl font-serif font-bold'),
    (r'className="inline-flex items-center justify-center rounded-md bg-earth-600', r'className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-earth-600'),
    (r'className="inline-flex items-center justify-center rounded-md border-2 border-earth-600', r'className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-earth-600'),
])

# Optimize events page
print("Optimizing events page...")
optimize_file(r'events\page.tsx', [
    (r'className="relative h-\[350px\] flex', r'className="relative min-h-[300px] sm:min-h-[350px] flex'),
    (r'className="text-4xl md:text-5xl font-serif', r'className="text-3xl sm:text-4xl md:text-5xl font-serif'),
    (r'className="text-xl text-earth-100"', r'className="text-base sm:text-lg md:text-xl text-earth-100"'),
    (r'className="py-16 md:py-24"', r'className="py-12 sm:py-16 md:py-24"'),
    (r'className="text-3xl font-serif font-bold text-earth-900 mb-8"', r'className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-6 sm:mb-8"'),
    (r'className="space-y-6"', r'className="space-y-4 sm:space-y-6"'),
    (r'className="text-2xl font-semibold text-earth-900 mb-2"', r'className="text-xl sm:text-2xl font-semibold text-earth-900 mb-2"'),
    (r'className="grid grid-cols-1 md:grid-cols-3 gap-4', r'className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'),
    (r'className="text-lg text-gray-700 mb-4"', r'className="text-base sm:text-lg text-gray-700 mb-4"'),
    (r'className="inline-flex items-center justify-center rounded-md bg-earth-600', r'className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-earth-600'),
    (r'className="bg-earth-50 rounded-lg p-8 md:p-12', r'className="bg-earth-50 rounded-lg p-6 sm:p-8 md:p-12'),
    (r'className="text-2xl md:text-3xl font-serif', r'className="text-xl sm:text-2xl md:text-3xl font-serif'),
])

print("Done!")
