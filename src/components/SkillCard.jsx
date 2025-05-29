import PropTypes from "prop-types";

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset dark:ring-zinc-50/10 ring-[#001d3d]/10 rounded-2xl p-3 dark:hover:bg-[#ffc248]/10 hover:bg-[#001d3d]/20 transition-colors group' + classes}>
        <figure className="dark:bg-zinc-700/50 bg-[#001d3d]/30 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors ">
            <img src={imgSrc} width={32} height={32} alt={label} />
        </figure>
        <div>
            <h3 className="dark:text-[#ffc248] text-[#334561] dark:font-normal font-semibold">{label}</h3>

            <p className="text-zinc-500 text-sm ">
                {desc}
            </p>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard
