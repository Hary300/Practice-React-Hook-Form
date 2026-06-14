import { useState, type ChangeEvent } from 'react';

export default function DynamicSkills() {
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillError, setSkillError] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSkillInput(e.target.value);
  }

  function handleAddClick(skill: string) {
    let hasError = false;
    const normalizedSkill = skill.trim().toLowerCase();

    if (!normalizedSkill) {
      hasError = true;
      setSkillError('Skill is required');
    } else if (skills.includes(normalizedSkill)) {
      hasError = true;
      setSkillError('Skill already exists');
    } else {
      setSkillError('');
    }

    if (hasError) return;
    setSkills((prev) => [...prev, normalizedSkill]);
    setSkillInput('');
  }

  function handleRemoveClick(targetedIndex: number) {
    setSkills((prev) => prev.filter((_, index) => index !== targetedIndex));
  }

  function formatDataSkill(newSkill: string) {
    const lowerCaseDataSkill = newSkill.trim().toLowerCase();
    const formattedDataSkill =
      lowerCaseDataSkill.slice(0, 1).toUpperCase() +
      lowerCaseDataSkill.slice(1);
    return formattedDataSkill;
  }

  return (
    <div className='wrapper'>
      <h2>Level 0.7 Dynamic Form Thinking (Dynamic Skills)</h2>
      <input
        type='text'
        placeholder='Skill'
        value={skillInput}
        onChange={handleChange}
      />
      {skillError && <p className='error-text'>{skillError}</p>}
      <button onClick={() => handleAddClick(skillInput)}>Add Skill</button>
      <ul>
        {skills.map((skill, index) => (
          <li key={skill} className='skill-item'>
            <p>
              {index + 1}. {formatDataSkill(skill)}
            </p>
            <div className='w-fit'>
              <button onClick={() => handleRemoveClick(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
