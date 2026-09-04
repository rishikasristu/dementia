import React, { useState } from 'react';
import {
  Heart,
  Plus,
  User,
  Camera,
  BookOpen,
  Home,
  Clock
} from 'lucide-react';

export const PersonalMemoryManager = ({ memories = [], addMemory }) => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    photoUrl: '',
    story: '',
    familiarObject: '',
    routine: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };
  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setFormData((previous) => ({
      ...previous,
      photoUrl: imageUrl
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    if (addMemory) {
      addMemory({
        id: Date.now(),
        name: formData.name,
        relation: formData.relationship,
        relationship: formData.relationship,
        photo: formData.photoUrl,
        photoUrl: formData.photoUrl,
        story: formData.story,
        familiarObject: formData.familiarObject,
        routine: formData.routine
      });
    }
    setFormData({
      name: '',
      relationship: '',
      photoUrl: '',
      story: '',
      familiarObject: '',
      routine: ''
    });

    setShowForm(false);
  };

  return (
    <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-terracotta/15 text-terracotta flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-forest">
              Personal Memory Manager
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Add familiar people, stories, objects and routines
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowForm((previous) => !previous)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-forest text-cream font-bold text-xs hover:opacity-90"
        >
          <Plus className="w-4 h-4" />
          Add Memory
        </button>
      </div>

      {/* Add Memory Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-cream p-5 rounded-2xl border border-sage/30 space-y-4"
        >
          <h3 className="text-sm font-extrabold text-forest">
            Add Personal Memory
          </h3>

          {/* Name */}
          <div>
            <label className="text-xs font-bold text-forest">
              Family Member / Person
            </label>

            <div className="relative mt-1">
              <User className="absolute left-3 top-3 w-4 h-4 text-ink/50" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Example: Anjali"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sage/40 bg-cream-light text-sm outline-none focus:border-forest"
                required
              />
            </div>
          </div>

          {/* Relationship */}
          <div>
            <label className="text-xs font-bold text-forest">
              Relationship
            </label>

            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              placeholder="Example: Daughter"
              className="w-full mt-1 px-3 py-2.5 rounded-xl border border-sage/40 bg-cream-light text-sm outline-none focus:border-forest"
            />
          </div>
          {/* Photo */}
          <div>
            <label className="text-xs font-bold text-forest">
              Upload Photo
            </label>

            <div className="relative mt-1">
              <Camera className="absolute left-3 top-3 w-4 h-4 text-ink/50" />

              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sage/40 bg-cream-light text-sm outline-none focus:border-forest"
              />
            </div>
          </div>
          {/* Personal Story */}
          <div>
            <label className="text-xs font-bold text-forest">
              Personal Story
            </label>

            <div className="relative mt-1">
              <BookOpen className="absolute left-3 top-3 w-4 h-4 text-ink/50" />

              <textarea
                name="story"
                value={formData.story}
                onChange={handleChange}
                placeholder="Example: Anjali used to visit every Sunday..."
                rows={3}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sage/40 bg-cream-light text-sm outline-none focus:border-forest resize-none"
              />
            </div>
          </div>

          {/* Familiar Object */}
          <div>
            <label className="text-xs font-bold text-forest">
              Familiar Object / Place
            </label>

            <div className="relative mt-1">
              <Home className="absolute left-3 top-3 w-4 h-4 text-ink/50" />

              <input
                type="text"
                name="familiarObject"
                value={formData.familiarObject}
                onChange={handleChange}
                placeholder="Example: Old family house"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sage/40 bg-cream-light text-sm outline-none focus:border-forest"
              />
            </div>
          </div>

          {/* Routine */}
          <div>
            <label className="text-xs font-bold text-forest">
              Familiar Routine
            </label>

            <div className="relative mt-1">
              <Clock className="absolute left-3 top-3 w-4 h-4 text-ink/50" />

              <input
                type="text"
                name="routine"
                value={formData.routine}
                onChange={handleChange}
                placeholder="Example: Morning tea at 8 AM"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-sage/40 bg-cream-light text-sm outline-none focus:border-forest"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 rounded-xl border border-sage/40 text-xs font-bold text-forest"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-forest text-cream text-xs font-bold"
            >
              Save Memory
            </button>

          </div>
        </form>
      )}

      {/* Memory List */}
      {memories.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">

          {memories.map((memory) => (
            <div
              key={memory.id}
              className="p-4 bg-cream rounded-2xl border border-sage/30"
            >
              <div className="flex items-center gap-3">

                {memory.photoUrl ? (
                  <img
                    src={memory.photoUrl}
                    alt={memory.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-forest" />
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-extrabold text-forest">
                    {memory.name}
                  </h3>

                  <p className="text-xs text-ink/60">
                    {memory.relationship || 'Personal connection'}
                  </p>
                </div>

              </div>

              {memory.story && (
                <p className="text-xs text-ink/70 mt-3 leading-relaxed">
                  📖 {memory.story}
                </p>
              )}

              {memory.familiarObject && (
                <p className="text-xs text-ink/70 mt-2">
                  🏠 {memory.familiarObject}
                </p>
              )}

              {memory.routine && (
                <p className="text-xs text-ink/70 mt-2">
                  🔄 {memory.routine}
                </p>
              )}

            </div>
          ))}

        </div>
      )}

      {/* Empty State */}
      {memories.length === 0 && !showForm && (
        <div className="text-center py-6 bg-cream rounded-2xl border border-dashed border-sage/40">
          <Heart className="w-8 h-8 mx-auto text-sage" />

          <p className="text-sm font-bold text-forest mt-2">
            No personal memories added yet
          </p>

          <p className="text-xs text-ink/60 mt-1">
            Add familiar people, stories, objects or routines.
          </p>
        </div>
      )}

      {/* Personal Memory Mode Notice */}
      <div className="p-3 bg-sage/10 border border-sage/30 rounded-2xl">
        <p className="text-xs text-ink/70 leading-relaxed">
          🌿 Personal memories can be used to create familiar and
          meaningful experiences in Personal Memory Mode.
        </p>
      </div>

    </div>
  );
};