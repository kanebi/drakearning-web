import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col items-center max-w-4xl mx-auto py-8 gap-8">
      <h1 class="text-4xl font-bold text-center">
        Welcome to Drak Earning
      </h1>
      
      <div class=" p-6 rounded-lg shadow-lg" >
        <p class="text-lg text-gray-700">
          Earn money while you read! Drak Earning is a unique platform for Nigerians 
          that rewards you with up to 4 naira for every article you read.
        </p>
      </div>
      <button  onClick$={()=> window.open('https://expo.dev/accounts/kanemanuel/projects/drakearning/builds/400326c6-8ad5-43ac-866d-e548b5967817')}
        class="  bg-red-500 w-max min-w-10 px-8 py-4 rounded-lg text-xl text-white font-semibold
                transition-colors"
      >
        Download App
      </button>
    </div>
  );
}); 