export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <div className="grid-cols-12">
        <div className="mb-3 mt-3 rounded-md border-2 border-red-300 bg-red-200 p-3">
          <p{...props} className={'font-sans text-red-700' + className}><span class="font-bold text-red-800">Oops!</span> Estas credenciales no coinciden con nuestros registros
            {'.'}
        </p>
        </div>
      </div>

    ) : null;
}
